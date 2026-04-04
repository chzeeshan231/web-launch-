import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

// --- Assets ---
import main2 from '../assets/main2.png';
import aboutIcon from '../assets/about.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const AboutSection = () => {
  const Motion = motion;
  const stats = [
    { id: 1, icon: icon1, title: '200+', desc: 'We deliver great work always' },
    { id: 2, icon: icon2, title: '10+', desc: 'Experience you can count on' },
    { id: 3, icon: icon3, title: '20+', desc: 'Award-Winning Work, Trusted Results' },
    { id: 4, icon: icon4, title: '5K+', desc: 'We have happy Clients worldwide' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-10 sm:py-12 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* --- Top Header Section --- */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-10"
        >
          <Motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-gray-100 px-3 py-1 rounded-full mb-4"
          >
            <img src={aboutIcon} alt="about" className="w-4 h-4" />
            <span className="text-[12px] font-bold text-slate-700 uppercase tracking-tight">About Us</span>
          </Motion.div>
          
          <Motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-5"
          >
            Learn More About us
          </Motion.h2>
          
          <Motion.p 
            variants={fadeUp}
            className="max-w-xl mx-auto text-gray-500 text-sm sm:text-[15px] leading-relaxed"
          >
            We are a dynamic team of innovators, storytellers, and visionaries dedicated 
            to transforming ideas into extraordinary experiences.
          </Motion.p>
        </Motion.div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-9 items-center">
          
          {/* Left: Custom Shaped Image */}
          <Motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="w-full aspect-[4/4.25] rounded-tl-[72px] sm:rounded-tl-[96px] rounded-br-[72px] sm:rounded-br-[96px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden">
              <img src={main2} alt="About main" className="w-full h-full object-cover" />
            </div>
          </Motion.div>

          {/* Right: Stats and Button */}
          <Motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="flex flex-col gap-6 sm:gap-7">
            
            {/* Stats Cards Mobile Auto Scroll (Left to Right) */}
            <div className="md:hidden overflow-hidden">
              <Motion.div
                className="flex w-max gap-3"
                animate={{ x: ['-50%', '0%'] }}
                transition={{ ease: 'linear', duration: 22, repeat: Infinity }}
              >
                {[...stats, ...stats].map((stat, index) => (
                  <Motion.div
                    key={`${stat.id}-mobile-${index}`}
                    variants={fadeUp}
                    className="w-[168px] shrink-0 bg-[#F8F9FA] p-4 rounded-[16px] border border-gray-100 flex flex-col gap-2.5"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img src={stat.icon} alt="stat icon" className="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{stat.title}</h3>
                      <div className="w-full border-t border-dashed border-gray-300 my-2.5" />
                      <p className="text-[10px] text-gray-500 font-medium leading-4.5">{stat.desc}</p>
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>
            </div>

            {/* Stats Cards Desktop */}
            <div className="hidden md:grid md:grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <Motion.div 
                  key={stat.id}
                  variants={fadeUp}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#F8F9FA] p-5 sm:p-6 rounded-[20px] border border-gray-50 flex flex-col gap-3 group hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src={stat.icon} alt="stat icon" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.title}</h3>
                    <div className="w-full border-t border-dashed border-gray-300 my-3" />
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-5">
                      {stat.desc}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Bottom Actions */}
            <Motion.div 
              variants={fadeUp}
              className="flex w-full flex-row sm:flex-row sm:flex-wrap items-center gap-3 sm:gap-5 mt-2"
            >
              <a href="#contact" className="bg-[#CFFE25] text-slate-900 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-[13px] sm:text-[15px] shadow-md shadow-[#CFFE25]/25 hover:scale-105 transition-transform active:scale-95 whitespace-nowrap">
                More About Us
              </a>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#F8F9FA] p-2.5 sm:p-3 rounded-xl border border-gray-100 text-slate-700">
                  <PhoneCall size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wide">Get free Qoute</p>
                  <p className="text-[13px] sm:text-[16px] font-bold text-slate-900 leading-none whitespace-nowrap">22 (00) 356 7890</p>
                </div>
              </div>
            </Motion.div>

          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;