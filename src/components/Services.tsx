import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="leistungen" className="py-32 bg-[#f5f5f5] border-t border-black/5">
            <div className="container">
                <div className="flex flex-col items-center text-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 mb-2 justify-center"
                    >
                        <span className="w-4 h-4 rounded border border-black/30 flex items-center justify-center">
                            <span className="text-[10px]">iii</span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-black/50">Meine Leistungen</span>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-medium tracking-tight text-black leading-[1.1]"
                        >
                            MEINE LEISTUNGEN <br />
                            <span className="opacity-40">KOMPETENT. SERIÖS. UNABHÄNGIG.</span>
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 w-32 bg-black mt-8 mx-auto"
                        ></motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-lg text-black/60 mb-8 leading-relaxed max-w-2xl text-center">
                            Kontaktieren und fordern Sie mich fachlich in den Themengebieten heraus – Sie werden sehen, dass ich mit meinem Know-how einen Mehrwert für Sie und Ihr Projekt bringe.
                        </p>

                        <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-black/20 hover:border-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group">
                            MEHR ERFAHREN
                            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </motion.div>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 border-t border-black/10 pt-12">
                    {[
                        'Architektur | Hochbau',
                        'Immobilienwirtschaft',
                        'Immobilienbewertung',
                        'Mängel an Gebäuden',
                        'Bauschäden Analyse',
                        'FM-gerechte Planung',
                        'Facility Management',
                        'Gutachten',
                        'Beratung'
                    ].map((service, i) => (
                        <div key={i} className="group border-b border-black/10 pb-4 hover:border-black transition-colors cursor-pointer flex justify-between items-end">
                            <h3 className="text-xl font-medium text-black/80 group-hover:text-black">{service}</h3>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
