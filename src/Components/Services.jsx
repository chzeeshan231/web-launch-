import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- Assets ---
import aboutLogo from '../assets/about.png';
import v1 from '../assets/Vector.png';
import v2 from '../assets/Vector (1).png';
import v3 from '../assets/Vector (2).png';
import v4 from '../assets/Vector (3).png';

const Motion = motion;

const services = [
  {
    icon: v1,
    title: 'Website Development',
    desc: 'Modern one-page and multi-page websites designed to convert visitors into customers.'
  },
  {
    icon: v2,
    title: 'Web Design',
    desc: 'Stunning, user-centric designs that capture your brand essence and convert visitors.'
  },
  {
    icon: v3,
    title: 'E-commerce',
    desc: 'Seamless shopping experiences with secure payment gateways.'
  },
  {
    icon: v4,
    title: 'UI/UX Design',
    desc: 'Data-driven user interfaces and experiences that reduce friction and increase engagement.'
  }
];

const Services = () => {
  // Main background color of the section (Dark Olive)
  const SECTION_BG = "#3d4d15"; 
  // Background color of the cards (Lighter Olive)
  const CARD_BG = "#54652a";

  return (
    <section id="services" className={`py-24 overflow-hidden scroll-mt-24`} style={{ backgroundColor: SECTION_BG }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <Motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-md mb-6"
          >
            <img src={aboutLogo} alt="services" className="w-4 h-4" />
            <span className="text-[12px] font-bold text-slate-800 uppercase tracking-tight">Services</span>
          </Motion.div>
          
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto"
          >
            Our Professional IT & <br className="hidden md:block" /> Web Services
          </Motion.h2>
        </div>

        {/* --- Services Mobile Auto Scroll (Right to Left) --- */}
        <div className="md:hidden overflow-hidden">
          <Motion.div
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
          >
            {[...services, ...services].map((item, i) => (
              <Motion.div
                key={`mobile-${item.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-[28px] flex flex-col w-[220px] min-h-[250px] shrink-0"
                style={{ backgroundColor: CARD_BG }}
              >
                <div className="mb-4">
                  <img src={item.icon} alt={item.title} className="w-9 h-9 mb-6 object-contain" />
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">{item.title}</h3>
                  <p className="text-white/70 text-[12px] leading-relaxed mb-8">{item.desc}</p>
                </div>

                <div className="mt-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#CFFE25]" />
                  <span className="text-xs font-bold text-white tracking-wide">Read More</span>
                </div>

                <div
                  className="absolute -bottom-[1px] -right-[1px] w-16 h-16 rounded-tl-[28px] flex items-center justify-center overflow-visible"
                  style={{ backgroundColor: SECTION_BG }}
                >
                  <div
                    className="absolute -left-4 bottom-0 w-4 h-4"
                    style={{ boxShadow: `8px 8px 0 0 ${SECTION_BG}`, borderBottomRightRadius: '16px' }}
                  />
                  <div
                    className="absolute -top-4 right-0 w-4 h-4"
                    style={{ boxShadow: `8px 8px 0 0 ${SECTION_BG}`, borderBottomRightRadius: '16px' }}
                  />
                  <a href="#contact" className="bg-[#CFFE25] w-9 h-9 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowUpRight size={18} color="black" strokeWidth={2.5} />
                  </a>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        {/* --- Services Grid Desktop --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[40px] flex flex-col h-full group"
              style={{ backgroundColor: CARD_BG }}
            >
              {/* Card Content */}
              <div className="mb-8">
                <img src={item.icon} alt={item.title} className="w-12 h-12 mb-10 object-contain" />
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-10">
                  {item.desc}
                </p>
              </div>

              {/* Bottom "Read More" */}
              <div className="mt-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#CFFE25]" />
                <span className="text-sm font-bold text-white tracking-wide">Read More</span>
              </div>

              {/* --- The Inverted Corner Cutout --- */}
              <div 
                className="absolute -bottom-[1px] -right-[1px] w-20 h-20 rounded-tl-[35px] flex items-center justify-center overflow-visible"
                style={{ backgroundColor: SECTION_BG }}
              >
                {/* Visual Fix for smooth curves (fillets) */}
                <div 
                    className="absolute -left-5 bottom-0 w-5 h-5"
                    style={{ 
                        boxShadow: `10px 10px 0 0 ${SECTION_BG}`,
                        borderBottomRightRadius: '20px' 
                    }} 
                />
                <div 
                    className="absolute -top-5 right-0 w-5 h-5"
                    style={{ 
                        boxShadow: `10px 10px 0 0 ${SECTION_BG}`,
                        borderBottomRightRadius: '20px' 
                    }} 
                />

                {/* Neon Circle Button */}
                <a href="#contact" className="bg-[#CFFE25] w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                   <ArrowUpRight size={24} color="black" strokeWidth={2.5} />
                </a>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;