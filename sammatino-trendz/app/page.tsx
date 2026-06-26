import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="brand-gradient">
      <section className="container-page flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            Established {siteConfig.established} · Retail · E-commerce · Telecom
          </div>

          <h1 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Quality Goods.
            <span className="block text-primary">Instant Connectivity.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {siteConfig.name} helps customers shop durable household products,
            lifestyle accessories, electronics, airtime, data bundles, and
            digital utility support from one trusted brand.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/store">
                Start Shopping
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/services">Buy Data Bundle</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            {["Reliable products", "Fast delivery", "Digital services"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-primary" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}