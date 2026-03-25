import React from "react";

const projects = [
  {
    title: "Crictek Industries",
    desc: "Corporate industrial website designed to showcase manufacturing capabilities.",
    img: "/cricket.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "",
  },
  {
    title: "Shree Dauji Jewels",
    desc: "Elegant jewelry brand website crafted with premium design.",
    img: "/jewels.png",
    tech: ["HTML", "CSS", "JS", "PHP"],
    link: "",
  },
  {
    title: "RR Clamping Tools",
    desc: "Industrial tools website focused on product visibility.",
    img: "/hardtools.png",
    tech: ["HTML", "CSS", "JS"],
    link: "",
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 h-80 w-80 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute top-40 right-0 h-96 w-96 bg-yellow-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex px-6 py-2 rounded-full border border-yellow-400/30 bg-white/5 text-yellow-300 text-sm backdrop-blur-md mb-6 hover:scale-105 transition">
          🎯 Our Latest Work
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold">
          Recent{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
          Discover our real-world projects that reflect our expertise in building
          high-performing websites and digital solutions.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            
            <div
              key={index}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = -(y / rect.height - 0.5) * 8;
                const rotateY = (x / rect.width - 0.5) * 8;

                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl">

              <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 transition-all duration-500 group-hover:w-full"></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 blur-sm opacity-30"></div>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              <div className="overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"/>
              </div>

              <div className="p-6 relative z-10 text-left">
                <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-300 text-sm leading-6">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full border border-yellow-400/30 text-yellow-300 bg-yellow-400/10">{tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a href={item.link || "#"} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 ${item.link ? "text-yellow-400 hover:text-white group-hover:gap-3" : "text-gray-500 cursor-not-allowed"
                    }`}>
                    View Project →
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;