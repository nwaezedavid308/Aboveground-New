"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Building, Wrench, MapPin, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Services */}
      <MainServices />

      {/* Process Section */}
      <ProcessSection />

      {/* Why Choose Our Services */}
      <WhyChooseServices />

      {/* Service Areas */}
      <ServiceAreas />

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
          src="/images/hero-2.jpg"
          alt="Aboveground construction services"
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
            Our Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Complete Construction
          <br />
          <span className="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          From residential renovations to commercial construction, we deliver excellence in every project. Your vision,
          our expertise, exceptional results.
        </motion.p>
      </div>
    </section>
  )
}

function MainServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Home,
      title: "Residential Renovation",
      description:
        "Transform your home into the space you've always dreamed of. From kitchen makeovers to complete home renovations, we bring your vision to life with quality craftsmanship and attention to detail.",
      features: [
        "Kitchen & Bathroom Renovations",
        "Basement Finishing",
        "Home Additions",
        "Interior & Exterior Remodeling",
        "Custom Built-ins",
      ],
      image: "/images/interior-1.jpg",
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description:
        "Build your business dreams with our comprehensive commercial construction services. We understand the unique needs of businesses and deliver projects on time and within budget.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Restaurants & Hospitality",
        "Industrial Facilities",
        "Tenant Improvements",
      ],
      image: "/images/exterior-2.jpg",
    },
    {
      icon: Wrench,
      title: "Property Restoration",
      description:
        "Restore and revitalize properties to their former glory and beyond. Our restoration services combine preservation techniques with modern improvements.",
      features: [
        "Historic Building Restoration",
        "Damage Repair & Restoration",
        "Structural Improvements",
        "Heritage Preservation",
        "Emergency Restoration Services",
      ],
      image: "/images/exterior-1.jpg",
    },
    {
      icon: MapPin,
      title: "Land Development",
      description:
        "Turn raw land into thriving communities with our strategic development expertise. From planning to completion, we manage every aspect of your development project.",
      features: [
        "Site Planning & Design",
        "Infrastructure Development",
        "Residential Communities",
        "Commercial Developments",
        "Environmental Compliance",
      ],
      image: "/images/interior-2.jpg",
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
            Our <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive construction services tailored to meet your unique needs and exceed your expectations.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mr-4">
                    <service.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="relative group">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Consultation & Planning",
      description:
        "We start by understanding your vision, needs, and budget. Our team conducts a thorough assessment and creates a detailed plan.",
    },
    {
      number: "02",
      title: "Design & Approval",
      description:
        "Our designers work with you to create detailed plans and 3D visualizations. We handle all permits and approvals needed.",
    },
    {
      number: "03",
      title: "Construction & Updates",
      description:
        "Our skilled craftsmen bring your project to life while keeping you informed with regular updates and transparent communication.",
    },
    {
      number: "04",
      title: "Quality Check & Handover",
      description:
        "We conduct thorough quality inspections and walk through the completed project with you to ensure everything meets our high standards.",
    },
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
            Our <span className="text-blue-400">Process</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A streamlined approach that ensures quality results and keeps you informed every step of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-slate-600"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Licensed & Insured Professionals",
    "Transparent Pricing & Communication",
    "Quality Materials & Craftsmanship",
    "On-Time Project Completion",
    "Comprehensive Warranty Coverage",
    "24/7 Customer Support",
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="text-blue-400">Services</span>?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We don't just build structures – we build relationships, trust, and lasting value for our clients. Here's
              what sets us apart from the competition.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <Star className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Let's discuss your project and see how we can bring your vision to life. Get a free consultation and
              detailed quote today.
            </p>

            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full"
              >
                <Link href="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServiceAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const areas = [
    "Vancouver",
    "Burnaby",
    "Richmond",
    "Surrey",
    "Coquitlam",
    "North Vancouver",
    "West Vancouver",
    "New Westminster",
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
            Service <span className="text-blue-400">Areas</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Proudly serving the Greater Vancouver Area and surrounding communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-300"
              >
                <MapPin className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <span className="text-slate-300 font-medium">{area}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400">
              Don't see your area listed?{" "}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">
                Contact us
              </Link>{" "}
              to discuss your project location.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your <span className="text-blue-400">Vision</span> Into Reality
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to start your construction project? Let's discuss how we can bring your ideas to life with our expert
            services and commitment to excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
