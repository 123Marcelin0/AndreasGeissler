import { motion } from 'framer-motion';

const images = [
    { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2670&auto=format&fit=crop", span: "col-span-8" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop", span: "col-span-4" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2617&auto=format&fit=crop", span: "col-span-4" },
    { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2670&auto=format&fit=crop", span: "col-span-8" },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-32 bg-[#f5f5f5]">
            <div className="container">
                <div className="flex items-center gap-2 mb-12">
                    <span className="w-4 h-4 rounded border border-black/30 flex items-center justify-center">
                        <span className="text-[10px]">v</span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-black/50">Gallery</span>
                </div>

                <div className="grid grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`${img.span} col-span-12 md:${img.span} overflow-hidden rounded-sm relative group`}
                        >
                            <img
                                src={img.src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
