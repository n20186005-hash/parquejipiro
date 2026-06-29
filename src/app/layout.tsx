import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" }
  ],
};

export const metadata: Metadata = {
  title: "Parque Recreacional Jipiro — Loja, Ecuador",
  description: "A travel guide to Parque Recreacional Jipiro in Loja, Ecuador. Explore this beautiful recreational park, green spaces, and family attractions.",
  metadataBase: new URL(`https://${process.env.CURRENT_SITE_DOMAIN || 'parquejipiro.com'}`),
  alternates: {
    canonical: "/en",
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_EC", "zh_CN"],
    title: "Parque Recreacional Jipiro — Loja, Ecuador",
    description: "A travel guide to Parque Recreacional Jipiro in Loja, Ecuador. Explore this beautiful recreational park, green spaces, and family attractions.",
    siteName: "Parque Recreacional Jipiro Travel Guide",
    images: [
      {
        url: "/gallery/parque-recreacional-jipiro (1).jpg",
        width: 1200,
        height: 630,
        alt: "Parque Recreacional Jipiro - Loja, Ecuador",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
