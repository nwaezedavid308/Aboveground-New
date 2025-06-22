"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form & Info */}
      <ContactSection
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      />

      {/* Contact Information */}
      <ContactInfo />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/interior-1.jpg" alt="Aboveground contact us" fill className="object-cover" priority />
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
            Get In Touch
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Let's Build Your
          <br />
          <span className="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">Dream Project</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Ready to transform your vision into reality? Contact us today for a free consultation and discover how we can
          bring your construction dreams to life.
        </motion.p>
      </div>
    </section>
  )
}

function ContactSection({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitted,
}: {
  formData: any
  handleInputChange: (field: string, value: string) => void
  handleSubmit: (e: React.FormEvent) => void
  isSubmitted: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Start Your <span className="text-blue-400">Project</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours with a detailed consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-slate-300">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                      placeholder="(604) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Project Type *</label>
                    <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="residential-renovation">Residential Renovation</SelectItem>
                        <SelectItem value="commercial-construction">Commercial Construction</SelectItem>
                        <SelectItem value="property-restoration">Property Restoration</SelectItem>
                        <SelectItem value="land-development">Land Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Budget Range</label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="over-500k">Over $500,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Timeline</label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="planning-phase">Still planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Project Details *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 min-h-[120px]"
                    placeholder="Tell us about your project, including location, specific requirements, and any questions you have..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-slate-300">(604) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-300">u.anitherealtor@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-slate-300">Vancouver, BC, Canada</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-slate-300">Mon-Fri: 8AM-6PM</p>
                    <p className="text-slate-300">Sat: 9AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Why Choose Aboveground?</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Free consultations and detailed quotes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Licensed and insured professionals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Transparent pricing and communication
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Quality guarantee on all work
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">Emergency Services</h4>
              <p className="text-slate-300 mb-4">
                Need urgent construction or restoration services? We offer 24/7 emergency response for critical
                situations.
              </p>
              <Button
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white w-full"
              >
                Emergency Contact: (604) 911-HELP
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            We proudly serve the Greater Vancouver Area and surrounding communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Vancouver Area</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Vancouver</li>
                <li>• North Vancouver</li>
                <li>• West Vancouver</li>
                <li>• Burnaby</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Fraser Valley</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Surrey</li>
                <li>• Richmond</li>
                <li>• Coquitlam</li>
                <li>• New Westminster</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Extended Areas</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Langley</li>
                <li>• Delta</li>
                <li>• Port Moody</li>
                <li>• Custom locations</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "How long does a typical renovation project take?",
      answer:
        "Project timelines vary based on scope and complexity. Kitchen renovations typically take 3-6 weeks, bathroom renovations 2-4 weeks, and whole home renovations 2-6 months. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you handle permits and inspections?",
      answer:
        "Yes, we handle all necessary permits and coordinate inspections as part of our comprehensive service. Our team is familiar with local building codes and requirements.",
    },
    {
      question: "What's included in your free consultation?",
      answer:
        "Our free consultation includes site assessment, initial design discussion, preliminary cost estimates, timeline overview, and answers to all your questions about the project.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "We work with several financing partners to help make your project affordable. We can discuss various payment plans and financing options during your consultation.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "We provide comprehensive warranties on all our work - typically 1 year on labor and pass-through manufacturer warranties on materials. Specific warranty terms are outlined in your contract.",
    },
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-xl text-slate-300">Get answers to common questions about our services and process.</p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
              <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-300 mb-6">Have more questions? We're here to help!</p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <a href="mailto:u.anitherealtor@gmail.com">
              Email Us Your Questions
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
