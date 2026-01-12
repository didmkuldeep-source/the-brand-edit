
import React from 'react';

const projects = [
  {
    id: "1",
    title: "LUMINA CO.",
    category: "Identity / 2024",
    image: "https://picsum.photos/id/101/1200/800"
  },
  {
    id: "2",
    title: "NEO VISION",
    category: "Web Design / 2023",
    image: "https://picsum.photos/id/102/1200/800"
  },
  {
    id: "3",
    title: "URBAN PULSE",
    category: "Media / 2024",
    image: "https://picsum.photos/id/103/1200/800"
  },
  {
    id: "4",
    title: "SILK ROAD",
    category: "Branding / 2024",
    image: "https://picsum.photos/id/104/1200/800"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-zinc-800/50 uppercase">Featured Work</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${idx % 2 === 0 ? 'lg:-translate-y-12' : 'lg:translate-y-12'}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-800 border border-zinc-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                </div>
                <div className="text-zinc-600 text-5xl font-black opacity-20 italic">0{idx + 1}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <button className="text-2xl font-bold border-b-2 border-indigo-600 pb-2 hover:text-indigo-500 transition-colors">
            See all work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
