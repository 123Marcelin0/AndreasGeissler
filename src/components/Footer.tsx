
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-[#111] text-white pt-0 pb-12 overflow-hidden">
            {/* Infinite Scroll Text - "The Element" */}
            <div className="w-full bg-[#111] border-b border-white/10 overflow-hidden py-12 mb-20 relative">
                <div className="flex whitespace-nowrap">
                    <motion.h1
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="text-[15vw] leading-none font-black text-[#1a1a1a] select-none"
                    >
                        GEIßLER  GEIßLER  GEIßLER  GEIßLER
                    </motion.h1>
                    <motion.h1
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="text-[15vw] leading-none font-black text-[#1a1a1a] select-none"
                    >
                        GEIßLER  GEIßLER  GEIßLER  GEIßLER
                    </motion.h1>
                </div>
            </div>

            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Column: Form */}
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Kontakt aufnehmen</h2>
                        <p className="text-white/60 mb-8 max-w-md">
                            Ich freue mich über Ihren Anruf oder Ihre E-Mail! Fordern Sie mich heraus – ich bringe Mehrwert für Ihr Projekt.
                        </p>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Name" className="bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/40" />
                            <input type="tel" placeholder="Telefon" className="bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/40" />
                            <input type="email" placeholder="E-Mail" className="bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/40" />
                            <input type="text" placeholder="Projektart" className="bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/40" />
                            <input type="text" placeholder="Ort" className="bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/40" />
                            <input type="text" placeholder="Budget" className="bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/40" />
                            <div className="md:col-span-2">
                                <textarea placeholder="Nachricht" rows={4} className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-white/40 resize-none"></textarea>
                            </div>
                            <button className="md:col-span-2 mt-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-white/90 transition-colors self-start w-full md:w-auto">
                                ANFRAGE SENDEN
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Links & Info */}
                    <div id="kontakt" className="grid grid-cols-2 md:grid-cols-3 gap-8 content-start">
                        {/* Navigate */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Navigation</h4>
                            <a href="#" className="hover:text-white/60 transition-colors">Start</a>
                            <a href="#ueber-mich" className="hover:text-white/60 transition-colors">Über mich</a>
                            <a href="#leistungen" className="hover:text-white/60 transition-colors">Leistungen</a>
                            <a href="#projekte" className="hover:text-white/60 transition-colors">Projekte</a>
                            <a href="#kontakt" className="hover:text-white/60 transition-colors">Kontakt</a>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Leistungen</h4>
                            <a href="#" className="hover:text-white/60 transition-colors">Architektur</a>
                            <a href="#" className="hover:text-white/60 transition-colors">Gutachten</a>
                            <a href="#" className="hover:text-white/60 transition-colors">Immobilienbewertung</a>
                            <a href="#" className="hover:text-white/60 transition-colors">Facility Management</a>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-8 col-span-2 md:col-span-1 mt-8 md:mt-0">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Telefon</h4>
                                <p>0591 966 566 78<br />0179 47 26 019</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Standort</h4>
                                <p className="leading-relaxed">Andreas Geißler<br />Lingen (Ems)</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-2">E-Mail</h4>
                                <p>info@asg360.de</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40">
                    <p>© 2024 Andreas Geißler. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Datenschutz</a>
                        <a href="#" className="hover:text-white">Impressum</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
