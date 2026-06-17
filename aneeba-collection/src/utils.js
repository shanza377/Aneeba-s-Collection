export function discPrice(p) {
  return p.discount ? Math.round(p.price - (p.price * p.discount) / 100) : null;
}

export function isNew(p) {
  if (!p.createdAt) return false;
  const t = p.createdAt.toMillis ? p.createdAt.toMillis() : p.createdAt * 1000;
  return Date.now() - t < 7 * 24 * 60 * 60 * 1000;
}

export function showToast(message, duration = 2500) {
  const existing = document.querySelector(".ac-toast");
  if (existing) existing.remove();
  const t = document.createElement("div");
  t.className =
    "ac-toast fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-5 py-3 rounded-full shadow-xl z-[999] text-sm font-medium whitespace-nowrap";
  t.textContent = message;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transition = "opacity .3s";
    setTimeout(() => t.remove(), 300);
  }, duration);
}

export const CART_KEY = "ac_cart";

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export const WA_NUMBER = "923226135815";

export const SITE_FOOTER = `
<footer class="bg-[#1A1A1A] text-gray-400 mt-8 pb-16 md:pb-0">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <img src="/logo.png" class="h-10 object-contain">
          <span class="text-white font-bold serif text-lg">Aneeba's Collection</span>
        </div>
        <p class="text-sm leading-relaxed">Pakistan's trusted online fashion &amp; beauty store. Quality products delivered to your doorstep.</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="index.html" class="hover:text-[#C2185B] transition">🏠 Home</a></li>
          <li><a href="category.html?cat=Ready To Wear" class="hover:text-[#C2185B] transition">👗 Ready To Wear</a></li>
          <li><a href="category.html?cat=Makeup" class="hover:text-[#C2185B] transition">💄 Makeup</a></li>
          <li><a href="category.html?cat=Jewellery" class="hover:text-[#C2185B] transition">💍 Jewellery</a></li>
          <li><a href="track.html" class="hover:text-[#C2185B] transition">📦 Track Order</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact Us</h4>
        <ul class="space-y-2 text-sm">
          <li>📱 WhatsApp: +92 322 6135815</li>
          <li>🚚 Delivery: All over Pakistan</li>
          <li>💳 EasyPaisa · JazzCash · COD</li>
        </ul>
        <a href="https://wa.me/923226135815" target="_blank"
          class="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white text-sm px-4 py-2 rounded-full hover:bg-[#1ebe5d] transition font-medium">
          <svg class="w-4 h-4 fill-white" viewBox="0 0 32 32"><path d="M16.001 2.667c-7.373 0-13.334 5.961-13.334 13.333 0 2.352.614 4.646 1.781 6.667l-1.875 6.854 7.021-1.84c1.979 1.083 4.213 1.652 6.407 1.652 7.373 0 13.333-5.961 13.333-13.333s-5.96-13.333-13.333-13.333zm0 24c-1.994 0-3.946-.521-5.667-1.507l-.406-.233-4.166 1.093 1.114-4.062-.264-.417c-1.081-1.71-1.652-3.678-1.652-5.707 0-5.894 4.773-10.667 10.667-10.667s10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667zm5.84-7.973c-.32-.16-1.893-.933-2.187-.96-.293-.053-.507-.08-.72.08s-.827.96-1.013 1.157c-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.144-.16.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.62-.533-.533-.72-.547l-.613-.013c-.213 0-.56.08-.853.4s-1.12 1.093-1.12 2.667 1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.763.333 1.36.533 1.827.693.773.24 1.467.213 2.02.133.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/></svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
    <div class="border-t border-gray-800 pt-5 text-center">
      <p class="text-xs text-gray-600">© 2025 Aneeba's Collection. All Rights Reserved. Made with ❤️ in Pakistan</p>
    </div>
  </div>
</footer>`;

export const MOBILE_BOTTOM_NAV = `
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 z-30 shadow-[0_-2px_10px_rgba(194,24,91,0.08)]">
  <div class="flex items-center justify-around py-2 px-2">
    <a href="index.html" class="flex flex-col items-center gap-0.5 text-gray-400 hover:text-[#C2185B] transition min-w-[48px]">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
      <span class="text-[9px] font-medium">Home</span>
    </a>
    <a href="category.html?cat=Ready To Wear" class="flex flex-col items-center gap-0.5 text-gray-400 hover:text-[#C2185B] transition min-w-[48px]">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 7H4L5 9z"/></svg>
      <span class="text-[9px] font-medium">Shop</span>
    </a>
    <a href="track.html" class="flex flex-col items-center gap-0.5 text-gray-400 hover:text-[#C2185B] transition min-w-[48px]">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
      <span class="text-[9px] font-medium">Track</span>
    </a>
    <button id="mobileNavCart" class="flex flex-col items-center gap-0.5 text-gray-400 hover:text-[#C2185B] transition min-w-[48px] relative">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
      <span id="mobileNavCartCount" class="absolute -top-0.5 right-5 bg-[#C2185B] text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">0</span>
      <span class="text-[9px] font-medium">Cart</span>
    </button>
    <a href="https://wa.me/923226135815" target="_blank" class="flex flex-col items-center gap-0.5 text-[#25D366] min-w-[48px]">
      <svg class="w-5 h-5 fill-[#25D366]" viewBox="0 0 32 32"><path d="M16.001 2.667c-7.373 0-13.334 5.961-13.334 13.333 0 2.352.614 4.646 1.781 6.667l-1.875 6.854 7.021-1.84c1.979 1.083 4.213 1.652 6.407 1.652 7.373 0 13.333-5.961 13.333-13.333s-5.96-13.333-13.333-13.333zm0 24c-1.994 0-3.946-.521-5.667-1.507l-.406-.233-4.166 1.093 1.114-4.062-.264-.417c-1.081-1.71-1.652-3.678-1.652-5.707 0-5.894 4.773-10.667 10.667-10.667s10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667zm5.84-7.973c-.32-.16-1.893-.933-2.187-.96-.293-.053-.507-.08-.72.08s-.827.96-1.013 1.157c-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.144-.16.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.62-.533-.533-.72-.547l-.613-.013c-.213 0-.56.08-.853.4s-1.12 1.093-1.12 2.667 1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.763.333 1.36.533 1.827.693.773.24 1.467.213 2.02.133.613-.08 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/></svg>
      <span class="text-[9px] font-medium">WhatsApp</span>
    </a>
  </div>
</nav>`;
