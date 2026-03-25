import React from 'react';

const values = [
    {
        icon: "⚡",
        title: "Trust First",
        desc: "Building relationships based on honesty and transparency.",
    },
    {
        icon: "🎯",
        title: "Innovation Everyday",
        desc: "Adopting the latest tools and ideas to stay ahead.",
    },
    {
        icon: "🤝",
        title: "Client-Centric",
        desc: "Putting your goals at the center of everything we do.",
    },
    {
        icon: "🔒",
        title: "Collaboration",
        desc: "Working as an extension of your team.",
    },
    {
        icon: "🔒",
        title: "Simplicity",
        desc: "Making complex solutions easy to use and understand.",
    },
];

export default function CoreValues() {
    return (
        <section className="min-h-screen px-6 py-24 bg-gradient-to-b from-slate-950 via-zinc-950 to-black text-center">
            <div className="max-w-6xl mx-auto">
                <div className="inline-flex items-center gap-2 px-8 py-3 rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-900/80 to-yellow-900/80 text-amber-300 tracking-widest text-sm font-semibold backdrop-blur-xl shadow-inner shadow-amber-500/10 transition-all duration-300 hover:scale-105 hover:border-amber-400/60 hover:from-pink-500/90 hover:to-amber-400/90 hover:text-white mb-6">
                    💎 CORE VALUES
                </div>

                <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter">
                    What{' '}
                    <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-pink-300 bg-clip-text text-transparent">
                        Drives
                    </span>{' '}
                    Us Forward
                </h1>

                <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
                    Our values guide every decision we make and shape the way we serve our clients and community.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl border border-white/10 bg-zinc-900/70 p-10 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-amber-400/30 overflow-hidden">
                           
                            <div className="absolute top-0 left-0 h-[4px] w-0 bg-gradient-to-r from-pink-400 via-amber-400 to-yellow-400 transition-all duration-500 group-hover:w-full"></div>

                            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 text-4xl text-white shadow-xl mb-8 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed text-[17px]">
                                {item.desc}
                            </p>

                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-12 bg-amber-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}