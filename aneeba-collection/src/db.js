import { db } from "./firebase.js";
import {
  collection, doc, getDocs, getDoc, addDoc, updateDoc,
  query, where, orderBy, limit, increment, serverTimestamp,
} from "firebase/firestore";

export async function fetchProducts(options = {}) {
  const constraints = [];
  if (options.category) constraints.push(where("category", "==", options.category));
  constraints.push(orderBy("createdAt", "desc"));
  if (options.limit) constraints.push(limit(options.limit));
  const snap = await getDocs(query(collection(db, "products"), ...constraints));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function fetchProduct(id) {
  const snap = await getDoc(doc(db, "products", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function fetchOrdersByPhone(phone) {
  const q = query(
    collection(db, "orders"),
    where("phone", "==", phone),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function placeOrder(orderData) {
  return await addDoc(collection(db, "orders"), {
    ...orderData,
    status: "pending",
    createdAt: serverTimestamp(),
  });
}

export async function decrementStock(productId) {
  try {
    await updateDoc(doc(db, "products", productId), { stock: increment(-1) });
  } catch (e) {
    console.warn("Stock decrement failed:", e);
  }
}
