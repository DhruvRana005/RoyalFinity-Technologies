import React, { useEffect, useRef, useState } from "react";

function useAnimatedCount(target, duration = 1200, trigger = 0) {
    const [value, setValue] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        const start = performance.now();
        const from = 0;
        const to = Number(target);

        function step(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            const current = Math.floor(from + (to - from) * eased);
            setValue(current);
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
            } else {
                setValue(to);
            }
        }

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(step);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [target, duration, trigger]);

    return value;
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function CounterCard({ label, target, suffix = "", trigger }) {
    const count = useAnimatedCount(target, 1400, trigger);
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`bg-gray-800 backdrop-blur-sm rounded-xl p-6 shadow-md border border-black/20 flex flex-col items-start gap-2 w-full md:w-56 cursor-pointer transition-all duration-300 ${hovered ? "scale-105 shadow-xl bg-gray-800 border-amber-300" : "hover:scale-105"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className={`text-3xl md:text-4xl font-extrabold transition-colors duration-300 ${hovered ? "text-amber-500" : "text-white"} counter-number`}>
                {count}
                <span className="text-lg font-medium text-white ml-1">{suffix}</span>
            </div>
            <div className="text-sm text-white">{label}</div>
        </div>
    );
}

export default function AboutImpact() {
    const [trigger, setTrigger] = useState(0);
    const [glowPulse, setGlowPulse] = useState(true);

    useEffect(() => {
        const id = setInterval(() => setGlowPulse((s) => !s), 2200);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="max-w-5xl w-full">
                <div className="mb-8 text-center flex flex-col items-center">
                    <div className="group mb-10 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-6 py-3 text-sm font-medium tracking-[0.18em] text-amber-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-400 hover:to-yellow-400 hover:text-white hover:shadow-lg hover:scale-105">
                        OUR IMPACT
                    </div>

                    <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Achievements That <span className="text-amber-500">Matter</span>
                    </h1>

                    <p className="mt-2 text-white max-w-2xl">
                        Numbers that reflect our commitment to excellence and client success.
                    </p>
                </div>

                <div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <CounterCard label="Projects Delivered" target={100} suffix="+" trigger={trigger} />
                        <CounterCard label="Happy Clients" target={50} suffix="+" trigger={trigger} />
                        <CounterCard label="Client Satisfaction" target={99} suffix="%" trigger={trigger} />
                        <CounterCard label="Support Available" target={24} suffix="/7" trigger={trigger} />
                    </div>

                </div>
            </div>
        </div>
    );
}
