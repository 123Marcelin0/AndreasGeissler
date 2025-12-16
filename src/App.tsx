import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import References from './components/References';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import Lenis from 'lenis';

const App = () => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Prevent scrolling while intro is visible
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setShowIntro(false);
            document.body.style.overflow = 'unset';
            window.scrollTo(0, 0);
        }, 2200); // Wait for pulse

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        if (showIntro) return; // Don't init smooth scroll until intro is done (optional, but cleaner)

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        } as any);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [showIntro]);

    return (
        <div className="app bg-[#f5f5f5] min-h-screen">
            <AnimatePresence mode="wait">
                {showIntro && <IntroAnimation key="intro" />}
            </AnimatePresence>
            <Navbar />
            <main>
                <Hero />
                {/* <Stats /> */}
                <About />
                <Services />
                <Projects />
                <References />
                {/* <Testimonials /> */}
                {/* <Blog /> */}
                {/* <FAQ /> */}
                {/* <Gallery /> */}
            </main>
            <Footer />
        </div>
    );
};

export default App;
