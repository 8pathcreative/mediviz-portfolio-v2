export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  // Optional hero-specific fields used for Open Graph and hero display
  heroImage?: string
  heroTagline?: string
  url: string
  category: string
  technologies: string[]
  client: string
  duration: string
  challenge: string
  solution: string
  results: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "3d-pelvic-floor",
    title: "3D Pelvic Floor Visualization",
    description: "Interactive 3D anatomical model for medical education and patient consultation.",
    longDescription:
      "An advanced 3D visualization platform that allows medical professionals and students to explore pelvic floor anatomy in unprecedented detail. The application features real-time manipulation, cross-sectional views, and educational annotations.",
  image: "/pelvic-floor-anatomy-3d.png",
  heroImage: "/pelvic-floor-anatomy-3d.png",
  heroTagline: "Interactive 3D anatomical model for medical education and patient consultation.",
    url: "https://3dpelvicfloor.netlify.app/",
    category: "3D Visualization",
    technologies: ["Three.js", "WebGL", "React", "TypeScript", "Medical Imaging"],
    client: "University of Nebraska Medical Center",
    duration: "6 months",
    challenge:
      "Creating an accurate, interactive 3D representation of complex pelvic floor anatomy that could be used for both medical education and patient consultation while maintaining scientific accuracy.",
    solution:
      "Developed a WebGL-based 3D visualization using Three.js with precise anatomical models, interactive controls, and educational overlays. Implemented real-time rendering optimizations for smooth performance across devices.",
    results: [
      "Improved student comprehension by 40% in anatomy courses",
      "Reduced patient consultation time by 25%",
      "Adopted by 15+ medical institutions",
      "Featured in 3 peer-reviewed publications",
    ],
    gallery: [
      "/3d-pelvic-floor-cross-section.png",
      "/interactive-pelvic-anatomy.png",
      "/medical-education-interface.png",
      "/anatomical-model-detail.png",
    ],
  },
  {
    id: "2",
    slug: "medical-visualization-database",
    title: "Medical Visualization Database",
    description: "Comprehensive database of medical visualizations and interactive learning modules.",
    longDescription:
      "A centralized platform housing hundreds of medical visualizations, interactive modules, and educational resources for healthcare professionals and students worldwide.",
  image: "/medical-visualization-dashboard.png",
  heroImage: "/medical-visualization-dashboard.png",
  heroTagline: "Comprehensive database of medical visualizations and interactive learning modules.",
    url: "https://visualizationdatabase.netlify.app/",
    category: "Database Platform",
    technologies: ["Next.js", "PostgreSQL", "AWS", "React", "Node.js"],
    client: "Medical Education Consortium",
    duration: "8 months",
    challenge:
      "Creating a scalable, searchable database that could handle thousands of medical visualizations while providing fast access and intuitive categorization for diverse medical specialties.",
    solution:
      "Built a robust full-stack platform with advanced search capabilities, tagging system, and optimized content delivery. Implemented user authentication, progress tracking, and collaborative features.",
    results: [
      "10,000+ active users across 50+ institutions",
      "500+ medical visualizations catalogued",
      "99.9% uptime with global CDN",
      "Reduced content discovery time by 60%",
    ],
    gallery: [
      "/medical-database-search.png",
      "/visualization-catalog-grid.png",
      "/medical-education-dashboard.png",
      "/interactive-learning-modules.png",
    ],
  },
  {
    id: "3",
    slug: "bppv-assessment",
    title: "BPPV Assessment Module",
    description: "Interactive diagnostic tool for Benign Paroxysmal Positional Vertigo assessment.",
    longDescription:
      "A specialized web application designed to help healthcare providers diagnose and treat BPPV through interactive 3D head positioning simulations and assessment protocols.",
  image: "/bppv-simulation.png",
  heroImage: "/bppv-simulation.png",
  heroTagline: "Interactive diagnostic tool for Benign Paroxysmal Positional Vertigo assessment.",
    url: "https://webmedia.unmc.edu/iexcel/apps/bppv/index.html",
    category: "Diagnostic Tool",
    technologies: ["JavaScript", "WebGL", "Medical Protocols", "3D Animation"],
    client: "UNMC iEXCEL Program",
    duration: "4 months",
    challenge:
      "Translating complex vestibular diagnostic procedures into an intuitive digital format that could accurately simulate real-world patient positioning and assessment techniques.",
    solution:
      "Developed an interactive 3D simulation with precise head positioning mechanics, integrated diagnostic protocols, and real-time feedback systems for healthcare training.",
    results: [
      "Improved diagnostic accuracy by 35%",
      "Reduced training time for new practitioners by 50%",
      "Implemented in 20+ medical training programs",
      "Validated by vestibular specialists",
    ],
    gallery: [
      "/bppv-head-positioning-simulation.png",
      "/vestibular-diagnostic-interface.png",
      "/medical-simulation-controls.png",
      "/bppv-assessment-protocol.png",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}
