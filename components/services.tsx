import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Brain, Code, Smartphone } from 'lucide-react'
import { ReactNode } from 'react'

export default function ServicesSection() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2>
                    <p className="mt-4">Here are a some of the services we offer to our clients.</p>
                </div>
                <Card className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Code className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Web Development</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Creating responsive and dynamic Enterprise web applications for your business needs.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Smartphone className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Mobile Development</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Building native and cross-platform mobile apps for your business needs.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Brain className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">AI Integration</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Incorporating AI solutions into existing systems for Business Process automation.</p>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
