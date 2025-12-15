import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'WOHNQUARTIER EMS',
        category: 'Wohnungsbau',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
        location: 'Lingen (Ems)',
        year: '2023'
    },
    {
        id: 2,
        title: 'GEWERBEPARK NORD',
        category: 'Gewerbebau',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
        location: 'Meppen',
        year: '2023'
    },
    {
        id: 3,
        title: 'STADTVILLA H.',
        category: 'Privathaus',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
        location: 'Nordhorn',
        year: '2022'
    },
    {
        id: 4,
        title: 'BÜROKOMPLEX ZENTRUM',
        category: 'Sanierung',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
        location: 'Lingen',
        year: '2022'
    },
];

const Projects = () => {
    return (
        <section id="projekte" className="py-32 bg-[#f5f5f5]">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="flex items-center gap-2 mb-2 justify-center">
                            <span className="w-4 h-4 rounded border border-black/30 flex items-center justify-center">
                                <span className="text-[10px]">v</span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-black/50">Portfolio</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-black uppercase">
                            Aktuelle <br />
                            Projekte
                        </h2>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="px-8 py-3 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                    >
                        ALLE PROJEKTE ANSEHEN
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                        >
                            <div className="relative overflow-hidden mb-6 bg-gray-200 aspect-[4/5] md:aspect-[3/4]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-center border-b border-black/10 pb-4 mb-2">
                                    <h3 className="text-2xl font-medium tracking-tight text-black uppercase">{project.title}</h3>
                                    <span className="text-xs font-bold border border-black/20 px-2 py-1 rounded-full">{project.year}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm text-black/60">
                                    <span>{project.location}</span>
                                    <span>{project.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
