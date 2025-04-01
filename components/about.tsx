import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">
                        We are Your Technology Partner for the New Age!
                    </h2>
                    <div className="space-y-6">
                        <p>
                            Briteware Technologies is an innovative IT agency specializing in Web Development, Mobile Development, and AI Integration. We leverage cutting-edge technologies to deliver seamless business process automation solutions for our clients.
                        </p>
                        <p>
                            Briteware Technologies. <span className="font-bold">It supports an entire Development ecosystem</span> — from products ideation to deployment.
                            Our team of experts is dedicated to creating efficient, scalable, and user-friendly solutions that help businesses thrive in the digital age. With a focus on the latest technologies and best practices, we ensure that our clients stay ahead of the curve.
                        </p>
                        <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

