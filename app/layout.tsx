import type { Metadata } from "next";
import { Noto_Sans_Thai, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/** Thai UI: Noto Sans Thai from Google Fonts (next/font/google). */
const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  title: "TIGERS-X Scientific Payload Overview",
  description:
    "Thailand Innovative G-force varied Emulsification Research for Space Exploration. Chulabhorn Royal Academy.",
  metadataBase: new URL("https://ishalab.space/tigers-x/"),
  openGraph: {
    title: "TIGERS-X Scientific Payload Overview",
    description:
      "Thailand Innovative G-force varied Emulsification Research for Space Exploration. Chulabhorn Royal Academy.",
    url: "https://ishalab.space/tigers-x/",
    siteName: "Integration of Space and Human Advancement",
    type: "website",
    images: [{ url: "/og.png", alt: "TIGERS-X" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIGERS-X Scientific Payload Overview",
    description:
      "Thailand Innovative G-force varied Emulsification Research for Space Exploration. Chulabhorn Royal Academy.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSansThai.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--s-bg-1)] text-white selection:bg-[var(--s-border-2)]/40 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
