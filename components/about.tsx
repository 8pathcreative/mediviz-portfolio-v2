import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-primary mb-6">
              Transforming Medical Education Through Innovation
            </h2>
            <p className="text-xl text-secondary mb-8 font-normal leading-relaxed">
              We are a specialized studio dedicated to creating cutting-edge 3D medical illustrations and full-stack
              applications. Our team combines deep medical knowledge with advanced technology to deliver interactive
              educational tools that enhance learning and improve patient outcomes.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="font-sans font-bold text-2xl text-primary mb-1">50+</div>
                  <div className="text-sm text-secondary">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="font-sans font-bold text-2xl text-primary mb-1">25+</div>
                  <div className="text-sm text-secondary">Healthcare Partners</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="font-sans font-bold text-2xl text-primary mb-1">10+</div>
                  <div className="text-sm text-secondary">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-2xl">
              <img
                src="/medical-3d-visualization.png"
                alt="Medical professionals using our technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
