'use client'

import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Brain, Code, Smartphone, } from 'lucide-react'
import HeroSection from '@/components/hero-section'
import FooterSection from '@/components/footer'
import AboutSection from '@/components/about'
import ServicesSection from '@/components/services'
import FeaturesSection from '@/components/features-9'
import FAQs from '@/components/faqs'
import ContactSection from '@/components/contact'
import { SectionDivider } from '@/components/ui/section-divider'
import ProjectsSection from '@/components/projects'


const services = [
  { icon: Code, title: 'Web Development', description: 'Creating responsive and dynamic Enterprise web applications for your business needs' },
  { icon: Smartphone, title: 'Mobile Development', description: 'Building native and cross-platform mobile apps for your business needs' },
  { icon: Brain, title: 'AI Integration', description: 'Incorporating AI solutions into existing systems for Business Process automation' },
]

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header & Hero Section */}
      <div>
        <main>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='relative h-screen mx-auto px-2'>
              <HeroSection />
            </div>
          </motion.div>
        </main>
      </div>

      <div className="relative">
        <SectionDivider />
        {/* The About Section */}
        <div id="about" className="mx-4 max-w-7xl border-x px-4 py-20 [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)] -mt-12">
          <AboutSection />
        </div>
      </div>

      <div className="relative">
        <SectionDivider />
        {/* Services Section */}
        <div id="services" className="mx-4 max-w-7xl border-x px-4 py-20 [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)] -mt-12">
          <ServicesSection />
        </div>
      </div>

      <div className="relative">
        <SectionDivider />
      {/* Features Section */}
      <motion.div
        id="features"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mx-4 max-w-7xl border-x px-4 py-20 [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)]'>
          <FeaturesSection />
        </div>
      </motion.div>
      </div>

      <div className="relative">
        <SectionDivider />
        {/* Projects Section */}
        <motion.div id="projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='mx-4 max-w-7xl border-x px-4 py-20 [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)]'>
            <ProjectsSection />
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <SectionDivider />
        {/* FAQ Section */}
        <motion.div id="faqs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-4 max-w-7xl border-x px-4 py-20 [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)] -mt-12">
            <FAQs />
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <SectionDivider />
        {/* Contact Section */}
        <motion.div id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-4 max-w-7xl border-x px-4 py-20 [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)] -mt-12">
            <ContactSection />
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <SectionDivider />
        {/* Footer */}
        <div className="mx-4 max-w-7xl border-x px-4 py-12 [--color-border:color-mix(in_oklab,var(--border)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--border)_60%,transparent)] -mt-12">
          <FooterSection />
        </div>
      </div>
    </div>
  )
}

