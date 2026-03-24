import React from 'react';
import Footer from '../components/Footer';

const Services = () => {
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
    },
    {
      title: 'Search Engine Optimization (SEO)',
      desc: '👉 Be visible where it matters most.',
      points: [
        'Keyword Research & On-Page SEO',
        'Technical SEO & Site Optimization',
        'Backlinks & Authority Building',
        'Local SEO for More Leads',
      ],
      icon: '⚙️'
    },
    {
      title: 'Google Ads (SEM / PPC)',
      desc: '👉 Every click counts — let’s make it profitable.',
      points: [
        'Search Ads (Google Search Campaigns)',
        'Display Ads & YouTube Ads',
        'Smart & Remarketing Campaigns',
        'ROI-Driven Optimization',
      ],
      icon: '🖥️'
    },
    {
      title: 'Content Marketing',
      desc: '👉 Because content is what makes your brand memorable.',
      points: [
        'Blog Writing & SEO Content',
        'Creative Copywriting & Posts',
        'Email Marketing Campaigns',
        'Brand Storytelling',
      ],
      icon: '⚙️'
    },
    {
      title: 'AI & Automation',
      desc: '👉 Step into the future of business—let AI work for you.',
      points: [
        'Smart AI Chatbots & Virtual Assistants',
        'Seamless Business Process Automation',
        'Data-Driven Insights & Analytics',
        'AI-Powered Customer Engagement',
      ],
      icon: '⚙️'
    }
  ];

  return (
    <div>
    <section id='services' className="w-full bg-black text-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <div className="group inline-block">
          <div className="relative rounded-full border border-yellow-400/40 bg-transparent px-6 py-2 text-sm sm:text-base font-medium text-yellow-600 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:scale-105">
            <span className="mr-2">👜</span>
            Our Premium Services
          </div>
        </div>

        <h2 className="mt-8 text-white text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          What We <span className="text-yellow-500">Offer</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 text-slate-500">
          From building your brand to growing your sales, we take care of it all
          so you can focus on your business.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10 hover:border-yellow-400/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-2xl transition duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-zinc-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-7 text-slate-500">
                {service.desc}
              </p>

              <ul className="mt-6 space-y-3 text-slate-600">
                {service.points.map((point, i) => (<li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Services;
