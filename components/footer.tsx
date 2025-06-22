"use client"

import { motion } from "framer-motion"
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: "Residential Renovation", href: "/services" },
      { label: "Commercial Construction", href: "/services" },
      { label: "Property Restoration", href: "/services" },
      { label: "Land Development", href: "/services" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
      { label: "Get Quote", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Licensing", href: "#" },
    ],
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Aboveground</span>
            </Link>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Building beyond the surface with transparency, innovation, and unmatched quality. Your trusted
              construction partner in Vancouver.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span>(604) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <span>u.anitherealtor@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                <span>Vancouver, BC, Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} Aboveground Renovation and Construction Corp. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">Licensed & Insured • BC License #123456</p>
        </motion.div>
      </div>
    </footer>
  )
}
