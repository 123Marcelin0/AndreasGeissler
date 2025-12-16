import { motion } from 'framer-motion';
import buildingSketch from '../assets/building_sketch.png';
import asgLogo from '../assets/asg-logo.png';

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
                className="relative z-10 w-48 md:w-64"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img src={asgLogo} alt="ASG360 Logo" className="w-full h-auto mix-blend-multiply" />
            </motion.div>
        </motion.div>
    );
};

export default IntroAnimation;
