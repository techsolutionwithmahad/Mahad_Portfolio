// ============================================
// Naeem Electronics - Product Detail Page Logic
// ============================================

let currentProduct = null;
let selectedTenure = 12;
let currentDownPayment = 0;

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderMegaMenu();
  loadProduct();
  updateCartCount();
});

// ===== NAVBAR (shared) =====
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("mobileToggle");
  const links = document.getElementById("navLinks");
  window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 50));
  toggle?.addEventListener("click", () => {
    links.classList.toggle("open");
    toggle.textContent = links.classList.contains("open") ? "✕" : "☰";
  });
}

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

// ===== LOAD PRODUCT =====
function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || 1;
  currentProduct = getProductById(id);

  if (!currentProduct) {
    currentProduct = PRODUCTS[0]; // Fallback to first product
  }

  const p = currentProduct;
  document.title = `${p.name} — Naeem Electronics`;

  // Breadcrumb
  document.getElementById("breadcrumbProduct").textContent = p.name;

  // Main image
  document.getElementById("mainImage").src = p.images[0];
  document.getElementById("mainImage").alt = p.name;

  // Thumbnails
  const thumbs = document.getElementById("thumbsContainer");
  thumbs.innerHTML = p.images.map((img, i) => `
    <div class="pd-thumb ${i === 0 ? "active" : ""}" onclick="switchImage('${img}', this)">
      <img src="${img}" alt="${p.name} view ${i + 1}">
    </div>
  `).join("");

  // Info
  document.getElementById("pdBrand").textContent = p.brand;
  document.getElementById("pdName").textContent = p.name;

  // Rating
  const stars = "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");
  document.getElementById("pdRating").innerHTML = `
    <span class="stars">${stars}</span>
    <span style="font-weight:600;">${p.rating}</span>
    <span style="color:var(--text-muted);font-size:0.85rem;">(${p.reviews} reviews)</span>
    ${p.badge ? `<span class="badge badge-accent" style="margin-left:8px;">${p.badge}</span>` : ""}
  `;

  // Pricing
  const discount = getDiscountPercent(p.oldPrice, p.price);
  document.getElementById("pdPrice").textContent = formatPrice(p.price);
  document.getElementById("pdOldPrice").textContent = formatPrice(p.oldPrice);
  document.getElementById("pdSave").textContent = `Save ${discount}%`;

  // Description
  document.getElementById("pdDesc").textContent = p.description;

  // Specs
  const specsTable = document.getElementById("specsTable");
  specsTable.innerHTML = Object.entries(p.specs).map(([key, val]) => `
    <tr><td>${key}</td><td>${val}</td></tr>
  `).join("");

  // Reviews section
  document.getElementById("avgRating").textContent = p.rating;
  document.getElementById("avgStars").textContent = "★".repeat(Math.floor(p.rating));
  document.getElementById("totalReviews").textContent = `Based on ${p.reviews} reviews`;
  renderSampleReviews();

  // EMI Calculator
  initEMICalculator(p);

  // Tabs
  initTabs();

  // Add to cart
  document.getElementById("addToCartBtn")?.addEventListener("click", () => {
    addToCart(p.id);
  });

  // Related products
  renderRelated(p);
}

// ===== IMAGE SWITCHER =====
function switchImage(src, thumb) {
  document.getElementById("mainImage").src = src;
  document.querySelectorAll(".pd-thumb").forEach(t => t.classList.remove("active"));
  thumb.classList.add("active");
}

