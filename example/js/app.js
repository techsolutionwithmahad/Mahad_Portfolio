// ============================================
// Naeem Electronics - Homepage Application Logic
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderMegaMenu();
  renderCategories();
  renderDealsCarousel();
  renderFeaturedProducts();
  initQuickView();
  updateCartCount();
});

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("mobileToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  toggle?.addEventListener("click", () => {
    links.classList.toggle("open");
    toggle.textContent = links.classList.contains("open") ? "✕" : "☰";
  });
}

// ===== MEGA MENU =====
function renderMegaMenu() {
  const menu = document.getElementById("megaMenu");
  if (!menu) return;
  menu.innerHTML = CATEGORIES.map(c => `
    <a href="shop.html?cat=${c.id}">
      <span class="cat-icon">${c.icon}</span>
      <div><div class="cat-name">${c.name}</div><div class="cat-count">${c.count} Products</div></div>
    </a>
  `).join("");
}

// ===== CATEGORIES GRID =====
function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
    <a href="shop.html?cat=${c.id}" class="cat-card">
      <div class="icon">${c.icon}</div>
      <div class="name">${c.name}</div>
      <div class="count">${c.count} Products</div>
    </a>
  `).join("");
}

// ===== PRODUCT CARD HTML =====
function productCardHTML(p) {
  const discount = getDiscountPercent(p.oldPrice, p.price);
  const emi = calculateEMI(p.price, p.downPayment || 0, 12);
  const stars = "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="card-badges">
          ${p.badge ? `<span class="badge badge-accent">${p.badge}</span>` : ""}
          ${discount > 0 ? `<span class="badge badge-success">-${discount}%</span>` : ""}
        </div>
        <div class="card-quick-view">
          <button class="quick-view-btn" onclick="openQuickView(${p.id})" aria-label="Quick view">👁</button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-title">${p.name}</div>
        <div class="card-rating">
          <span class="stars">${stars}</span>
          <span class="rating-num">${p.rating}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="card-pricing">
          <span class="card-price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="card-old-price">${formatPrice(p.oldPrice)}</span>` : ""}
        </div>
        ${p.installment ? `
        <div class="card-installment">
          <div>
            <div class="emi-label">Installment from</div>
            <div class="emi-price">${formatPrice(emi)}/mo</div>
          </div>
        </div>` : ""}
        <div class="card-actions">
          <a href="product.html?id=${p.id}" class="btn btn-outline" style="font-size:0.8rem;">View Details</a>
          <button class="btn btn-primary" style="font-size:0.8rem;" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// ===== DEALS CAROUSEL =====
function renderDealsCarousel() {
  const track = document.getElementById("dealsCarousel");
  if (!track) return;
  const deals = getBestDeals();
  track.innerHTML = deals.map(p => productCardHTML(p)).join("");

  const prev = document.getElementById("prevDeal");
  const next = document.getElementById("nextDeal");
  prev?.addEventListener("click", () => { track.scrollBy({ left: -320, behavior: "smooth" }); });
  next?.addEventListener("click", () => { track.scrollBy({ left: 320, behavior: "smooth" }); });
}

// ===== FEATURED PRODUCTS =====
function renderFeaturedProducts() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  const featured = getFeaturedProducts();
  grid.innerHTML = featured.map(p => productCardHTML(p)).join("");
}

// ===== QUICK VIEW MODAL =====
function initQuickView() {
  const overlay = document.getElementById("quickViewModal");
  const closeBtn = document.getElementById("modalClose");
  if (!overlay) return;

  closeBtn?.addEventListener("click", () => overlay.classList.remove("active"));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("active");
  });
}

function openQuickView(id) {
  const p = getProductById(id);
  if (!p) return;
  const overlay = document.getElementById("quickViewModal");
  const img = document.getElementById("modalImg");
  const body = document.getElementById("modalBody");

  img.src = p.images?.[0] || p.image;
  img.alt = p.name;

  const emi = calculateEMI(p.price, p.downPayment || 0, 12);
  body.innerHTML = `
    <div class="pd-brand">${p.brand}</div>
    <h2 style="font-size:1.5rem;font-weight:800;margin-bottom:12px;">${p.name}</h2>
    <div class="pd-rating">
      <span class="stars">${"★".repeat(Math.floor(p.rating))}</span>
      <span style="font-size:0.85rem;font-weight:600;">${p.rating}</span>
      <span style="font-size:0.8rem;color:var(--text-muted);">(${p.reviews} reviews)</span>
    </div>
    <div style="margin: 16px 0;">
      <span style="font-size:1.6rem;font-weight:800;">${formatPrice(p.price)}</span>
      <span style="text-decoration:line-through;color:var(--text-dim);margin-left:10px;">${formatPrice(p.oldPrice)}</span>
    </div>
    ${p.installment ? `<div class="card-installment" style="margin-bottom:16px;">
      <div><div class="emi-label">Monthly Installment</div><div class="emi-price">${formatPrice(emi)}/mo × 12</div></div>
    </div>` : ""}
    <p style="color:var(--text-muted);font-size:0.9rem;line-height:1.7;margin-bottom:20px;">${p.description}</p>
    <div class="card-actions">
      <a href="product.html?id=${p.id}" class="btn btn-outline">Full Details</a>
      <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `;
  overlay.classList.add("active");
}

// ===== CART =====
function getCart() {
  return JSON.parse(localStorage.getItem("ne_cart") || "[]");
}
function saveCart(cart) {
  localStorage.setItem("ne_cart", JSON.stringify(cart));
  updateCartCount();
}
function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id, qty: 1 }); }
  saveCart(cart);
  // Visual feedback
  const btn = event?.target;
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = "✓ Added!";
    btn.style.background = "var(--success)";
    setTimeout(() => { btn.textContent = orig; btn.style.background = ""; }, 1200);
  }
}
function updateCartCount() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}
