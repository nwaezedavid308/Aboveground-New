"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "restoration", label: "Restoration" },
    { id: "development", label: "Development" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects */}
      <FeaturedProjects activeFilter={activeFilter} setActiveFilter={setActiveFilter} filters={filters} />

      {/* Project Stats */}
      <ProjectStats />

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/exterior-1.jpg"
          alt="Aboveground project portfolio"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/90 via-slate-700/85 to-slate-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-600/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-slate-600/30 text-slate-200 rounded-full text-sm font-medium backdrop-blur-sm border border-slate-500/40">
            Our Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Exceptional Projects,
          <br />
          <span className="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">Proven Results</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Explore our portfolio of completed projects that showcase our commitment to quality, innovation, and client
          satisfaction across residential and commercial construction.
        </motion.p>
      </div>
    </section>
  )
}

function FeaturedProjects({
  activeFilter,
  setActiveFilter,
  filters,
}: {
  activeFilter: string
  setActiveFilter: (filter: string) => void
  filters: Array<{ id: string; label: string }>
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      title: "Modern Family Home Renovation",
      category: "residential",
      location: "Vancouver, BC",
      duration: "4 months",
      budget: "$150K - $200K",
      description:
        "Complete transformation of a 1960s family home into a modern, energy-efficient living space with open-concept design and smart home features.",
      image: "/images/interior-1.jpg",
      features: ["Kitchen Renovation", "Bathroom Upgrades", "Smart Home Integration", "Energy Efficiency"],
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      category: "commercial",
      location: "Vancouver, BC",
      duration: "8 months",
      budget: "$500K+",
      description:
        "Construction of a state-of-the-art office complex featuring sustainable materials, modern amenities, and flexible workspace solutions.",
      image: "/images/exterior-2.jpg",
      features: ["Sustainable Design", "Modern Amenities", "Flexible Workspaces", "LEED Certified"],
    },
    {
      id: 3,
      title: "Heritage Building Restoration",
      category: "restoration",
      location: "Gastown, Vancouver",
      duration: "6 months",
      budget: "$300K - $400K",
      description:
        "Careful restoration of a historic building while preserving its character and integrating modern safety and efficiency standards.",
      image: "/images/exterior-1.jpg",
      features: ["Heritage Preservation", "Modern Safety Standards", "Character Retention", "Code Compliance"],
    },
    {
      id: 4,
      title: "Luxury Condo Development",
      category: "development",
      location: "Richmond, BC",
      duration: "18 months",
      budget: "$2M+",
      description:
        "Development of a luxury condominium complex with premium finishes, amenities, and sustainable building practices.",
      image: "/images/hero-1.jpg",
      features: ["Luxury Finishes", "Premium Amenities", "Sustainable Practices", "Community Spaces"],
    },
    {
      id: 5,
      title: "Boutique Restaurant Build-Out",
      category: "commercial",
      location: "Yaletown, Vancouver",
      duration: "3 months",
      budget: "$200K - $300K",
      description:
        "Complete build-out of a boutique restaurant space featuring custom millwork, commercial kitchen, and atmospheric dining areas.",
      image: "/images/interior-2.jpg",
      features: ["Custom Millwork", "Commercial Kitchen", "Atmospheric Design", "Code Compliance"],
    },
    {
      id: 6,
      title: "Basement Suite Addition",
      category: "residential",
      location: "Burnaby, BC",
      duration: "2 months",
      budget: "$75K - $100K",
      description:
        "Creation of a legal basement suite with separate entrance, full kitchen, and bathroom for rental income generation.",
      image: "/images/hero-2.jpg",
      features: ["Legal Suite", "Separate Entrance", "Full Kitchen", "Rental Ready"],
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Discover the quality and craftsmanship that defines our work across various project types.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/80 text-white text-sm rounded-full backdrop-blur-sm">
                    {filters.find((f) => f.id === project.category)?.label}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-300">
                    <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <DollarSign className="h-4 w-4 mr-2 text-blue-400" />
                    {project.budget}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 2).map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                      +{project.features.length - 2} more
                    </span>
                  )}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  <Link href="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "500+", label: "Projects Completed", description: "Successfully delivered across all categories" },
    { number: "98%", label: "Client Satisfaction", description: "Based on post-project surveys" },
    { number: "15+", label: "Years Experience", description: "Building trust in the Vancouver area" },
    { number: "$50M+", label: "Project Value", description: "Total value of completed projects" },
  ]

  return (
    <section ref={ref} className="py-24 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project <span className="text-blue-400">Statistics</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and client satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      project: "Kitchen Renovation",
      quote:
        "Aboveground transformed our outdated kitchen into a modern masterpiece. Their attention to detail and transparent communication made the entire process stress-free.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      project: "Restaurant Build-Out",
      quote:
        "The team delivered our restaurant project on time and within budget. The quality of work exceeded our expectations, and we've received countless compliments from customers.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      project: "Office Renovation",
      quote:
        "Professional, reliable, and skilled. Aboveground handled our office renovation with minimal disruption to our business operations. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-blue-400">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400">
                    ★
                  </div>
                ))}
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed italic">"{testimonial.quote}"</p>

              <div className="text-blue-400 text-sm font-medium">Project: {testimonial.project}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-blue-400">Project</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let's discuss your vision and create something extraordinary
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
