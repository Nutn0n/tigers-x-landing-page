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
  title: "TIGERS-X — Built in Thailand. Bound for the ISS.",
  description:
    "TIGERS-X is an active payload designed to study Total Parenteral Nutrition in microgravity aboard the International Space Station. Designed and built in Thailand.",
  metadataBase: new URL("https://tigers-x.example"),
  openGraph: {
    title: "TIGERS-X — Built in Thailand. Bound for the ISS.",
    description:
      "Thailand Innovative G-force Varied Emulsification Research for Space Exploration.",
    type: "website",
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
