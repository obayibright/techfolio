export default function FAQs() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p>Some of your questions, Answered.</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">What services does Briteware Technologies offer?</h3>
                            <p className="text-muted-foreground mt-4">
                                Briteware Technologies specializes in Web Development, Mobile Development, and AI Integration services.
                            </p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">What industries do you serve?</h3>
                            <p className="text-muted-foreground mt-4">
                                We serve a wide range of industries including finance, healthcare, retail, and manufacturing. Our AI solutions help businesses across all sectors optimize their operations and improve efficiency.
                            </p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How can Briteware help with business process automation?</h3>
                            <p className="text-muted-foreground my-4">
                                We leverage cutting-edge technologies to streamline and automate your business processes, improving efficiency and reducing manual work.
                            </p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How can I get started with Briteware Technologies?</h3>
                            <p className="text-muted-foreground mt-4">
                                ou can get started by contacting us through our contact form or reaching us through phone/WhatsApp or via our social media channels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

