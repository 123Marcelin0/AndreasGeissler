import { motion } from 'framer-motion';

const projects = [
    { name: "Wohnquartier 'Ems-Aue'", location: "Lingen (Ems)", type: "Wohnungsbau", year: "2023" },
    { name: "Ärztehaus am Markt", location: "Meppen", type: "Gewerbebau", year: "2023" },
    { name: "Logistikhalle Spelle", location: "Spelle", type: "Industriebau", year: "2022" },
    { name: "Sanierung Villa K.", location: "Nordhorn", type: "Denkmalschutz", year: "2022" },
    { name: "Erweiterung Grundschule", location: "Haselünne", type: "Öffentlich", year: "2021" },
    { name: "Mehrfamilienhaus Rheine", location: "Rheine", type: "Wohnungsbau", year: "2021" },
    { name: "Bürokomplex 'Hafen'", location: "Leer", type: "Gewerbebau", year: "2020" },
    { name: "Einfamilienhaus modern", location: "Lingen-Darme", type: "Privat", year: "2020" }
];

const References = () => {
    return (
        <section id="referenzen" className="py-24 bg-white border-t border-black/5">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="flex items-center gap-2 mb-2 justify-center">
                            <span className="w-4 h-4 rounded border border-black/30 flex items-center justify-center">
                                <span className="text-[10px]">iv</span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-black/50">Projekte</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black uppercase">
                            Ausgewählte <br />
                            Referenzen
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col">
                    {/* Header Row */}
                    <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-black text-xs font-bold uppercase tracking-widest text-black/40">
                        <div className="col-span-5">Projekt</div>
                        <div className="col-span-3">Standort</div>
                        <div className="col-span-3">Typologie</div>
                        <div className="col-span-1 text-right">Jahr</div>
                    </div>

                    {/* Project Rows */}
                    {projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-6 border-b border-black/10 hover:bg-black/5 transition-colors cursor-default group"
                        >
                            <div className="col-span-5 font-medium text-lg md:text-xl text-black group-hover:pl-4 transition-all duration-300">
                                {project.name}
                            </div>
                            <div className="col-span-3 text-black/60 flex items-center">
                                <span className="md:hidden w-24 text-xs font-bold uppercase tracking-widest opacity-50 mr-2">Standort:</span>
                                {project.location}
                            </div>
                            <div className="col-span-3 text-black/60 flex items-center">
                                <span className="md:hidden w-24 text-xs font-bold uppercase tracking-widest opacity-50 mr-2">Typ:</span>
                                {project.type}
                            </div>
                            <div className="col-span-1 text-black/40 md:text-right flex items-center md:justify-end">
                                <span className="md:hidden w-24 text-xs font-bold uppercase tracking-widest opacity-50 mr-2">Jahr:</span>
                                {project.year}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default References;
