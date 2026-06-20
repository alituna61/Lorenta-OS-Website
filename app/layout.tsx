import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Barlow } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow-var",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  manifest: "/manifest.webmanifest",
  title: {
    default: `${siteConfig.name} — ${siteConfig.positioning}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "cognitive operating system",
    "enterprise AI",
    "ERP automation",
    "Logo ERP",
    "Mikro ERP",
    "autonomous agents",
    "KVKK compliant AI",
    "business process automation",
    "Turkish enterprise software",
  ],
  authors: [{ name: "Lorenta OS", url: siteConfig.url }],
  creator: "Lorenta OS",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.positioning}`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.positioning}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/icon.svg`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.email,
          contactType: "sales",
        },
        sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
        founder: [
        {
          "@type": "Person",
          name: "Ali Tuna",
          sameAs: "https://www.linkedin.com/in/alituna/"
        },
        {
          "@type": "Person",
          name: "Şimal Çandar",
          sameAs: "https://www.linkedin.com/in/simalcandar/"
        }
      ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#product`,
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: siteConfig.description,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "TRY",
          lowPrice: "3000",
          offerCount: "3",
        },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <html
      lang="tr"
      className={`${inter.variable} ${jetbrainsMono.variable} ${barlow.variable}`}
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5TSSBKHT');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TSSBKHT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script
          id="jsonld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <CookieBanner />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}