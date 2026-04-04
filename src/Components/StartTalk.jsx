import React from 'react';
import { motion } from 'framer-motion';

// --- Assets ---
import bgImg from '../assets/bg.jpg';

const StartTalkCTA = () => {
  const Motion = motion;
  return (
    <section id="contact" className="py-10 sm:py-12 bg-white px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] md:rounded-[60px] py-12 sm:py-14 md:py-20 px-6 text-center shadow-2xl"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center">
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-[13px] md:text-[16px] font-medium mb-6 opacity-90 tracking-tight"
            >
              Have a project in mind? Just let us know!
            </Motion.p>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white text-5xl md:text-8xl font-bold mb-12 tracking-tight leading-none"
            >
              Let’s Start Talk
            </Motion.h2>

            <Motion.a
              href="#footer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold text-sm md:text-[15px] shadow-lg transition-all hover:bg-gray-100"
            >
              Connect With Us
            </Motion.a>
          </div>

          {/* Optional Overlay to ensure text readability if bg is too light */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </Motion.div>
      </div>
    </section>
  );
};

export default StartTalkCTA;