import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
            );

            gsap.fromTo(".hero-sub",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="start" ref={containerRef} className="relative w-full min-h-[90vh] flex flex-col pt-32 pb-20 overflow-hidden bg-white">
            <div className="container relative z-10 flex flex-col h-full justify-center">

                {/* Visual Trick: Video inside Text using Mix-Blend-Mode */}
                <div className="w-full mb-12 select-none relative h-[25vw] min-h-[200px] max-h-[500px] flex items-center justify-center overflow-hidden">
                    {/* 1. The Video Background (Absolute) */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ filter: 'contrast(1.1) brightness(1.1)' }}
                    >
                        <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                    </video>

                    {/* 2. The Mask Layer (White background, Black text, Screen blend mode) */}
                    {/* mix-blend-screen: Black text becomes transparent (showing video), White bg stays white (hiding video) */}
                    <div className="absolute inset-0 bg-white mix-blend-screen flex items-center justify-center">
                        <h1 className="text-[19vw] leading-none font-black tracking-tighter text-black bg-white w-full text-center">
                            GEIßLER
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 text-center">
                    <div className="md:col-span-12 flex flex-col items-center">
                        <h2 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-black uppercase">
                            ARCHITEKTUR. <br />
                            GUTACHTEN. <br />
                            <span className="text-black/60">IMMOBILIENBERATUNG.</span>
                        </h2>
                    </div>
                    <div className="md:col-span-12 flex flex-col items-center justify-end pb-2">
                        <p className="hero-sub text-lg text-black/60 leading-relaxed max-w-md">
                            Andreas Geißler – Architekt, Sachverständiger, Gutachter und Immobilienberater aus Lingen (Ems) für die Region Emsland und den gesamten Norddeutschen Raum.
                        </p>
                        <div className="hero-sub mt-8">
                            <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 group">
                                KONTAKTIEREN
                                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Soft gradient at bottom to blend to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
