import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Project {
  title: string
  description: string
  image: string
  link: string
}

const getScreenshotUrl = (url: string) => {
  const key = '2a753c'
  const dimension = '1024x768'
  const url_encoded = encodeURIComponent(url)
  return `https://api.screenshotmachine.com?key=${key}&url=${url_encoded}&dimension=${dimension}`
}

const projects: Project[] = [
  {
    title: 'Nzapi Store',
    description: 'Telling Stories Through Shirts',
    image: getScreenshotUrl('https://nzapi.net'),
    link: 'https://nzapi.net/'
  },
  {
    title: 'School of Service',
    description: 'Learn. Serve & Excel at the School of Service.',
    image: getScreenshotUrl('https://schoolofservice.com'),
    link: 'https://schoolofservice.com/'
  },
  {
    title: 'Tara Fela Durotoye',
    description: 'Beauty Entrepreneur & Business Coach',
    image: getScreenshotUrl('https://tarafeladurotoye.com'),
    link: 'https://tarafeladurotoye.com'
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-medium mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="group">
              <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
