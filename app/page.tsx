'use client'

import HeroBoxReveal from '@/components/boxreveal'
import HeroParticle from '@/components/herobackground'
import IconCloudDemo from '@/components/iconcloud'
import AnimatedShinyTextDemo from '@/components/shinytext'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Brain, Code, Smartphone, } from 'lucide-react'
import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { VscGithubInverted } from "react-icons/vsc"


const services = [
  { icon: Code, title: 'Web Development', description: 'Creating responsive and dynamic Enterprise web applications for your business needs' },
  { icon: Smartphone, title: 'Mobile Development', description: 'Building native and cross-platform mobile apps for your business needs' },
  { icon: Brain, title: 'AI Integration', description: 'Incorporating AI solutions into existing systems for Business Process automation' },
]

const faqs = [
  {
    question: "What services does Briteware Technologies offer?",
    answer: "Briteware Technologies specializes in Web Development, Mobile Development, and AI Integration services."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including finance, healthcare, retail, and manufacturing. Our AI solutions are adaptable to various business needs."
  },
  {
    question: "How can Briteware help with business process automation?",
    answer: "We leverage cutting-edge technologies to streamline and automate your business processes, improving efficiency and reducing manual work."
  },
  {
    question: "How long does it take to implement your solutions?",
    answer: "Implementation time varies depending on the complexity of the solution and your existing infrastructure. Typically, our projects range from 2-6 months."
  },
  {
    question: "What technologies does Briteware use?",
    answer: "We use a variety of modern technologies including Next.js, React Native, OpenAI, Claude AI, and Grok, among others."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "We adhere to strict data protection protocols and comply with industry standards like GDPR. Your data security is our top priority."
  },
  {
    question: "How can I get started with Briteware Technologies?",
    answer: "You can get started by contacting us through our contact form or reaching out via our social media channels."
  }
]

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div>
        <header className="fixed top-0 left-0 right-0 z-10 flex col">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Image src={'/logo.png'} alt={'Briteware Technologies Logo'} width={150} height={50} />
          </div>
          <div className="flex space-x-4 px-4 py-4">
            <FaXTwitter className='size-5 transform transition-transform duration-500 hover:scale-90' />
            <MdOutlineMail className='size-5 transform transition-transform duration-500 hover:scale-90'
              onClick={() => window.location.href = 'mailto:britewaretechltd@gmail.com'} />
            <VscGithubInverted className='size-5 transform transition-transform duration-500 hover:scale-90' />
            <AiFillLinkedin className='size-5 transform transition-transform duration-500 hover:scale-90' />
          </div>
        </header>

        {/* Hero Section */}
        <main>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          <div className='relative h-screen mx-auto px-2'>
            <div className='absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col'>
              <span>
                <AnimatedShinyTextDemo />
                <HeroBoxReveal />
              </span>
            </div>
            <HeroParticle />
          </div>
          </motion.div>
        </main>
      </div>

      {/* The About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-3/4 md:pr-8 mb-8 md:mb-0"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-4">About Us</h2>
              <p className="text-lg tracking-tighter">
                Briteware Technologies is an innovative IT agency specializing in Web Development, Mobile Development, and AI Integration. We leverage cutting-edge technologies to deliver seamless business process automation solutions for our clients.
              </p>
              <p className="text-lg tracking-tighter mt-4">
                Our team of experts is dedicated to creating efficient, scalable, and user-friendly solutions that help businesses thrive in the digital age. With a focus on the latest technologies and best practices, we ensure that our clients stay ahead of the curve.
              </p>
              <p className="text-lg tracking-tighter mt-4">
                Your business demands secure, reliable, and cost-effective technology. Briteware provides the people, processes, and tools that help make innovative IT transformation possible across organizations.
              </p>
              <p className="text-lg tracking-tighter mt-4">
                From strategy to delivery, our winning combination of comprehensive IT solutions and experienced professionals unite to accelerate change from your ideas to solutions which bring them to life: we give life to your ideas!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-2/4 overflow-hidden"
            >
              {/* Iconcloud Animation */}
              <div className="w-full h-full flex items-center justify-center">
                <IconCloudDemo />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 tracking-tighter text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg border bg-background p-6"
              >
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl tracking-tighter font-semibold mb-2">{service.title}</h3>
                  <p className='tracking-tighter'>{service.description}</p>
                </div>
                <BorderBeam
                  size={300}
                  duration={8}
                  delay={index * 2}
                  className="opacity-40"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className='text-lg text-[#ffbf00] tracking-tighter'>{faq.question}</AccordionTrigger>
                  <AccordionContent className='text-lg tracking-tighter'>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter mb-12 text-center"
          >
            Get in Touch
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto space-y-4"
          >
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full mt-[1.6rem] bg-[#ffbf00]">Send Message</Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm tracking-tighter mb-4 md:mb-0">
              &copy; 2024 Briteware Technologies Limited. All Rights Reserved.
            </div>
            <div className=" relative flex space-x-4">
              <FaXTwitter className='size-5 transform transition-transform duration-500 hover:scale-90' />
              <MdOutlineMail className='size-5 transform transition-transform duration-500 hover:scale-90' 
              onClick={() => window.location.href = 'mailto:britewaretechltd@gmail.com'} />
              <VscGithubInverted className='size-5 transform transition-transform duration-500 hover:scale-90' />
              <AiFillLinkedin className='size-5 transform transition-transform duration-500 hover:scale-90' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

