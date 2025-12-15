import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import References from './components/References';
import Footer from './components/Footer';
import Lenis from 'lenis';

const App = () => {
    useEffect(() => {
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
    }, []);

    return (
        <div className="app bg-[#f5f5f5] min-h-screen">
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