// ===== EMI CALCULATOR =====
function initEMICalculator(product) {
  const slider = document.getElementById("dpSlider");
  const tenureBtns = document.getElementById("tenureBtns");

  currentDownPayment = product.downPayment || 0;

  // Setup slider
  slider.min = 0;
  slider.max = Math.floor(product.price * 0.7);
  slider.value = currentDownPayment;
  slider.step = 5000;

  slider.addEventListener("input", () => {
    currentDownPayment = parseInt(slider.value);
    updateEMIDisplay();
  });

  // Tenure buttons
  tenureBtns.innerHTML = STORE.tenures.map(t => `
    <button class="tenure-btn ${t === selectedTenure ? "active" : ""}" data-tenure="${t}">${t} Months</button>
  `).join("");

  tenureBtns.addEventListener("click", (e) => {
    const btn = e.target.closest(".tenure-btn");
    if (!btn) return;
    selectedTenure = parseInt(btn.dataset.tenure);
    tenureBtns.querySelectorAll(".tenure-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    updateEMIDisplay();
  });

  updateEMIDisplay();
}

function updateEMIDisplay() {
  const p = currentProduct;
  if (!p) return;

  const emi = calculateEMI(p.price, currentDownPayment, selectedTenure);
  const remaining = p.price - currentDownPayment;

  document.getElementById("dpDisplay").textContent = formatPrice(currentDownPayment);
  document.getElementById("emiMonthly").textContent = formatPrice(emi);
  document.getElementById("emiTotal").textContent = formatPrice(p.price);
  document.getElementById("emiDown").textContent = formatPrice(currentDownPayment);
  document.getElementById("emiRemaining").textContent = formatPrice(remaining);
}

// ===== TABS =====
function initTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
}

// ===== SAMPLE REVIEWS =====
function renderSampleReviews() {
  const reviews = [
    { name: "Ahmed K.", rating: 5, date: "2 weeks ago", text: "Excellent product! The installment plan made it very affordable. Highly recommend Naeem Electronics." },
    { name: "Sara M.", rating: 4, date: "1 month ago", text: "Great device, fast delivery. EMI process was smooth and hassle-free." },
    { name: "Usman R.", rating: 5, date: "3 weeks ago", text: "Best deal I could find. Genuine product with warranty. Will buy again!" },
  ];
  const container = document.getElementById("reviewsList");
  container.innerHTML = reviews.map(r => `
    <div style="padding: 20px; background: var(--bg-secondary); border-radius: var(--radius-sm); margin-bottom: 12px; border: 1px solid var(--border);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="font-weight:600;">${r.name}</div>
        <div style="font-size:0.75rem;color:var(--text-dim);">${r.date}</div>
      </div>
      <div class="stars" style="margin-bottom:8px;">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <p style="font-size:0.9rem;color:var(--text-muted);line-height:1.6;">${r.text}</p>
    </div>
  `).join("");
}

// ===== RELATED PRODUCTS =====
function renderRelated(product) {
  const grid = document.getElementById("relatedGrid");
  if (!grid) return;
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  grid.innerHTML = related.map(p => productCardHTML(p)).join("");
}

function productCardHTML(p) {
  const discount = getDiscountPercent(p.oldPrice, p.price);
  const emi = calculateEMI(p.price, p.downPayment || 0, 12);
  const stars = "★".repeat(Math.floor(p.rating));
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="card-badges">
          ${p.badge ? `<span class="badge badge-accent">${p.badge}</span>` : ""}
          ${discount > 0 ? `<span class="badge badge-success">-${discount}%</span>` : ""}
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
          <span class="card-old-price">${formatPrice(p.oldPrice)}</span>
        </div>
        ${p.installment ? `<div class="card-installment"><div><div class="emi-label">From</div><div class="emi-price">${formatPrice(emi)}/mo</div></div></div>` : ""}
        <div class="card-actions">
          <a href="product.html?id=${p.id}" class="btn btn-outline" style="font-size:0.8rem;">View</a>
          <button class="btn btn-primary" style="font-size:0.8rem;" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// ===== CART (shared) =====
function getCart() { return JSON.parse(localStorage.getItem("ne_cart") || "[]"); }
function saveCart(cart) { localStorage.setItem("ne_cart", JSON.stringify(cart)); updateCartCount(); }
function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty++; else cart.push({ id, qty: 1 });
  saveCart(cart);
  const btn = event?.target;
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = "✓ Added!";
    setTimeout(() => { btn.textContent = orig; }, 1200);
  }
}
function updateCartCount() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}
