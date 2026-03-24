import React from 'react'

const Ideas = () => {
  return (
    <div>
      <section className="w-full bg-[#2f0f47] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <div className="group inline-block">
          <div className="relative rounded-full border border-yellow-400/40 px-6 py-2 text-sm sm:text-base font-medium text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:scale-105">
            🏆 Why Choose RoyalFinity
          </div>
        </div>

        <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Transforming Ideas <span className="text-yellow-400">into Impact</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-zinc-300 leading-7">
          At Royalfinity Technologies, we believe in creating digital solutions
          that truly make a difference. Our focus is on understanding your
          business, anticipating challenges, and delivering results that last.
        </p>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/40">
            <img src="/about-img.gif" alt="Workflow Process" className="w-full h-auto rounded-2xl object-cover"/>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Ideas;