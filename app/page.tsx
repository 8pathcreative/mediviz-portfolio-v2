import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "mediviz Studio - Professional 3D Medical Illustration & Development",
  description:
    "Leading studio creating interactive 3D medical visualizations and full-stack healthcare applications. Specializing in medical education tools, anatomical models, and clinical training software.",
  openGraph: {
    title: "mediviz Studio - Professional 3D Medical Illustration & Development",
    description:
      "Leading studio creating interactive 3D medical visualizations and full-stack healthcare applications.",
  },
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <Hero />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
