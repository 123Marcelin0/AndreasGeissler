import { motion } from 'framer-motion';
import buildingSketch from '../assets/building_sketch.png';

const IntroAnimation = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
            {/* Background Sketch */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <img
                    src={buildingSketch}
                    alt="Architectural Sketch"
                    className="w-full h-full object-cover"
                />
            </div>

            <motion.div
                className="relative z-10 flex items-center gap-4 md:gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Logo Mark */}
                <div className="w-16 h-16 md:w-24 md:h-24 bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-xl md:text-3xl tracking-tighter">ASG</span>
                </div>
                {/* Logo Text */}
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase">
                    ASG 360
                </span>
            </motion.div>
        </motion.div>
    );
};

export default IntroAnimation;
