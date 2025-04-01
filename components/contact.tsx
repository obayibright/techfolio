"use client"

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from 'sonner'

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    country: z.string().min(2, { message: 'Country must be at least 2 characters.' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
})

type FormValues = z.infer<typeof formSchema>

export default function ContactSection() {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            country: '',
            message: ''
        }
    })

    async function onSubmit(data: FormValues) {
        setIsLoading(true)
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            form.reset()
            toast.success('Message sent successfully!')
        } catch (error) {
            toast.error('Failed to send message. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Your Idea is One Chat Away</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">Development</h2>
                            <Link href="mailto:britewaretechltd@gmail.com" className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                britewaretechltd@gmail.com
                            </Link>
                            <p className="mt-3 text-sm">+243 902 269 2217</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Enquiry</h3>
                            <Link href="mailto:britewaretechltd@gmail.com" className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                britewaretechltd@gmail.com
                            </Link>
                            <p className="mt-3 text-sm">+243 902 269 2217</p>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <form onSubmit={form.handleSubmit(onSubmit)} className="border px-4 py-12 lg:px-0 lg:py-24">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold">Let's get your ideas working</h3>
                        <p className="mt-4 text-sm">Reach out so that we can get started on building your dream Application and Project!</p>

                        <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                            <div>
                                <Label htmlFor="name" className="space-y-2">
                                    Full name
                                </Label>
                                <Input 
                                    type="text" 
                                    id="name" 
                                    {...form.register('name')}
                                    disabled={isLoading}
                                />
                                {form.formState.errors.name && (
                                    <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="email" className="space-y-2">
                                    Work Email
                                </Label>
                                <Input 
                                    type="email" 
                                    id="email" 
                                    {...form.register('email')}
                                    disabled={isLoading}
                                />
                                {form.formState.errors.email && (
                                    <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="country" className="space-y-2">
                                    Country/Region
                                </Label>
                                <Select onValueChange={(value) => form.setValue('country', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                                        <SelectItem value="United States">United States</SelectItem>
                                        <SelectItem value="Europe">Europe</SelectItem>
                                        <SelectItem value="Canada">Canada</SelectItem>
                                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                        <SelectItem value="Middle East">Middle East</SelectItem>
                                        <SelectItem value="Africa">Africa</SelectItem>
                                        <SelectItem value="Asia">Asia</SelectItem>
                                        <SelectItem value="Australia">Australia</SelectItem>
                                    </SelectContent>
                                </Select>
                                {form.formState.errors.country && (
                                    <p className="text-sm text-red-500">{form.formState.errors.country.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="message" className="space-y-2">
                                    Message
                                </Label>
                                <Textarea 
                                    id="message" 
                                    rows={3}
                                    {...form.register('message')}
                                    disabled={isLoading}
                                />
                                {form.formState.errors.message && (
                                    <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                                )}
                            </div>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Submit'}
                            </Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}
