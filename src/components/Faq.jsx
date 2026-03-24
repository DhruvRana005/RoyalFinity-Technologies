import React, { useState } from "react";

const faqs = [
    {
        question: "What services does Royalfinity Technologies offer?",
        answer:
            "We provide end-to-end digital solutions, including website & app development, branding & design, AI & automation, digital marketing, and software solutions tailored to your business needs."
    },
    {
        question: "Can you handle projects for businesses of any size?",
        answer:
            "Absolutely! We work with startups, SMEs, and large enterprises, customizing our solutions to meet your specific goals and scale."
    },
    {
        question: "How does Royalfinity ensure project success?",
        answer:
            "We follow a structured process—discover, strategize, design, implement, optimize, and measure results—ensuring every project delivers measurable impact."
    },
    {
        question: "Do you provide ongoing support after project completion?",
        answer:
            "Yes! We offer continuous support and maintenance to ensure your digital solutions remain up-to-date and perform optimally."
    },
    {
        question: "How can I get started with Royalfinity Technologies?",
        answer:
            "Simply reach out through our contact form, email, or phone. We’ll schedule a consultation to understand your needs and propose a customized solution."
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-black via-purple-900 to-pink-700">
            <div className="w-full max-w-3xl rounded-2xl p-8 shadow-2xl bg-black/40" style={{background: "linear-gradient(135deg, rgba(10,11,25,0.95) 0%, rgba(58,12,163,0.9) 30%, rgba(219,39,119,0.9) 70%)"}}>
                <header className="mb-6 text-center">
                    <p className="text-sm tracking-widest text-indigo-200">QUICK ANSWERS</p>
                    <h2 className="mt-2 text-3xl font-extrabold text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-2 text-sm text-indigo-100/80">
                        Common questions about our services and process
                    </p>
                </header>

                <div className="space-y-4">
                    {faqs.map((faq, index) => { const isOpen = openIndex === index;
                        return (<div key={index} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <button onClick={() => toggleFAQ(index)} aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} className="w-full text-left px-5 py-4 flex items-center gap-4 focus:outline-none">
                                        <div className="flex-1">
                                            <h3 className="text-white font-semibold">{faq.question}</h3>
                                            <p className="mt-1 text-sm text-indigo-100/80">
                                                {isOpen ? "Hide answer" : "Click the arrow to view answer"}
                                            </p>
                                        </div>

                                        <span className={`flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 ${isOpen ? "bg-white/10 rotate-180" : "bg-white/5"}`}>
                                            <svg className={`w-5 h-5 text-white transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000 svg" aria-hidden="true"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>

                                <div id={`faq-panel-${index}`} className={`px-5 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 py-4" : "max-h-0 opacity-0"}`}>
                                    <p className="text-indigo-100">{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}