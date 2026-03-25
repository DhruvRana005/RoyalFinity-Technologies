import React from "react";
import { FaGem, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function AboutFuture() {
  const navigate = useNavigate();

  const createConfetti = () => {
    const colors = ["#eab308", "#facc15", "#fcd34d", "#fefce8"];

    for (let i = 0; i < 45; i++) {
      const confetti = document.createElement("div");

      const size = Math.random() * 8 + 6;
      confetti.style.position = "fixed";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = "-10px";
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.opacity = String(Math.random() * 0.8 + 0.4);
      confetti.style.borderRadius = "3px";
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.zIndex = "9999";
      confetti.style.pointerEvents = "none";

      document.body.appendChild(confetti);

      const duration = Math.random() * 2200 + 1800;
      const rotateEnd = Math.random() * 720;

      confetti.animate(
        [
          { transform: `translateY(0) rotate(0deg)` },
          {
            transform: `translateY(${window.innerHeight + 100}px) rotate(${rotateEnd}deg)`,
          },
        ],
        {
          duration,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }
      );

      setTimeout(() => confetti.remove(), duration);
    }
  };

  const handleMissionClick = () => {
    const pill = document.querySelector(".mission-pill");
    if (!pill) return;

    pill.style.transform = "scale(0.96)";
    setTimeout(() => {
      pill.style.transform = "scale(1)";
    }, 150);

    createConfetti();
  };

  const handleCTAClick = () => {
    const btn = document.querySelector(".cta-button");
    if (!btn) return;

    btn.style.transform = "scale(0.96)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 180);

    navigate("/contact");

    createConfetti();
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-zinc-950 to-black px-6 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col items-center justify-center text-center">
        
        <button
          onClick={handleMissionClick}
          className="mission-pill group inline-flex items-center gap-3 rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-900/80 to-yellow-900/80 px-8 py-3 text-sm font-semibold uppercase tracking-[1.5px] text-amber-300 shadow-inner backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-amber-400/60 hover:from-pink-500/90 hover:to-amber-400/90 hover:text-white hover:shadow-[0_20px_25px_-5px_rgba(234,179,8,0.3)]">
          <FaGem className="text-xl text-pink-400 drop-shadow-sm transition-transform duration-300 group-hover:rotate-12" />
          OUR MISSION
        </button>

        <h1 className="mt-10 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-1px] text-white md:text-6xl">
          Let's Build the <span className="text-amber-400">Future</span> Together
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-2xl">
          At Royalinity Technologies, we're here to simplify technology for you.
          Whether you're starting small or scaling globally, our team is ready to
          support your journey.
        </p>

        <button
          onClick={handleCTAClick}
          className="cta-button group relative mt-14 inline-flex items-center justify-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-400 to-yellow-400 px-8 py-5 text-lg font-semibold text-neutral-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.8)] md:px-7 md:py-7 md:text-xl">
          
          <span className="absolute left-[-120%] top-0 h-full w-1/3 skew-x-[-20deg] bg-white/40 transition-all duration-700 group-hover:left-[200%]" />
          
          <span className="relative text-2xl transition-transform duration-300 group-active:rotate-12">
            👉
          </span>

          <span className="relative text-center">
            Let's create something extraordinary together — Contact us today.
          </span>

          <FaArrowRight className="relative text-xl transition-transform duration-300 group-hover:translate-x-2" />
        </button>

      </div>
    </section>
  );
}