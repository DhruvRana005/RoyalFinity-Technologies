import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden text-white">
            <video className="absolute top-0 left-0 w-full h-full object-cover scale-110" autoPlay muted loop playsInline>
                <source src="/tech.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
            <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-12">
                <div className="w-full max-w-6xl text-center">
                    <div className="group mb-6 inline-block relative">
                        <div className="relative mt-20 px-6 py-2 rounded-full border border-yellow-400/40 bg-transparent text-yellow-400 text-sm sm:text-base transition-all duration-300 hover:bg-yellow-400 hover:text-black">
                            Let's Grow Together 🚀
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
                        Struggling to grow your
                    </h1>

                    <h2 className="mt-2 text-4xl sm:text-5xl md:text-7xl font-semibold text-yellow-400">
                        business online?
                    </h2>

                    <div className="mx-auto mt-5 h-[3px] w-40 sm:w-56 bg-yellow-400 rounded-full" />

                    <p className="mt-6 text-zinc-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                        At Royalfinity Technologies, we make digital growth simple. From
                        building websites to running ads and managing your brand, we handle
                        it all — so you can focus on growing your business.
                    </p>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

                        {[
                            { num: '78+', label: 'PROJECTS COMPLETED' },
                            { num: '45+', label: 'HAPPY CLIENTS' },
                            { num: '2+', label: 'YEARS EXPERIENCE' },
                            { num: '70%', label: 'DISCOUNT OFFER' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group rounded-2xl border border-white/10 bg-white/90 px-4 py-6 text-center text-zinc-900 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/40">
                                <div className="text-3xl font-bold text-yellow-500 transition group-hover:scale-110">
                                    {item.num}
                                </div>
                                <div className="mt-2 text-xs font-semibold tracking-[0.18em] text-slate-600">
                                    {item.label}
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group inline-flex min-w-[220px] items-center justify-center gap-3 rounded-xl border-2 border-blue-900 bg-[#121f37] px-8 py-4 font-semibold shadow-lg transition hover:-translate-y-1 hover:bg-[#151527]">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:scale-110 transition">
                                ▶
                            </span>
                            Start Your Project
                        </button>

                        <button onClick={() => { const section = document.getElementById('services');
                            section.scrollIntoView({ behavior: 'smooth' });
                            }} className="group inline-flex min-w-[220px] items-center justify-center gap-3 rounded-xl border-2 border-yellow-400 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black hover:scale-105">
                            ⚡ Explore Services
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;