import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = ['START', 'ÜBER MICH', 'LEISTUNGEN', 'PROJEKTE', 'REFERENZEN', 'KONTAKT'];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-md border-b border-black/5' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group relative z-50">
                        <div className="w-8 h-8 bg-black rounded-none flex items-center justify-center">
                            <span className="text-white font-bold text-xs tracking-tighter">ASG</span>
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-black uppercase">ASG 360</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-').replace('ü', 'ue')}`}
                                className="text-[12px] font-medium text-black/60 hover:text-black transition-colors tracking-widest"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex">
                        <a
                            href="#kontakt"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-[12px] font-medium text-black hover:bg-black hover:text-white transition-all duration-300 group"
                        >
                            KONTAKT
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden relative z-50 p-2 text-black hover:opacity-70 transition-opacity"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center lg:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-').replace('ü', 'ue')}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-3xl font-bold text-black tracking-tight hover:text-black/60 transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                                href="#kontakt"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-8 flex items-center gap-3 px-8 py-4 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group"
                            >
                                JETZT KONTAKTIEREN
                                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
