import React from 'react';

export default function AboutMission() {
  return (
    <section className="relative min-h-screen bg-[radial-gradient(circle_at_top,_#f3f4f6,_#ffffff_40%,_#f9fafb_100%)] px-6 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="group mb-10 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-6 py-3 text-sm font-medium tracking-[0.18em] text-amber-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-400 hover:to-yellow-400 hover:text-white hover:shadow-lg hover:scale-105">
            OUR MISSION
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.15] tracking-tight text-slate-900">
            Building{' '}
            <span className="text-slate-900"> </span>
            <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Tomorrow's
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Technology
            </span>{' '}
            <span className="text-slate-900">Today</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-500 max-w-xl">
            To empower businesses with intelligent technology and carefully crafted
            strategies that drive measurable results, foster growth, and create
            lasting impact. We focus on delivering solutions that not only meet
            today's challenges but also prepare your business for future success.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="group relative w-full max-w-lg h-[420px] rounded-[30px] border border-amber-200/60 bg-gradient-to-br from-yellow-50 via-white to-amber-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden">
          <div className="text-8xl z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              🏢
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-10 opacity-0 group-hover:opacity-100 transition duration-500">
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
