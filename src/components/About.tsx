import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import andreasImg from '../assets/andreas-geissler.png';

const features = [
    {
        title: "LANGJÄHRIGE ERFAHRUNG",
        description: "Kompetente Beratung und Planung basierend auf jahrelanger Erfahrung in Architektur und Immobilienwirtschaft."
    },
    {
        title: "BREITES LEISTUNGSSPEKTRUM",
        description: "Von der klassischen Architektur über Gutachten bis hin zum Facility Management – alles aus einer Hand."
    },
    {
        title: "REGIONAL VERWURZELT",
        description: "Tätig in Lingen (Ems), Emsland, Grafschaft Bentheim, Ostfriesland und dem gesamten Norddeutschen Raum."
    }
];

const About = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="ueber-mich" className="py-24 bg-[#f5f5f5]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Image - Portrait Style */}
                    <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                        <img
                            src={andreasImg}
                            alt="Andreas Geißler"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col pt-8">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-4 h-4 rounded border border-black/30 flex items-center justify-center">
                                <span className="text-[10px]">ii</span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-black/50">Über Mich</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-medium mb-8 text-black">
                            IHR PARTNER FÜR <br />
                            WERTE & QUALITÄT.
                        </h2>

                        <p className="text-lg text-black/60 leading-relaxed mb-12 max-w-lg">
                            Als unabhängiger Architekt und Gutachter verbinde ich technisches Know-how mit wirtschaftlichem Sachverstand. Mein Anspruch ist es, für Sie Werte zu schaffen, zu sichern und transparent zu machen.
                        </p>

                        <div className="flex flex-col">
                            {features.map((feature, index) => (
                                <div key={index} className="border-t border-black/10 py-6">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between group"
                                    >
                                        <span className="text-lg font-medium text-black group-hover:text-black/70 transition-colors">
                                            {feature.title}
                                        </span>
                                        <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pt-4 text-black/60 leading-relaxed text-sm max-w-md">
                                                    {feature.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
