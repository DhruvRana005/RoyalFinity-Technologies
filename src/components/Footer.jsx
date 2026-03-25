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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {COLUMNS.map((col) => (
            <nav key={col.title} className="space-y-3">
              <h3 className="text-lg font-semibold">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="text-sm text-gray-300 hover:text-white transition duration-300 hover:-translate-y-1 block">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-lg font-semibold">Contact & Hours</h3>
            <p className="mt-3 text-sm text-gray-300">
              Empowering businesses with technology and creativity.
            </p>

            <div className="mt-4 space-y-3 text-sm text-gray-200">
              <ContactRow text={CONTACT.address} icon="📍" />
              <ContactRow text={CONTACT.email} icon="📧" />
              <ContactRow text={CONTACT.phone} icon="📞" />
              <ContactRow text={CONTACT.hours} icon="⏰" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8" />
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} RoyalFinity Technologies. All rights reserved.
          </div>

          <div className="flex justify-center md:justify-end">
            <a
              href="https://wa.me/919211816999"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]">
              <span className="text-lg group-hover:rotate-12 transition">
                💬
              </span>
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>

      <style>{`
        nav {
          transform: translateY(10px);
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }

        nav:nth-child(1) { animation-delay: 0ms; }
        nav:nth-child(2) { animation-delay: 100ms; }
        nav:nth-child(3) { animation-delay: 200ms; }

        @keyframes fadeUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
}

function ContactRow({ text, icon }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg">{icon}</span>
      <div>{text}</div>
    </div>
  );
}