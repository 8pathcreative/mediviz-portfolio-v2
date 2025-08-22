"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    projectDetails: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="contact-heading" className="font-sans font-bold text-4xl lg:text-5xl text-primary mb-6">
            Start Your Project
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-serif">
            Ready to transform your medical education or visualization needs? Let's discuss how we can bring your vision
            to life.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-sans text-2xl text-primary">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium text-primary mb-2 block">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      aria-describedby="firstName-error"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-medium text-primary mb-2 block">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      aria-describedby="lastName-error"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-primary mb-2 block">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    aria-describedby="email-error"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="text-sm font-medium text-primary mb-2 block">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="Medical University"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="projectDetails" className="text-sm font-medium text-primary mb-2 block">
                    Project Details *
                  </label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    placeholder="Tell us about your medical visualization or application needs..."
                    className="min-h-32"
                    required
                    value={formData.projectDetails}
                    onChange={handleChange}
                    aria-describedby="projectDetails-error"
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 shadow-md rounded-lg">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-sans font-bold text-lg text-primary mb-1">Email Us</h3>
                    <a
                      href="mailto:hello@medvizstudio.com"
                      className="text-secondary font-serif hover:text-accent transition-colors"
                      aria-label="Send email to hello@medvizstudio.com"
                    >
                      hello@medvizstudio.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 shadow-md rounded-lg">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-sans font-bold text-lg text-primary mb-1">Call Us</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-secondary font-serif hover:text-accent transition-colors"
                      aria-label="Call us at +1 (555) 123-4567"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 shadow-md rounded-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-sans font-bold text-lg text-primary mb-1">Visit Us</h3>
                    <address className="text-secondary font-serif not-italic">
                      Medical Innovation Center
                      <br />
                      123 Healthcare Blvd
                      <br />
                      Innovation City, IC 12345
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
