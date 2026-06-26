import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  const whatsappNumber = "233241127631";

  const message = encodeURIComponent(
    `Hello ${siteConfig.shortName}, I want to make an inquiry.`
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-blue-500/30 transition hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}