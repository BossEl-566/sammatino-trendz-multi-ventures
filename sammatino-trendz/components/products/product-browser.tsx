"use client";

import * as React from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

import type { Product, ProductCategory } from "@/types/product";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ProductBrowserProps = {
  products: Product[];
  categories: ProductCategory[];
};

type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "rating"
  | "newest";

type PriceFilter =
  | "all"
  | "under-100"
  | "100-300"
  | "300-1000"
  | "above-1000";

export function ProductBrowser({ products, categories }: ProductBrowserProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [priceFilter, setPriceFilter] = React.useState<PriceFilter>("all");
  const [sortOption, setSortOption] = React.useState<SortOption>("featured");

  const filteredProducts = React.useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    let results = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch) ||
        product.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesPrice =
        priceFilter === "all"
          ? true
          : priceFilter === "under-100"
            ? product.price < 100
            : priceFilter === "100-300"
              ? product.price >= 100 && product.price <= 300
              : priceFilter === "300-1000"
                ? product.price > 300 && product.price <= 1000
                : product.price > 1000;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    results = [...results].sort((a, b) => {
      if (sortOption === "price-low") {
        return a.price - b.price;
      }

      if (sortOption === "price-high") {
        return b.price - a.price;
      }

      if (sortOption === "rating") {
        return b.rating - a.rating;
      }

      if (sortOption === "newest") {
        return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
      }

      return Number(Boolean(b.isFeatured)) - Number(Boolean(a.isFeatured));
    });

    return results;
  }, [products, searchTerm, selectedCategory, priceFilter, sortOption]);

  const hasActiveFilters =
    searchTerm || selectedCategory !== "All" || priceFilter !== "all";

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setPriceFilter("all");
    setSortOption("featured");
  };

  return (
    <div className="mt-10">
      <div className="rounded-[2rem] border bg-card p-4 shadow-sm sm:p-6">
        <div className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <SlidersHorizontal className="size-5" />
          </div>

          <div>
            <h2 className="font-black">Find products faster</h2>
            <p className="text-sm text-muted-foreground">
              Search, filter, and sort the catalogue.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search microwaves, TVs, chargers..."
              className="h-12 rounded-full pl-11"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="h-12 rounded-full border border-input bg-background px-4 text-sm shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={priceFilter}
            onChange={(event) =>
              setPriceFilter(event.target.value as PriceFilter)
            }
            className="h-12 rounded-full border border-input bg-background px-4 text-sm shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value="all">All Prices</option>
            <option value="under-100">Under GHS 100</option>
            <option value="100-300">GHS 100 - 300</option>
            <option value="300-1000">GHS 300 - 1,000</option>
            <option value="above-1000">Above GHS 1,000</option>
          </select>

          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value as SortOption)}
            className="h-12 rounded-full border border-input bg-background px-4 text-sm shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          {hasActiveFilters ? (
            <Button
              type="button"
              variant="outline"
              onClick={resetFilters}
              className="h-12 rounded-full"
            >
              <X className="size-4" />
              Reset
            </Button>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-bold text-foreground">
            {filteredProducts.length}
          </span>{" "}
          of {products.length} products
        </p>

        {selectedCategory !== "All" ? (
          <p className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
            Category: {selectedCategory}
          </p>
        ) : null}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[2rem] border bg-card p-10 text-center shadow-sm">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-muted">
            <Search className="size-7 text-muted-foreground" />
          </div>

          <h3 className="mt-6 text-2xl font-black">No products found</h3>

          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Try changing your search term, category, price range, or sorting
            option.
          </p>

          <Button onClick={resetFilters} className="mt-6 rounded-full">
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}