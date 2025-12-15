import React from 'react';

const testimonials = [
    {
        quote: "During concepting I joked about wanting a cantilevered rooftop yoga pavilion. They made what seemed impossible into a signature element I use daily.",
        author: "Miguel Cruz",
        role: "Hotel Owner",
        project: "Hillside Oasis Residence",
        location: "Malibu, California"
    },
    {
        quote: "The team exceeded our expectations at every turn. They skillfully translated our vision into an awe-inspiring home our family will cherish for decades.",
        author: "Johny",
        role: "Homeowner",
        project: "Hillside Oasis Residence",
        location: "Malibu, California"
    },
    {
        quote: "I’ve never worked with architects who balanced creative ingenuity with the ability to pull off ambitious designs - until now. This museum expansion is my new pride and joy.",
        author: "Martin Hayes",
        role: "Museum Director",
        project: "Art Museum Expansion",
        location: "Chicago, Illinois"
    },
    {
        quote: "We interviewed dozens of firms but their passion for imaginative sustainable spaces set them apart. Our LEED Platinum office building now serves as a showcase.",
        author: "Kevin Wu",
        role: "CEO, CloudSmart",
        project: "CloudSmart Corporate",
        location: "Austin, Texas"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-[#f5f5f5] border-t border-black/5">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-bold tracking-tight text-black mb-6">
                            SEE WHAT OUR CLIENTS HAVE TO SAY ABOUT PARTNERING WITH US ON CUSTOM ARCHITECTURAL PROJECTS
                        </h2>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((item, index) => (
                            <div key={index} className="flex flex-col gap-4 border-l border-black/10 pl-6">
                                <p className="text-lg leading-relaxed italic text-black/80">"{item.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-black uppercase text-sm">{item.author}</h4>
                                    <p className="text-xs text-black/60 uppercase mb-1">{item.role}</p>
                                    <p className="text-xs text-black/40 mt-2">{item.project}</p>
                                    <p className="text-xs text-black/40">{item.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
