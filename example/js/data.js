// ============================================
// Naeem Electronics - Product Data Store
// ============================================

const STORE = {
  name: "Naeem Electronics",
  tagline: "Your Trusted Electronics & Installment Partner",
  currency: "Rs.",
  interestRate: 0, // 0% interest on installments
  tenures: [3, 6, 12, 18, 24],
};

const CATEGORIES = [
  { id: "mobiles", name: "Mobile Phones", icon: "📱", count: 24 },
  { id: "laptops", name: "Laptops", icon: "💻", count: 16 },
  { id: "tablets", name: "Tablets", icon: "📋", count: 10 },
  { id: "accessories", name: "Accessories", icon: "🎧", count: 32 },
  { id: "tvs", name: "Smart TVs", icon: "📺", count: 8 },
  { id: "gaming", name: "Gaming", icon: "🎮", count: 12 },
];

const BRANDS = [
  "Samsung", "Apple", "OnePlus", "Xiaomi", "Oppo", "Vivo",
  "Realme", "Tecno", "Infinix", "HP", "Dell", "Lenovo", "Sony"
];

const PRODUCTS = [
  {
    id: 1,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "mobiles",
    price: 349999,
    oldPrice: 389999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 50000,
    rating: 4.8,
    reviews: 234,
    badge: "Flagship",
    specs: {
      Display: '6.9" Dynamic AMOLED 2X, 120Hz',
      Processor: "Snapdragon 8 Elite",
      RAM: "12GB",
      Storage: "256GB / 512GB / 1TB",
      Camera: "200MP + 50MP + 10MP + 50MP",
      Battery: "5000 mAh, 45W Fast Charging",
      OS: "Android 15, One UI 7",
    },
    description: "The Samsung Galaxy S25 Ultra redefines premium smartphones with its stunning titanium design, powerful Snapdragon 8 Elite processor, and a 200MP camera system that captures every detail.",
    featured: true,
    bestDeal: true,
  },
  {
    id: 2,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "mobiles",
    price: 549999,
    oldPrice: 579999,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 80000,
    rating: 4.9,
    reviews: 412,
    badge: "Premium",
    specs: {
      Display: '6.9" Super Retina XDR, 120Hz ProMotion',
      Processor: "A18 Pro Bionic",
      RAM: "8GB",
      Storage: "256GB / 512GB / 1TB",
      Camera: "48MP + 12MP + 48MP Tetraprism",
      Battery: "4685 mAh, MagSafe",
      OS: "iOS 18",
    },
    description: "iPhone 16 Pro Max features the most advanced camera system ever, the A18 Pro chip, and all-day battery life in a stunning titanium design.",
    featured: true,
    bestDeal: true,
  },
  {
    id: 3,
    name: "OnePlus 13",
    brand: "OnePlus",
    category: "mobiles",
    price: 199999,
    oldPrice: 219999,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 30000,
    rating: 4.7,
    reviews: 189,
    badge: "Hot",
    specs: {
      Display: '6.82" LTPO AMOLED, 120Hz',
      Processor: "Snapdragon 8 Elite",
      RAM: "12GB / 16GB",
      Storage: "256GB / 512GB",
      Camera: "50MP + 50MP + 50MP",
      Battery: "6000 mAh, 100W SUPERVOOC",
      OS: "Android 15, OxygenOS 15",
    },
    description: "OnePlus 13 delivers flagship performance with a massive 6000mAh battery, triple 50MP camera system, and blazing fast 100W charging.",
    featured: true,
    bestDeal: true,
  },
  {
    id: 4,
    name: "Xiaomi 15 Pro",
    brand: "Xiaomi",
    category: "mobiles",
    price: 174999,
    oldPrice: 194999,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 25000,
    rating: 4.6,
    reviews: 156,
    badge: "Value",
    specs: {
      Display: '6.73" LTPO AMOLED, 120Hz',
      Processor: "Snapdragon 8 Elite",
      RAM: "12GB / 16GB",
      Storage: "256GB / 512GB",
      Camera: "50MP + 50MP + 50MP Leica",
      Battery: "5400 mAh, 90W HyperCharge",
      OS: "Android 15, HyperOS 2",
    },
    description: "Xiaomi 15 Pro combines Leica optics with flagship performance at an incredible price point.",
    featured: true,
    bestDeal: false,
  },
  {
    id: 5,
    name: 'MacBook Pro 16" M4 Pro',
    brand: "Apple",
    category: "laptops",
    price: 899999,
    oldPrice: 949999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 150000,
    rating: 4.9,
    reviews: 98,
    badge: "Pro",
    specs: {
      Display: '16.2" Liquid Retina XDR',
      Processor: "Apple M4 Pro",
      RAM: "24GB Unified",
      Storage: "512GB SSD",
      Battery: "Up to 24 hours",
      OS: "macOS Sequoia",
    },
    description: "The most powerful MacBook Pro ever. With the M4 Pro chip, up to 24 hours of battery life, and a stunning Liquid Retina XDR display.",
    featured: true,
    bestDeal: true,
  },
  {
    id: 6,
    name: "Dell XPS 15",
    brand: "Dell",
    category: "laptops",
    price: 459999,
    oldPrice: 499999,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 60000,
    rating: 4.5,
    reviews: 67,
    badge: "",
    specs: {
      Display: '15.6" OLED 3.5K, Touch',
      Processor: "Intel Core Ultra 9",
      RAM: "32GB DDR5",
      Storage: "1TB NVMe SSD",
      Graphics: "NVIDIA RTX 4070",
      OS: "Windows 11 Pro",
    },
    description: "Dell XPS 15 combines a gorgeous OLED display with desktop-class performance in an ultra-portable design.",
    featured: false,
    bestDeal: true,
  },
  {
    id: 7,
    name: "Samsung Galaxy Tab S10 Ultra",
    brand: "Samsung",
    category: "tablets",
    price: 279999,
    oldPrice: 299999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 40000,
    rating: 4.7,
    reviews: 45,
    badge: "New",
    specs: {
      Display: '14.6" Dynamic AMOLED 2X, 120Hz',
      Processor: "MediaTek Dimensity 9300+",
      RAM: "12GB",
      Storage: "256GB / 512GB",
      Camera: "13MP + 8MP",
      Battery: "11200 mAh",
      OS: "Android 15, One UI 7",
    },
    description: "The ultimate Android tablet for creators and professionals with its massive 14.6-inch display and S Pen support.",
    featured: false,
    bestDeal: false,
  },
  {
    id: 8,
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "accessories",
    price: 89999,
    oldPrice: 99999,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 10000,
    rating: 4.8,
    reviews: 321,
    badge: "Best Seller",
    specs: {
      Type: "Over-Ear Wireless",
      Driver: "40mm",
      ANC: "Industry-Leading",
      Battery: "40 hours",
      Connectivity: "Bluetooth 5.3, Multipoint",
      Weight: "250g",
    },
    description: "Industry-leading noise cancellation meets exceptional sound quality. 40 hours of battery life and ultra-comfortable design.",
    featured: true,
    bestDeal: false,
  },
  {
    id: 9,
    name: "Tecno Spark 30 Pro",
    brand: "Tecno",
    category: "mobiles",
    price: 44999,
    oldPrice: 49999,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 5000,
    rating: 4.2,
    reviews: 89,
    badge: "Budget King",
    specs: {
      Display: '6.78" IPS LCD, 120Hz',
      Processor: "MediaTek Helio G100",
      RAM: "8GB",
      Storage: "128GB",
      Camera: "108MP + 2MP",
      Battery: "5000 mAh, 33W",
      OS: "Android 15, HiOS",
    },
    description: "Get flagship features at a budget price. 108MP camera, 120Hz display, and fast charging.",
    featured: false,
    bestDeal: true,
  },
  {
    id: 10,
    name: "Infinix Note 40 Pro",
    brand: "Infinix",
    category: "mobiles",
    price: 54999,
    oldPrice: 59999,
    image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800&h=800&fit=crop",
    ],
    installment: true,
    downPayment: 8000,
    rating: 4.3,
    reviews: 112,
    badge: "",
    specs: {
      Display: '6.78" AMOLED, 120Hz',
      Processor: "MediaTek Dimensity 7020",
      RAM: "8GB + 8GB Extended",
      Storage: "256GB",
      Camera: "108MP AI Camera",
      Battery: "5000 mAh, 68W All-Round",
      OS: "Android 14, XOS 14",
    },
    description: "Infinix Note 40 Pro offers wireless charging and a premium AMOLED display at an unbeatable price.",
    featured: false,
    bestDeal: true,
  },
];

// Utility Functions
function formatPrice(price) {
  return STORE.currency + " " + price.toLocaleString("en-PK");
}

function calculateEMI(price, downPayment, tenure) {
  const principal = price - downPayment;
  const monthlyRate = STORE.interestRate / 12 / 100;
  if (monthlyRate === 0) return Math.ceil(principal / tenure);
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  return Math.ceil(emi);
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  return PRODUCTS.filter((p) => p.category === category);
}

function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}

function getBestDeals() {
  return PRODUCTS.filter((p) => p.bestDeal);
}

function getDiscountPercent(oldPrice, price) {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}
