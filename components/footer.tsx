import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white font-work-sans">Mediviz Studio</h3>
            <p className="text-sm leading-relaxed">
              Professional 3D medical illustration and full-stack application development studio specializing in
              interactive medical education and visualization tools.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.unmc.edu/iexcel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                UNMC iEXCEL Partnership
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-work-sans">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>3D Medical Illustration</li>
              <li>Interactive Medical Applications</li>
              <li>Healthcare Visualization</li>
              <li>Medical Education Tools</li>
              <li>Full-Stack Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-work-sans">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>Ready to bring your medical project to life?</p>
              <Link
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} Mediviz Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
