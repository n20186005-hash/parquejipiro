import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "parquejipiro.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Parque Recreacional Jipiro — Loja, Ecuador",
      template: "%s | Parque Recreacional Jipiro",
    },
    description:
      locale === 'es' ? "Guía de viaje al Parque Recreacional Jipiro en Loja, Ecuador. Descubre este hermoso parque recreacional, espacios verdes y atracciones familiares." :
      locale === 'zh' ? "Parque Recreacional Jipiro 旅行指南——探索厄瓜多尔洛哈美丽的休闲公园：绿化空间、家庭娱乐设施。" :
      "A travel guide to Parque Recreacional Jipiro in Loja, Ecuador. Discover this beautiful recreational park, green spaces, and family attractions.",
    keywords: [
      "Parque Recreacional Jipiro",
      "Loja tourism",
      "Ecuador recreational park",
      "Parks in Loja",
      "Velasco Ibarra 1982",
      "Loja attractions",
      "Ecuador parks",
      "Family activities Loja",
      "Green space Ecuador",
      "Loja city guide",
    ],
    authors: [{ name: "Parque Recreacional Jipiro Travel Guide" }],
    creator: "Parque Recreacional Jipiro Travel Guide",
    publisher: "Parque Recreacional Jipiro Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === 'es' ? 'es_EC' : locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: ["en_US", "es_EC", "zh_CN"].filter(l => !l.startsWith(locale)),
      url: `${baseUrl}/${locale}`,
      title: "Parque Recreacional Jipiro — Loja, Ecuador",
      description: (locale === 'es' ? "Guía de viaje al Parque Recreacional Jipiro en Loja, Ecuador. Descubre este hermoso parque recreacional, espacios verdes y atracciones familiares." :
      (locale === 'zh' ? "Parque Recreacional Jipiro 旅行指南——探索厄瓜多尔洛哈美丽的休闲公园：绿化空间、家庭娱乐设施。" :
      "A travel guide to Parque Recreacional Jipiro in Loja, Ecuador. Discover this beautiful recreational park, green spaces, and family attractions.")),
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
    twitter: {
      card: "summary_large_image",
      title: "Parque Recreacional Jipiro — Loja, Ecuador",
      description:
        "A travel guide to Parque Recreacional Jipiro in Loja, Ecuador.",
      images: ["/gallery/parque-recreacional-jipiro (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }];
}

import { generateSchema } from "../schema";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <SchemaScript locale={locale} />
      <body>{children}</body>
    </html>
  );
}
