import React, { useState } from "react";
import { FiUser, FiCode } from "react-icons/fi";

const founders = [
    {
        id: 1,
        name: "Bhumika Gandhi",
        title: "Co-Founder & CEO",
        bio:
            "The driving force behind our vision and client success, committed to building long-term partnerships based on trust and transparency.",
        icon: <FiUser className="w-8 h-8" />,
        gradient: "from-rose-400 to-pink-500",
    },
    {
        id: 2,
        name: "Lavish Sachdeva",
        title: "Co-Founder & CTO",
        bio:
            "The innovator shaping our technical direction, ensuring that every solution we deliver is modern, scalable, and future-ready.",
        icon: <FiCode className="w-8 h-8" />,
        gradient: "from-cyan-400 to-indigo-500",
    },
];

export default function AboutTeam() {
    const [open, setOpen] = useState(null);

    return (
        <section className="py-16 px-6 bg-gradient-to-b from-slate-950 via-zinc-950 to-black">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="text-center">
                        <div className="text-xs uppercase tracking-wider text-amber-300 px-6 py-2.5 rounded-3xl bg-gradient-to-r from-amber-900/80 to-yellow-900/80 border border-amber-400/30 shadow-inner shadow-amber-500/10 transition-all duration-300 hover:scale-105 hover:border-amber-400/50 inline-flex items-center gap-2 backdrop-blur-md">
                            👑 Leadership Team
                        </div>

                        <h1 className="mt-4 text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent tracking-tight">
                            Meet Our Co-Founders
                        </h1>
                    </div>
                </div>

                <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
                    Visionary leaders driving innovation and excellence in technology solutions.
                </p>

                <div className="flex flex-col gap-10">
                    {founders.map((f, index) => (
                        <div
                            key={f.id}
                            className={`group flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                } items-center bg-zinc-900/70 hover:bg-zinc-900 border border-white/10 hover:border-amber-400/30 rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl backdrop-blur-xl`}>
                           
                            <div className={`w-full md:w-1/3 h-full p-10 flex items-center justify-center bg-gradient-to-br ${f.gradient} text-white relative`}>
                                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
                                
                                <div className="flex flex-col items-center text-center relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6 shadow-inner backdrop-blur-md">
                                        {f.icon}
                                    </div>
                                    <div className="text-2xl font-semibold tracking-tight">{f.name}</div>
                                    <div className="text-sm opacity-90 mt-1 font-medium">{f.title}</div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 p-10">
                                <p className="text-slate-300 leading-relaxed text-[17px]">
                                    {f.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}