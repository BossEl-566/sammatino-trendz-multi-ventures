import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Heart,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { formatPrice } from "@/lib/format";
import { siteConfig } from "@/lib/site";

type ProductDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 3);

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : null;

  const whatsappNumber = "233241127631";
  const whatsappMessage = encodeURIComponent(
    `Hello ${siteConfig.shortName}, I am interested in ${product.name}.`
  );

  return (
    <main className="bg-background">
      <section className="container-page py-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to products
        </Link>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border bg-gradient-to-br from-brand-blue-soft via-background to-brand-orange-soft shadow-sm">
              <div className="rounded-3xl bg-background/80 px-8 py-6 text-center shadow-sm backdrop-blur">
                <p className="text-sm font-black text-primary">
                  Product Image
                </p>
                <p className="mt-2 max-w-[260px] text-sm text-muted-foreground">
                  {product.name}
                </p>
              </div>

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                {product.isNew ? (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                    New Arrival
                  </span>
                ) : null}

                {product.isOnSale ? (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-sm">
                    On Sale
                  </span>
                ) : null}

                {discount ? (
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground shadow-sm backdrop-blur">
                    Save {discount}%
                  </span>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {product.gallery.slice(0, 3).map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="flex aspect-square items-center justify-center rounded-3xl border bg-gradient-to-br from-brand-blue-soft to-brand-orange-soft"
                >
                  <p className="text-xs font-bold text-muted-foreground">
                    View {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="rounded-[2rem] border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">
                  {product.category}
                </span>

                <span className="inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground">
                  <Star className="size-4 fill-accent text-accent" />
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1 className="mt-6 text-balance text-3xl font-black tracking-tight sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap items-end gap-3">
                <p className="text-4xl font-black text-primary">
                  {formatPrice(product.price)}
                </p>

                {product.oldPrice ? (
                  <p className="pb-1 text-lg font-semibold text-muted-foreground line-through">
                    {formatPrice(product.oldPrice)}
                  </p>
                ) : null}
              </div>

              <Separator className="my-6" />

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-muted p-4">
                  <PackageCheck className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold">Stock Available</p>
                    <p className="text-sm text-muted-foreground">
                      {product.stock} items left
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-muted p-4">
                  <Truck className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold">Fast Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Delivery support available
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-muted p-4">
                  <ShieldCheck className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold">Quality Checked</p>
                    <p className="text-sm text-muted-foreground">
                      Durable product selection
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-muted p-4">
                  <BadgeCheck className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold">Trusted Support</p>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp assistance ready
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
                <Button size="lg" className="rounded-full">
                  <ShoppingCart className="size-5" />
                  Add to Cart
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  <Heart className="size-5" />
                  <span className="sm:hidden">Add to Wishlist</span>
                </Button>
              </div>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-3 w-full rounded-full"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-5" />
                  Ask on WhatsApp
                </a>
              </Button>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="border-t bg-muted/30 py-20">
          <div className="container-page">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">
                  Related Products
                </p>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  More from {product.category}
                </h2>
              </div>

              <Button asChild variant="outline" className="rounded-full">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}