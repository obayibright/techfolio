import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/header"
import { InfiniteSlider } from "@/components/infinite-slider"
import { ArrowRight, ChevronRight, Phone } from "lucide-react"
import { ProgressiveBlur } from "./progressive-blur"
import { motion } from "motion/react"

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-28">
                        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                            <div className="grid items-center gap-8 lg:grid-cols-2">
                                <div className="text-center lg:text-left">
                                    <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                                        Leveraging Tech
                                    </h1>
                                    <p className="mt-8 max-w-2xl text-balance text-lg">
                                        Build and Deploy your dream projects with Mobile, Web and Artificial Intelligence.
                                    </p>

                                    <motion.div
                                        className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                    >
                                        <motion.button
                                            className="rounded-full px-6 bg-white hover:bg-black hover:text-white text-black px-8 py-3 flex items-center space-x-2 transition-colors duration-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            Call Us <ArrowRight className="ml-2 h-4 w-4" />
                                        </motion.button>

                                        <motion.a
                                            href="tel:+2349022692217"
                                            className="group flex items-center space-x-3 text-white"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                            <div className="p-3 rounded-full hover:bg-zinc-950/5 dark:hover:bg-white/5 transition-colors duration-300">
                                                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                            </div>
                                            <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                (+234) 902 269 2217
                                            </span>
                                        </motion.a>
                                    </motion.div>
                                </div>
                                <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                                        <Image
                                            src="/hero.png"
                                            alt="Hero image"
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Powering the best teams</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia Logo"
                                            height={20}
                                            width={80}
                                            priority
                                        />
                                    </div>

                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-4 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            height={16}
                                            width={64}
                                            priority
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-4 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            height={16}
                                            width={64}
                                            priority
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            height={20}
                                            width={80}
                                            priority
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy Logo"
                                            height={20}
                                            width={80}
                                            priority
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-4 w-auto dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel Logo"
                                            height={16}
                                            width={64}
                                            priority
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-7 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

