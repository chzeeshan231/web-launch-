import React from 'react';
import { motion } from 'framer-motion';

// --- Assets ---
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import aboutIcon from '../assets/about.png';

const RecentProjects = () => {
  const Motion = motion;
  const projects = [
    {
      id: 1,
      image: project1,
      title: 'Mental Health Website',
      category: 'Website Design',
      offset: false, // Standard position
    },
    {
      id: 2,
      image: project2,
      title: 'E-commerce Platform',
      category: 'Website Design',
      offset: true, // This will create the zigzag effect (pushed down)
    },
    {
      id: 3,
      image: project3,
      title: 'Branding',
      category: 'Branding',
      offset: false, // Standard position
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <Motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-gray-100 px-3 py-1 rounded-md mb-4"
          >
            <img src={aboutIcon} alt="work" className="w-4 h-4" />
            <span className="text-[12px] font-bold text-slate-700 uppercase tracking-tight">Our Work</span>
          </Motion.div>
          
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-6xl font-bold text-slate-900"
          >
            Our Recent Projects
          </Motion.h2>
        </div>

        {/* --- Projects Mobile Auto Scroll (Left to Right) --- */}
        <div className="md:hidden overflow-hidden">
          <Motion.div
            className="flex w-max gap-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
          >
            {[...projects, ...projects].map((project, index) => (
              <Motion.div
                key={`mobile-${project.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[220px] shrink-0 group flex flex-col"
              >
                <div className="relative overflow-hidden rounded-[24px] shadow-sm bg-gray-50 border border-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-gray-400 font-medium text-xs">{project.category}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        {/* --- Zigzag Projects Grid Desktop --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {projects.map((project, index) => (
            <Motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              /* The 'lg:mt-20' creates the zigzag/staggered look on the middle card */
              className={`flex flex-col group ${project.offset ? 'lg:mt-24' : ''}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[40px] shadow-sm bg-gray-50 border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay (Optional but looks premium) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Text Content */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 transition-colors group-hover:text-[#CFFE25]">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-medium text-sm">
                  {project.category}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentProjects;