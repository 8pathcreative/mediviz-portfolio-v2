import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MedViz Studio - 3D Medical Illustration & Full-Stack Applications",
  description:
    "Professional 3D medical illustration and full-stack application development studio specializing in interactive medical education and visualization tools for healthcare professionals.",
  keywords: [
    "3D medical illustration",
    "medical visualization",
    "healthcare applications",
    "medical education software",
    "interactive anatomy",
    "medical app development",
    "full-stack medical applications",
    "UNMC collaboration",
    "medical training tools",
  ],
  authors: [{ name: "MedViz Studio" }],
  creator: "MedViz Studio",
  publisher: "MedViz Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://medviz-studio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MedViz Studio - 3D Medical Illustration & Full-Stack Applications",
    description:
      "Professional 3D medical illustration and full-stack application development studio specializing in interactive medical education and visualization tools.",
    url: "https://medviz-studio.com",
    siteName: "MedViz Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MedViz Studio - 3D Medical Visualization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedViz Studio - 3D Medical Illustration & Full-Stack Applications",
    description:
      "Professional 3D medical illustration and full-stack application development studio specializing in interactive medical education.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MedViz Studio",
              description: "Professional 3D medical illustration and full-stack application development studio",
              url: "https://medviz-studio.com",
              logo: "https://medviz-studio.com/logo.png",
              sameAs: ["https://www.unmc.edu/iexcel/"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Business",
                email: "contact@medviz-studio.com",
              },
              areaServed: "Worldwide",
              serviceType: [
                "3D Medical Illustration",
                "Medical Application Development",
                "Interactive Medical Education Tools",
                "Healthcare Visualization",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
