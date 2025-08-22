"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-sans font-bold text-xl text-primary">
            <a href="/" aria-label="mediviz Studio - Home">
              mediviz Studio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#portfolio"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="View our portfolio"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Learn about our process"
            >
              Process
            </a>
            <a
              href="#about"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="About mediviz Studio"
            >
              About
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <a href="#contact" aria-label="Contact us to get started">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#portfolio"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="View our portfolio"
              >
                Portfolio
              </a>
              <a
                href="#process"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Learn about our process"
              >
                Process
              </a>
              <a
                href="#about"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="About mediviz Studio"
              >
                About
              </a>
              <Button asChild className="bg-accent hover:bg-accent/90 w-fit">
                <a href="#contact" onClick={() => setIsMenuOpen(false)} aria-label="Contact us to get started">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
