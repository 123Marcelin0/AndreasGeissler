import React from 'react';

const blogs = [
    {
        title: "The Social Impact of Architectural Innovation",
        category: "Design Insight",
        date: "January 19, 2024",
        author: "Ryan Milford",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Transforming Spaces with Timeless Design",
        category: "Design Inspirations",
        date: "January 18, 2024",
        author: "James Miller",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Impact of Interior Design on Well-being",
        category: "Interior Design Insights",
        date: "December 5, 2023",
        author: "James Miller",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    }
];

export default function Blog() {
    return (
        <section id="blogs" className="py-24 bg-white">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black max-w-2xl uppercase">
                        Insights, Thoughts, Trends & Tips
                    </h2>
                    <a href="#" className="text-sm font-medium border-b border-black pb-1 hover:text-black/60 transition-colors uppercase">
                        View All Articles
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-black/50 uppercase">
                                    <span>{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold leading-tight group-hover:text-black/60 transition-colors">
                                    {post.title}
                                </h3>
                                <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                                    <span>Read Details</span>
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-1">
                                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
