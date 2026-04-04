import React from 'react';
import { motion } from 'framer-motion';

// --- Assets ---
import aboutIcon from '../assets/about.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';

const WorkingProcess = () => {
  const Motion = motion;
  const steps = [
    {
      id: '01',
      icon: icon5,
      title: 'Discovery & Strategy',
      desc: 'We start by understanding your vision, goals,',
    },
    {
      id: '02',
      icon: icon6,
      title: 'Design & Development',
      desc: 'We start by understanding your vision, goals,',
    },
    {
      id: '03',
      icon: icon7,
      title: 'Testing & Launch', // Changed for variety, or keep as image
      desc: 'We start by understanding your vision, goals,',
    },
  ];

  return (
    <section id="working-process" className="py-10 sm:py-12 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Light Gray Container */}
        <div className="bg-[#F8F9FA] rounded-[48px] p-6 sm:p-8 md:p-16 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 md:gap-10 items-start">
          
          {/* Left Side Content */}
          <Motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
              {/* brightness-0 filter turns any colored icon to pure black */}
              <img src={aboutIcon} alt="process" className="w-4 h-4 brightness-0" />
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Working Process</span>
            </div>

            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 leading-[1.1] max-w-md">
              Explore Our 3 Step Working Process
            </h2>

            <Motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D9FF00] hover:bg-[#CFFE25] text-slate-900 px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all mt-4"
            >
              Start Projects
            </Motion.a>
          </Motion.div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-5">
            {steps.map((step, index) => (
              <Motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step Number (Top Right) */}
                <span className="absolute top-6 right-8 text-5xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                  {step.id}
                </span>

                <div className="relative z-10">
                  {/* Card Icon */}
                  <div className="mb-6">
                    <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
                  </div>
                  
                  {/* Card Text */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;