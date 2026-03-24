import React from 'react'

const AboutStory = () => {
    return (
        <div className="min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,245,230,0.95),_rgba(255,255,255,1)_35%,_rgba(250,250,250,1)_70%,_rgba(255,255,255,1)_100%)] px-4 py-16 text-center">
            <div className="mx-auto flex max-w-4xl flex-col items-center">
                <div className="group mb-10 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/70 px-6 py-3 text-sm font-medium tracking-[0.18em] text-amber-700 shadow-[0_8px_30px_rgba(255,196,77,0.14)] backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-400 hover:to-yellow-400 hover:text-white hover:shadow-[0_12px_40px_rgba(249,115,22,0.28)] hover:scale-[1.03] active:scale-[0.98]">
                    <span className="text-base transition-transform duration-300 group-hover:rotate-12">🎯</span>
                    <span>OUR STORY</span>
                </div>

                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-6xl">
                    Empowering Businesses Through
                    <span className="mt-2 block bg-gradient-to-r from-fuchsia-500 via-amber-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
                        Technology
                    </span>
                </h1>

                <p className="mt-10 max-w-4xl text-lg leading-9 text-slate-500 md:text-[1.35rem] md:leading-[2.35rem]">
                    Every business has unique challenges, and we started Royalfinity Technologies to solve those
                    challenges with creativity, clarity, and care. Over the years, we&apos;ve worked with startups,
                    established brands, and global clients — helping them streamline processes, connect with their
                    customers, and grow with confidence in the digital age.
                </p>
            </div>
        </div>
    )
}

export default AboutStory