import type { Metadata } from "next";
import { ShoppingBag, Zap } from "lucide-react";

import { ProductBrowser } from "@/components/products/product-browser";
import { productCategories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Online Store",
  description:
    "Shop appliances, electronics, accessories, consumer goods, airtime, and data bundle products from Sammatino Trendz Multi-Ventures.",
};

export default function StorePage() {
  return (
    <main className="bg-background">
      <section className="brand-gradient border-b">
        <div className="container-page py-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
              <ShoppingBag className="size-4" />
              Online Store
            </div>

            <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Shop quality goods and digital services from one trusted place.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Browse home appliances, kitchen appliances, TVs, fans, lifestyle
              accessories, phone accessories, electronics, and discounted data
              bundle offers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border bg-background/70 p-5 shadow-sm backdrop-blur">
                <p className="text-2xl font-black text-primary">Fast</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Quick ordering and support
                </p>
              </div>

              <div className="rounded-3xl border bg-background/70 p-5 shadow-sm backdrop-blur">
                <p className="text-2xl font-black text-primary">Quality</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Durable product selection
                </p>
              </div>

              <div className="rounded-3xl border bg-background/70 p-5 shadow-sm backdrop-blur">
                <p className="flex items-center gap-2 text-2xl font-black text-primary">
                  <Zap className="size-5" />
                  Digital
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Airtime and data bundle support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page section-padding">
        <ProductBrowser products={products} categories={productCategories} />
      </section>
    </main>
  );
}