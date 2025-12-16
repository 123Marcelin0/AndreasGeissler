

export default function FAQ() {
    return (
        <section className="py-24 bg-[#f5f5f5] text-black border-t border-black/5">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-4 h-4 rounded border border-black/30 flex items-center justify-center">
                                <span className="text-[10px]">v</span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-black/50">FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            EVERYTHING YOU MAY NEED TO KNOW
                        </h2>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">What architectural design services do you offer?</h3>
                            <p className="text-black/60 text-lg leading-relaxed">
                                We offer a full range of architectural design services including residential, commercial, landscape, sustainability consulting, interior design, 3D rendering, and construction planning.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Have you won any industry awards or recognition for your work?</h3>
                            <p className="text-black/60 text-lg leading-relaxed">
                                Yes, our firm has been recognized globally for our commitment to sustainable and innovative design. We have received multiple AIA Design Awards and have been featured in leading architectural publications for our work on the Serenity Suites and the CloudSmart headquarters.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
