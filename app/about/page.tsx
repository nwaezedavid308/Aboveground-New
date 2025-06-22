"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Heart, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Our Story */}
      <OurStory />

      {/* Core Values */}
      <CoreValues />

      {/* Leadership Team */}
      <Leadership />

      {/* Future Vision */}
      <FutureVision />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/interior-2.jpg" alt="Aboveground interior design" fill className="object-cover" priority />
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
            About Aboveground
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Building Trust,
          <br />
          <span className="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
            Quality & Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          We're not just building structures – we're crafting the future of construction with innovation, transparency,
          and unwavering commitment to excellence.
        </motion.p>
      </div>
    </section>
  )
}

function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              "Aboveground: Where You See It. Trust It. And We Build It — Beyond the Surface."
            </p>
            <p className="text-slate-400 leading-relaxed">
              We exist to transform the construction industry through transparency, innovation, and uncompromising
              quality. Every project we undertake is a testament to our commitment to building not just structures, but
              lasting relationships and trust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              To become a globally recognized construction brand operating across 2-3 continents within the next 50
              years.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We envision a future where Aboveground stands alongside industry giants, known for our legacy of trust,
              timeless builds, and innovative solutions that redefine modern construction for generations to come.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function OurStory() {
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
            Our <span className="text-blue-400">Story</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Born in Vancouver, built for the world.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/exterior-1.jpg"
              alt="Aboveground construction project"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Founded on Innovation</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Aboveground Renovation and Construction Corp was born from a simple belief: construction should be
              transparent, innovative, and built to last. Based in the heart of Vancouver, British Columbia, we've grown
              from a local vision into a forward-thinking company ready to reshape the industry.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our journey began with a commitment to do things differently. While others focused on quick fixes, we
              invested in quality. While others hid behind complex contracts, we chose transparency. While others
              followed trends, we set new standards.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, we serve everyone from homeowners to large institutions, always with the same dedication to
              excellence that started it all. Our clients include the elder generation seeking trusted renovations,
              business owners building their dreams, and government projects that serve entire communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Eye,
      title: "Vision-Driven Innovation",
      description: "We reimagine potential and shape purposeful design that stands the test of time.",
    },
    {
      icon: Heart,
      title: "Integrity & Transparency",
      description: "Honest and open in every quote, every project, every conversation we have.",
    },
    {
      icon: Shield,
      title: "Quality Without Compromise",
      description: "Excellence delivered from start to finish, because your trust deserves nothing less.",
    },
    {
      icon: Users,
      title: "Client-Centered Collaboration",
      description: "Your vision becomes our blueprint. Together, we build something extraordinary.",
    },
    {
      icon: Zap,
      title: "Aboveground Excellence",
      description: "We exceed industry standards through accountability, drive, and relentless pursuit of perfection.",
    },
    {
      icon: Shield,
      title: "Safety & Sustainability",
      description: "Building responsibly with care for people, communities, and our planet's future.",
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
            Our Core <span className="text-blue-400">Values</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The principles that guide every decision, every project, and every relationship we build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                <value.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Leadership() {
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
            Leadership <span className="text-blue-400">Team</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experienced professionals driving innovation and excellence in every project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 text-center"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Users className="h-16 w-16 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Leadership Philosophy</h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our leadership team combines decades of construction expertise with a fresh vision for the industry's
            future. We believe in leading by example, fostering innovation, and building a culture where excellence is
            not just expected—it's inevitable.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function FutureVision() {
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
            The Next <span className="text-blue-400">50 Years</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building a legacy that spans continents and generations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Global Expansion, Local Excellence</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our vision extends far beyond Vancouver. We're building toward a future where Aboveground operates across
              2-3 continents, bringing our standards of excellence to communities worldwide.
            </p>
            <p className="text-slate-400 leading-relaxed">
              But growth doesn't mean losing our soul. Every expansion will carry our core values, our commitment to
              transparency, and our dedication to building not just structures, but lasting relationships with the
              communities we serve.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We're inspired by global leaders like HGTV's storytelling approach, Bosa Construction's urban innovation,
              and Holmes on Homes' "do it right" philosophy. These influences shape our path forward as we build the
              construction company of tomorrow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Ready to Join Our Journey?</h4>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Whether you're planning your dream home renovation or a major commercial project, we're here to turn your
              vision into reality with the same passion and precision that will carry us into the future.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full"
            >
              <Link href="/contact">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
