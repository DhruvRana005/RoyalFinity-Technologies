import React from "react";
const COLUMNS = [
  {
    title: "Services",
    items: [
      { label: "Web Development", href: "/services/web" },
      { label: "Mobile & Web Apps", href: "/services/apps" },
      { label: "Digital Marketing & Ads", href: "/services/marketing" },
      { label: "Branding & Design", href: "/services/design" },
      { label: "AI & Automation", href: "/services/ai" },
      { label: "E-commerce Solutions", href: "/services/ecommerce" }
    ]
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Support",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund & Return Policy", href: "/refunds" }
    ]
  }
];

const CONTACT = {
  address: "5C/15, New Industrial Township 5, Faridabad, Haryana 121001",
  email: "info@royalfinitytechnologies.com",
  phone: "+91 92118 16999",
  hours: "Mon - Sat: 10:00 AM - 7:00 PM IST"
};

const BADGES = [
  { id: "b1", label: "Web", color: "linear-gradient(135deg,#06b6d4,#4f46e5)" },
  { id: "b2", label: "Apps", color: "linear-gradient(135deg,#f97316,#ef4444)" },
  { id: "b3", label: "Marketing", color: "linear-gradient(135deg,#10b981,#06b6d4)" },
  { id: "b4", label: "Design", color: "linear-gradient(135deg,#8b5cf6,#ec4899)" },
  { id: "b5", label: "AI", color: "linear-gradient(135deg,#f59e0b,#ef4444)" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="space-y-3">
              <h3 className="text-lg font-semibold">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href || "#"} className="text-sm text-gray-300 hover:text-white transition-colors duration-200 block transform hover:-translate-y-0.5"> {it.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold">Contact & Hours</h3>
            <p className="mt-3 text-sm text-gray-300">
            Empowering businesses with technology and creativity. We don't just build solutions, we build trust and long-term growth for every client.
            </p>

            <div className="mt-4 space-y-3 text-sm text-gray-200">
              <ContactRow
                svg={
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 11.5c0 5.25-7 10.5-7 10.5S5 16.75 5 11.5a7 7 0 1114 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }text={CONTACT.address}/>

              <ContactRow
                svg={<svg className="w-5 h-5 text-indigo-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 8.5l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }text={CONTACT.email}/>

              <ContactRow svg={<svg className="w-5 h-5 text-indigo-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.63A2 2 0 014.09 2h3a2 2 0 012 1.72c.12 1.05.37 2.08.73 3.05a2 2 0 01-.45 2.11L9.91 9.91a16 16 0 006 6l1.03-1.03a2 2 0 012.11-.45c.97.36 2 .61 3.05.73A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>} text={CONTACT.phone}/>

              <ContactRow svg={<svg className="w-5 h-5 text-indigo-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>} text={CONTACT.hours}/>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8" />
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4 overflow-hidden">
            {BADGES.map((b) => (
              <div key={b.id} className="relative group" aria-hidden>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-medium shadow-lg transform transition-transform duration-300"
                  style={{ background: b.color }}
                >
                  <span className="text-sm">{b.label}</span>
                </div>

                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ boxShadow: "0 10px 30px rgba(99,102,241,0.12)" }}
                />
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} RoyalFinity Technologies. All rights reserved. | Designed & Developed with ❤️ in India.
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          nav {
            transform: translateY(8px);
            opacity: 0;
            animation: colEnter 600ms ease forwards;
          }
          nav:nth-child(1) { animation-delay: 0ms; }
          nav:nth-child(2) { animation-delay: 80ms; }
          nav:nth-child(3) { animation-delay: 160ms; }
        }
        @keyframes colEnter {
          to { transform: translateY(0); opacity: 1; }
        }
        .group:hover .group-hover\\:-translate-y-2 { transform: translateY(-8px); }
      `}</style>
    </footer>
  );
}

function ContactRow({ svg, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0">{svg}</div>
      <div className="text-sm">{text}</div>
    </div>
  );
}