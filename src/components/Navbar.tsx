import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-md border-b border-black/5' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-black rounded-none flex items-center justify-center">
                        <span className="text-white font-bold text-xs tracking-tighter">ASG</span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-black uppercase">ASG 360</span>
                </a>

                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {['START', 'ÜBER MICH', 'LEISTUNGEN', 'PROJEKTE', 'REFERENZEN', 'KONTAKT'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-').replace('ü', 'ue')}`}
                            className="text-[12px] font-medium text-black/60 hover:text-black transition-colors tracking-widest"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a
                    href="#kontakt"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-[12px] font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                    KONTAKT
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform">
                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
