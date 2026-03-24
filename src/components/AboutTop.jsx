import React from 'react';

export default function AboutTop() {
  return (
    <section className="relative overflow-hidden bg-warm-yellow min-h-screen text-center text-slate-900">
      <div className="max-w-7xl mx-auto mt-20 px-6 py-6 flex justify-center">
        <div className="group inline-flex items-center gap-2 rounded-full border border-amber-200 bg-yellow-50/60 px-6 py-3 text-sm font-medium tracking-[0.18em] text-yellow-900 shadow-md backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-400 hover:to-yellow-400 hover:text-white hover:shadow-lg hover:scale-105">
          <span className="transition-transform duration-300 group-hover:rotate-12">🎯</span>
          ABOUT ROYALFINITY TECHNOLOGIES
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-28 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.2] tracking-tight">
            <span className="block text-slate-900 mb-2">
              Transforming Businesses with
            </span>
            <span className="block bg-gradient-to-r from-fuchsia-500 via-amber-500 to-cyan-500 bg-clip-text text-transparent">
              Technology & Creativity
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl leading-8 text-slate-900/80 max-w-3xl mx-auto">
            At Royalfinity Technologies, we do more than provide digital services—we
            create solutions that genuinely make a difference. With over a decade of
            hands-on experience, we've helped businesses across industries grow,
            innovate, and succeed in today's fast-changing digital landscape. Every
            project is approached with expertise, care, and a focus on results that
            truly matter.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-30 mix-blend-screen">
        <svg viewBox="0 0 600 600" className="w-full h-full">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#ffd166" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffb703" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#g1)" />
        </svg>
      </div>
    </section>
  );
}
