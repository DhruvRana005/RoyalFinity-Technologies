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
        gradient: "from-rose-300 to-rose-400",
    },
    {
        id: 2,
        name: "Lavish Sachdeva",
        title: "Co-Founder & CTO",
        bio:
            "The innovator shaping our technical direction, ensuring that every solution we deliver is modern, scalable, and future-ready.",
        icon: <FiCode className="w-8 h-8" />,
        gradient: "from-indigo-300 to-cyan-300",
    },
];

export default function AboutTeam() {
    const [open, setOpen] = useState(null);

    return (
        <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="text-center">
                        <div className="text-xs uppercase tracking-wider text-gray-700 px-3 py-1 rounded bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 shadow-sm transition-all duration-300 hover:scale-105 inline-block">
                            👑 Leadership Team
                        </div>

                        <h1 className="mt-2 text-4xl font-extrabold 
                   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                   bg-clip-text text-transparent">
                            Meet Our Co-Founders
                        </h1>
                    </div>
                </div>


                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                    Visionary leaders driving innovation and excellence in technology solutions.
                </p>

                <div className="flex flex-col gap-8">
                    {founders.map((f, index) => (
                        <div key={f.id} className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            } items-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-transform transform hover:-translate-y-1`}>
                            <div className={`w-full md:w-1/3 h-full p-6 flex items-center justify-center bg-gradient-to-r ${f.gradient} text-white`}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                                        {f.icon}
                                    </div>
                                    <div className="text-lg font-semibold">{f.name}</div>
                                    <div className="text-sm opacity-90">{f.title}</div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 p-6">
                                <p className="text-gray-700 text-sm">{f.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}