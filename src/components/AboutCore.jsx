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
        title: "Collabration",
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
        <section className="min-h-screen px-6 py-24 bg-[radial-gradient(circle_at_top,_#f3f4f6,_#ffffff_40%,_#f9fafb_100%)] text-center">
            <div className="max-w-6xl mx-auto">
                <div className="inline-block px-6 py-2 rounded-full border border-amber-200 bg-white/60 text-amber-700 tracking-widest text-sm font-medium backdrop-blur-md shadow-sm mb-6 backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-400 hover:to-yellow-400 hover:text-white hover:shadow-lg hover:scale-105">
                    💎 CORE VALUES
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold text-slate-900">
                    What{' '}
                    <span className="bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        Drives
                    </span>{' '}
                    Us Forward
                </h1>

                <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
                    Our values guide every decision we make and shape the way we serve our clients and community.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl border border-amber-200/50 bg-white/60 p-10 shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 transition-all duration-500 group-hover:w-full"></div>

                            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-3xl text-white shadow-lg mb-6 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">
                                {item.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
