import React from "react";

const projects = [
  {
    title: "Crictek Industries",
    desc: "Corporate industrial website designed to showcase manufacturing capabilities, product range, and global business presence with a modern UI.",
    img: "/cricket.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Shree Dauji Jewels",
    desc: "Elegant jewelry brand website crafted with a premium design, product showcase, and optimized user experience for customer engagement.",
    img: "/jewels.png",
    tech: ["HTML", "CSS", "JS", "PHP", "Lead Forms"],
  },
  {
    title: "RR Clamping Tools",
    desc: "Industrial tools website focused on product visibility, lead generation, and business credibility with a clean responsive design.",
    img: "/hardtools.png",
    tech: ["HTML", "CSS", "JS", "Portfolio"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-purple-900 via-black to-black py-20 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-6">
        <span className="inline-block px-6 py-2 rounded-full border border-yellow-400/40 bg-yellow-100 text-yellow-600 text-sm font-medium">
          🎯 Our Latest Work
        </span>
      </div>

      <h2 className="text-center text-4xl sm:text-5xl font-semibold text-zinc-100">
        Recent <span className="text-yellow-500">Projects</span>
      </h2>

      <p className="text-center mt-4 max-w-2xl mx-auto text-zinc-100 text-lg">
        Discover our real-world projects that reflect our expertise in building
        high-performing websites, brands, and digital solutions.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, index) => (
          <div key={index} className="group bg-white rounded-3xl shadow-md overflow-hidden transition duration-300 hover:-translate-y-3 hover:shadow-xl">

            <div className="overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-zinc-900">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-600 text-sm leading-6">
                {item.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full border border-yellow-400/40 text-yellow-600 bg-yellow-50">{tech}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <button className="text-yellow-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all hover:text-black">
                  View Project
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
