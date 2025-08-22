import { Card, CardContent } from "@/components/ui/card"
import { FileText, Layers, Code, TestTube, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: FileText,
    title: "Planning Phase",
    description:
      "We analyze your requirements and create a comprehensive project roadmap tailored to your medical education or visualization needs.",
  },
  {
    icon: Layers,
    title: "Script and Storyboard Phase",
    description:
      "Detailed scripting and visual storyboarding to ensure accurate medical representation and optimal user experience flow.",
  },
  {
    icon: Code,
    title: "Development Phase",
    description:
      "Our expert team builds your 3D models and full-stack applications using cutting-edge technologies and medical accuracy standards.",
  },
  {
    icon: TestTube,
    title: "Prototype Phase",
    description:
      "Rigorous testing and refinement with medical professionals to ensure clinical accuracy and educational effectiveness.",
  },
  {
    icon: CheckCircle,
    title: "Completion",
    description:
      "Final delivery with comprehensive documentation, training materials, and ongoing support for your medical visualization project.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-primary mb-6">Our Process</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-normal">
            From initial consultation to final delivery, we follow a proven methodology that ensures exceptional results
            for every medical visualization project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-sm font-medium text-accent mb-2">Step {index + 1}</div>
                </div>
                <h3 className="font-sans font-bold text-lg text-primary mb-3">{step.title}</h3>
                <p className="text-secondary text-sm font-normal">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
