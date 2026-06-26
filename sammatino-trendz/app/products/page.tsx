import type { Metadata } from "next";

import { ProductCard } from "@/components/products/product-card";
import { productCategories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse quality appliances, electronics, phone accessories, lifestyle products, and digital services from Sammatino Trendz Multi-Ventures.",
};

export default function ProductsPage() {
  return (
    <main className="bg-background">
      <section className="container-page section-padding">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
            Product Catalogue
          </p>

          <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
            Shop quality products for your home, lifestyle, and devices.
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Browse appliances, electronics, phone accessories, consumer goods,
            and digital service products from Sammatino Trendz Multi-Ventures.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {productCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}