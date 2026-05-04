import type { Metadata } from "next";
import { Kanit, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/** Thai UI: Kanit from Google Fonts (next/font/google). */
const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "favicon.ico", type: "image/x-icon" }],
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
    images: [
      {
        url: "https://ishalab.space/wp-content/uploads/2026/05/og-scaled.png",
        alt: "TIGERS-X",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIGERS-X Scientific Payload Overview",
    description:
      "Thailand Innovative G-force varied Emulsification Research for Space Exploration. Chulabhorn Royal Academy.",
    images: [
      "https://ishalab.space/wp-content/uploads/2026/05/og-scaled.png",
    ],
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
      className={`${poppins.variable} ${kanit.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--s-bg-1)] text-white selection:bg-[var(--s-border-2)]/40 selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
