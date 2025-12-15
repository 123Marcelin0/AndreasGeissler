import { motion } from 'framer-motion';

const stats = [
    { value: "150+", label: "CLIENTS SERVED" },
    { value: "210+", label: "SUCCESSFUL PROJECTS" },
    { value: "09", label: "PRESTIGIOUS AWARDS" },
    { value: "18+", label: "YEARS OF EXPERIENCE" }
]

const Stats = () => {
    return (
        <section className="py-20 bg-[#f5f5f5] border-b border-black/5">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative p-8 bg-gray-200/50 hover:bg-white transition-colors duration-500 group min-h-[200px] flex flex-col justify-between">
                            <h3 className="text-5xl md:text-6xl font-medium tracking-tight text-black group-hover:scale-105 transition-transform origin-left duration-500">
                                {stat.value}
                            </h3>
                            <div className="flex items-center justify-between mt-8 border-t border-black/10 pt-4">
                                <span className="text-[10px] font-bold tracking-widest text-black/50 uppercase">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats;
