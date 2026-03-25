import React from 'react';

const PremiumServices = () => {
  const services = [
    {
      title: 'Web Development',
      desc:
       '👉 Let’s Turn Your Idea Into Reality.',
       points: [
        'Custom Business Websites',
        'E-commerce Stores that Sell',
        'CMS Platforms (WordPress, Shopify, etc.)',
        'Landing Pages & Portfolios that Convert',
      ],
      icon: '💻',
    },
    {
      title: 'App Development',
      desc: '👉 Apps that feel built just for your users.',
      points: [
        'Android (Java, Kotlin)',
        'iOS (Swift, Objective-C)',
        'High performance & better security',
        'Best suited for startups & growing brands',
      ],
      icon: '📱',
    },
    {
      title: 'Digital Marketing',
      desc: '👉 Let’s Turn Your Idea Into Reality.',
      points: [
        'Google & Social Media Ads that Convert',
        'SEO to Rank & Be Found',
        'Creative Social Media Marketing',
        'Content & Campaigns that Build Trust',
      ],
      icon: '📈',
    },
    {
      title: 'Graphic & UI/UX Design',
      desc: '👉 Make your brand unforgettable.',
      points: [
        'Logo & Brand Identity',
        'UI/UX Design for Websites & Apps',
        'Graphics, Creatives & Motion Designs',
        'Brand Guidelines & Collaterals',
      ],
      icon: '🎨️'
    },
    {
      title: 'Software & ERP Solutions',
      desc: '👉 Work smarter, not harder.',
      points: [
        'Custom Software Development',
        'ERP & CRM Solutions',
        'Cloud-Based Applications',
        'Workflow & Business Automation',
      ],
      icon: '💻️'
    },
    {
      title: 'Business Automation',
      desc: '👉 Step into the future of business.',
      points: [
        'Smart AI Chatbots & Virtual Assistants',
        'Seamless Business Process Automation',
        'Data-Driven Insights & Analytics',
        'AI-Powered Customer Engagement',
      ],
      icon: '🤖️'
    }
  ];

  return (
    <section id='services' className="w-full bg-black text-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl mt-20 text-center">
      <div className="group inline-block">
        <div className="relative rounded-full border border-yellow-400/40 bg-transparent px-6 py-2 text-sm sm:text-base font-medium text-yellow-600 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:scale-105">
          <span className="mr-2">👜</span>
          Our Premium Services
        </div>
      </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 h-96 w-96 bg-fuchsia-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-40 right-0 h-[28rem] w-[28rem] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] bg-yellow-500/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold">
            What We{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = -(y / rect.height - 0.5) * 10;
                const rotateY = (x / rect.width - 0.5) * 10;

                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
              }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg) scale(1)";
                }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 transition-all duration-500 group-hover:w-full"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 blur-sm opacity-30"></div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4 transition group-hover:scale-110">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-yellow-400">✔</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
     
    </div>
    </section>
  );
};

export default PremiumServices;
