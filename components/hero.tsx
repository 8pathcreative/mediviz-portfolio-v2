import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-6" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 id="hero-heading" className="font-sans font-bold text-5xl lg:text-6xl leading-tight text-primary">
              Bringing Medical
              <span className="text-accent block">Visualization</span>
              to Life
            </h1>
            <p className="text-xl text-secondary leading-relaxed font-serif">
              We create cutting-edge 3D medical illustrations and full-stack applications that transform complex medical
              concepts into interactive, educational experiences for healthcare professionals and students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8" asChild>
                <a href="#portfolio" aria-label="View our medical visualization portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <a href="#demo" aria-label="Watch demonstration of our medical applications">
                  <Play className="mr-2 h-5 w-5" aria-hidden="true" />
                  Watch Demo
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-2xl">
              <Image
                src="/human-anatomy-interactive.png"
                alt="Interactive 3D medical visualization showing detailed human anatomy with educational overlays"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                <span className="text-sm font-medium text-card-foreground">Interactive 3D Models</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
