import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("flex items-center gap-3", className)}
    >
      <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-sm font-black tracking-tight text-primary-foreground shadow-lg shadow-sky-500/20">
        ST
      </div>

      {showText ? (
        <div className="leading-none">
          <p className="text-sm font-black tracking-tight sm:text-base">
            Sammatino Trendz
          </p>
          <p className="mt-1 hidden text-xs text-muted-foreground sm:block">
            Multi-Ventures
          </p>
        </div>
      ) : null}
    </Link>
  );
}