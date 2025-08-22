import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllProjects } from "@/lib/projects"

const projects = getAllProjects()

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-slate-50" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="portfolio-heading" className="font-sans font-bold text-4xl lg:text-5xl text-primary mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-normal">
            Explore our collection of innovative 3D medical illustrations and full-stack applications that are
            transforming medical education and healthcare visualization.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group hover:shadow-2xl shadow-lg transition-all duration-300 overflow-hidden"
              role="listitem"
            >
              <Card className="h-full">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=400&query=medical visualization"}
                    alt={`${project.title} - ${project.description}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 shadow-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-xl text-primary mb-3">{project.title}</h3>
                  <p className="text-secondary mb-4 font-normal">{project.description}</p>

                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1 group-hover:shadow-lg transition-all" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        Case Study
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent shrink-0"
                      asChild
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live project (opens in new tab)`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
