import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              {siteConfig.tagline} We provide durable household products,
              lifestyle accessories, electronics, airtime, data bundles, and
              digital utility support.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold">Quick Links</h3>

            <div className="mt-4 grid gap-3">
              {mainNav.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Contact</h3>

            <div className="mt-4 grid gap-4 text-sm text-muted-foreground">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{siteConfig.address}</span>
              </p>

              <p className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition hover:text-primary"
                >
                  {siteConfig.phone}
                </a>
              </p>

              <p className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <p>Established {siteConfig.established}</p>
        </div>
      </div>
    </footer>
  );
}