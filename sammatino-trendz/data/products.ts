import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "prod-microwave-001",
    slug: "silver-digital-microwave",
    name: "Silver Digital Microwave",
    category: "Kitchen Appliances",
    description:
      "A durable digital microwave for fast heating, cooking, and everyday kitchen convenience.",
    price: 850,
    oldPrice: 980,
    currency: "GHS",
    image: "/images/products/microwave.jpg",
    gallery: [
      "/images/products/microwave.jpg",
      "/images/products/microwave-2.jpg",
      "/images/products/microwave-3.jpg",
    ],
    rating: 4.8,
    reviews: 32,
    stock: 12,
    isFeatured: true,
    isOnSale: true,
    tags: ["microwave", "kitchen", "appliance", "featured"],
  },
  {
    id: "prod-blender-001",
    slug: "heavy-duty-electric-blender",
    name: "Heavy Duty Electric Blender",
    category: "Kitchen Appliances",
    description:
      "Powerful blender suitable for smoothies, spices, soups, and everyday food preparation.",
    price: 420,
    oldPrice: 500,
    currency: "GHS",
    image: "/images/products/blender.jpg",
    gallery: ["/images/products/blender.jpg"],
    rating: 4.7,
    reviews: 26,
    stock: 20,
    isFeatured: true,
    isOnSale: true,
    tags: ["blender", "kitchen", "smoothie", "appliance"],
  },
  {
    id: "prod-kettle-001",
    slug: "fast-boil-electric-kettle",
    name: "Fast Boil Electric Kettle",
    category: "Kitchen Appliances",
    description:
      "Compact electric kettle designed for quick boiling, tea, coffee, and daily home use.",
    price: 180,
    currency: "GHS",
    image: "/images/products/electric-kettle.jpg",
    gallery: ["/images/products/electric-kettle.jpg"],
    rating: 4.6,
    reviews: 18,
    stock: 35,
    isNew: true,
    tags: ["kettle", "kitchen", "electric", "home"],
  },
  {
    id: "prod-tv-001",
    slug: "43-inch-smart-led-tv",
    name: '43" Smart LED TV',
    category: "TVs",
    description:
      "Smart LED television with clear visuals, streaming support, and a modern slim design.",
    price: 2450,
    oldPrice: 2700,
    currency: "GHS",
    image: "/images/products/smart-tv.jpg",
    gallery: ["/images/products/smart-tv.jpg"],
    rating: 4.9,
    reviews: 41,
    stock: 8,
    isFeatured: true,
    isOnSale: true,
    tags: ["tv", "smart tv", "electronics", "featured"],
  },
  {
    id: "prod-fan-001",
    slug: "standing-cooling-fan",
    name: "Standing Cooling Fan",
    category: "Fans",
    description:
      "Energy-efficient standing fan with strong airflow for homes, offices, and shops.",
    price: 320,
    currency: "GHS",
    image: "/images/products/standing-fan.jpg",
    gallery: ["/images/products/standing-fan.jpg"],
    rating: 4.5,
    reviews: 23,
    stock: 15,
    tags: ["fan", "cooling", "home appliance"],
  },
  {
    id: "prod-charger-001",
    slug: "fast-usb-c-phone-charger",
    name: "Fast USB-C Phone Charger",
    category: "Phone Accessories",
    description:
      "Reliable fast charger for compatible smartphones, tablets, and USB-C devices.",
    price: 95,
    currency: "GHS",
    image: "/images/products/charger.jpg",
    gallery: ["/images/products/charger.jpg"],
    rating: 4.6,
    reviews: 37,
    stock: 50,
    isNew: true,
    tags: ["charger", "phone accessory", "usb-c"],
  },
  {
    id: "prod-powerbank-001",
    slug: "20000mah-power-bank",
    name: "20,000mAh Power Bank",
    category: "Phone Accessories",
    description:
      "High-capacity power bank for charging phones and mobile devices while on the move.",
    price: 260,
    oldPrice: 310,
    currency: "GHS",
    image: "/images/products/power-bank.jpg",
    gallery: ["/images/products/power-bank.jpg"],
    rating: 4.8,
    reviews: 44,
    stock: 22,
    isFeatured: true,
    isOnSale: true,
    tags: ["power bank", "phone accessory", "charging"],
  },
  {
    id: "prod-headphones-001",
    slug: "wireless-bluetooth-headphones",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    description:
      "Comfortable wireless headphones with clear sound for calls, music, and entertainment.",
    price: 350,
    currency: "GHS",
    image: "/images/products/headphones.jpg",
    gallery: ["/images/products/headphones.jpg"],
    rating: 4.7,
    reviews: 29,
    stock: 18,
    tags: ["headphones", "bluetooth", "electronics"],
  },
  {
    id: "prod-phonecase-001",
    slug: "premium-shockproof-phone-case",
    name: "Premium Shockproof Phone Case",
    category: "Phone Accessories",
    description:
      "Protective phone case with a clean modern finish and strong shock protection.",
    price: 75,
    currency: "GHS",
    image: "/images/products/phone-case.jpg",
    gallery: ["/images/products/phone-case.jpg"],
    rating: 4.4,
    reviews: 16,
    stock: 60,
    tags: ["phone case", "accessory", "protection"],
  },
  {
    id: "prod-data-bundle-001",
    slug: "discounted-data-bundle",
    name: "Discounted Data Bundle",
    category: "Consumer Goods",
    description:
      "Affordable data bundle package with fast digital delivery after purchase confirmation.",
    price: 50,
    currency: "GHS",
    image: "/images/products/data-bundle.jpg",
    gallery: ["/images/products/data-bundle.jpg"],
    rating: 4.9,
    reviews: 58,
    stock: 999,
    isFeatured: true,
    isNew: true,
    tags: ["data bundle", "digital service", "telecom"],
  },
];

export const featuredProducts = products.filter((product) => product.isFeatured);

export const saleProducts = products.filter((product) => product.isOnSale);

export const newProducts = products.filter((product) => product.isNew);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3) {
  const currentProduct = getProductBySlug(slug);

  if (!currentProduct) {
    return [];
  }

  return products
    .filter(
      (product) =>
        product.slug !== slug && product.category === currentProduct.category
    )
    .slice(0, limit);
}