import type { Metadata } from "next";
import type { ReactNode } from "react";
import { org } from "@/lib/org";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const SITE_URL = "https://gyst-ai.github.io";

const title = `${org.acronym} | ${org.name}`;
const description = `${org.name} (${org.acronym}) — ${org.mission}`;
const socialImage = {
  url: "/images/gystai-logo.png",
  width: 320,
  height: 268,
  alt: `${org.name} logo`,
};

// No Event JSON-LD here: that is conference schema and belongs on the inCABS
// site. An Organization entry would need a founding date and legal details
// that do not exist yet, so structured data waits until they do.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: org.acronym,
    images: [socialImage],
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [socialImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
