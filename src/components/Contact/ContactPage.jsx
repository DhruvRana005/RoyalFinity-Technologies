import React, { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        serviceRequired: "",
        projectBudget: "",
        projectDescription: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = () => {
        const phone = "919211816999";

        if (!form.firstName || !form.lastName || !form.email || !form.serviceRequired || !form.projectDescription) {
            alert("Please fill all required fields (*)");
            return;
        }

        const text = `Hello Royalfinity Technologies, First Name: ${form.firstName}
        Last Name: ${form.lastName}Email Address: ${form.email}
        Phone Number: ${form.phoneNumber || "N/A"}
        Company Name: ${form.companyName || "N/A"}
        Service Required: ${form.serviceRequired}
        Project Budget: ${form.projectBudget || "N/A"}
        Project Description: ${form.projectDescription}
        Thank you!`.trim();const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-yellow-500/10 blur-3xl rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <header className="mb-12">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl sm:text-5xl font-extrabold">
                                Get In{" "}
                                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                                    Touch
                                </span>
                            </h1>

                            <p className="mt-4 text-slate-300 max-w-2xl">
                                We're here to help you grow. Tell us about your idea and we’ll guide you forward.
                            </p>
                        </div>

                        <a href="tel:+919211816999" className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-5 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]">
                            📞 Get In Touch
                        </a>
                    </div>
                </header>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <a href="mailto:royalfinitytechnologies@gmail.com" className="group block p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <h3 className="text-lg font-semibold text-yellow-400">📧 Email</h3>
                            <p className="mt-2 text-slate-300 group-hover:text-white">
                                royalfinitytechnologies@gmail.com
                            </p>
                        </a>

                        <a href="tel:+919211816999" className="group block p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <h3 className="text-lg font-semibold text-yellow-400">📞 Call Us</h3>
                            <p className="mt-2 text-slate-300 group-hover:text-white">
                                +91 92118 16999
                            </p>
                        </a>

                        <a href="https://wa.me/919211816999" target="_blank" rel="noopener noreferrer"
                            className="group block p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <h3 className="text-lg font-semibold text-green-400">💬 WhatsApp</h3>
                            <p className="mt-2 text-slate-300 group-hover:text-white">
                                Chat instantly with us
                            </p>
                        </a>
                    </div>

                    <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                        <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 transition-all duration-500 group-hover:w-full"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="firstName" placeholder="First Name *" value={form.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-yellow-400 outline-none transition"/>

                            <input type="text" name="lastName" placeholder="Last Name *" value={form.lastName}
                                onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-yellow-400 outline-none transition"/>

                            <input type="email"  name="email" placeholder="Email Address *" value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-yellow-400 outline-none transition sm:col-span-2"/>

                            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-yellow-400 outline-none transition"/>

                            <input type="text" name="companyName" placeholder="Company Name" value={form.companyName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-yellow-400 outline-none transition"/>

                            <select name="serviceRequired" value={form.serviceRequired} onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-yellow-400 outline-none transition sm:col-span-2 text-slate-300">
                                <option value="">Select a service *</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Graphic & UI/UX Design">Graphic & UI/UX Design</option>
                                <option value="Software & ERP Solutions">Software & ERP Solutions</option>
                                <option value="Business Automation">Business Automation</option>
                                <option value="SEO">Search Engine Optimization (SEO)</option>
                                <option value="Google Ads (SEM / PPC)">Google Ads (SEM / PPC)</option>
                                <option value="Content Marketing">Content Marketing</option>
                                <option value="AI & Automation">AI & Automation</option>
                            </select>

                            <select name="projectBudget" value={form.projectBudget} onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-yellow-400 outline-none transition sm:col-span-2 text-slate-300">
                                <option value="">Select budget range</option>
                                <option value="Under ₹10,000">Under ₹10,000</option>
                                <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                                <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                            </select>

                            <textarea name="projectDescription" placeholder="Project Description *" rows="5" value={form.projectDescription} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-yellow-400 outline-none transition sm:col-span-2"/>

                            <button onClick={handleWhatsApp} className="sm:col-span-2 w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.7)]">
                                💬 Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}