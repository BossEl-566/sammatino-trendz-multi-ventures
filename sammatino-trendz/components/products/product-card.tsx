import Link from "next/link";
import {
  ArrowRight,
  Heart,
  PackageCheck,
  ShoppingCart,
  Star,
} from "lucide-react";

import type { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : null;

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue-soft via-background to-brand-orange-soft">
        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          {product.isNew ? (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
              New
            </span>
          ) : null}

          {product.isOnSale ? (
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-sm">
              Sale
            </span>
          ) : null}

          {discount ? (
            <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground shadow-sm backdrop-blur">
              -{discount}%
            </span>
          ) : null}
        </div>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4 z-10 rounded-full shadow-sm"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Heart className="size-4" />
        </Button>

        <div className="rounded-2xl bg-background/80 px-5 py-4 text-center shadow-sm backdrop-blur transition duration-300 group-hover:scale-105">
          <p className="text-sm font-black text-primary">Product Image</p>
          <p className="mt-1 max-w-[180px] truncate text-xs text-muted-foreground">
            {product.name}
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {product.category}
            </p>

            <Link href={`/products/${product.slug}`}>
              <h2 className="mt-2 line-clamp-2 text-lg font-black tracking-tight transition hover:text-primary">
                {product.name}
              </h2>
            </Link>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-lg font-black text-primary">
              {formatPrice(product.price)}
            </p>

            {product.oldPrice ? (
              <p className="text-xs text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </p>
            ) : null}
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 text-sm">
          <span className="inline-flex items-center gap-1 font-medium">
            <Star className="size-4 fill-accent text-accent" />
            {product.rating}
            <span className="text-muted-foreground">({product.reviews})</span>
          </span>

          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <PackageCheck className="size-4 text-primary" />
            {product.stock} left
          </span>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
          <Button className="rounded-full">
            <ShoppingCart className="size-4" />
            Add to Cart
          </Button>

          <Button asChild variant="outline" size="icon" className="rounded-full">
            <Link href={`/products/${product.slug}`}>
              <ArrowRight className="size-4" />
              <span className="sr-only">View product details</span>
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}