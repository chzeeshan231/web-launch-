import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Assets ---
import aboutLogo from '../assets/about.png';
import { articles } from '../data/articles';

const RecentArticles = () => {
  const Motion = motion;
  const navigate = useNavigate();

  const renderBlogCard = (blog, index, compact = false) => (
    <Motion.div
      key={`${blog.id}-${index}-${compact ? 'm' : 'd'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group flex flex-col cursor-pointer ${compact ? 'w-[230px] shrink-0' : ''}`}
      onClick={() => navigate(`/articles/${blog.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          navigate(`/articles/${blog.id}`);
        }
      }}
    >
      {/* Image with hover effect */}
      <div className={`overflow-hidden relative z-10 ${compact ? 'rounded-[18px] mb-[-22px]' : 'rounded-[22px] mb-[-32px]'}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${compact ? 'aspect-[16/10]' : 'aspect-[16/10]'}`}
        />
      </div>

      {/* Text Content Area */}
      <div className={`bg-[#F8F9FA] flex flex-col h-full border border-gray-50 group-hover:bg-white group-hover:shadow-xl transition-all duration-300 ${compact ? 'pt-11 p-4 rounded-[22px]' : 'pt-16 p-8 rounded-[32px]'}`}>
        {/* Meta info */}
        <div className={`flex items-center justify-between ${compact ? 'mb-4' : 'mb-6'}`}>
          <span className={`bg-white font-bold text-slate-800 shadow-sm border border-gray-50 ${compact ? 'px-3 py-1 rounded-lg text-[11px]' : 'px-5 py-2 rounded-xl text-sm'}`}>
            {blog.tag}
          </span>
          <div className={`flex items-center gap-2 text-gray-400 font-medium ${compact ? 'text-[10px]' : 'text-[13px]'}`}>
            <CalendarDays size={compact ? 12 : 14} />
            {blog.date}
          </div>
        </div>

        {/* Divider */}
        <div className={`w-full border-t border-dashed border-gray-300 ${compact ? 'mb-4' : 'mb-6'}`} />

        {/* Title & Desc */}
        <h3 className={`font-bold text-slate-900 leading-tight group-hover:text-[#CFFE25] transition-colors ${compact ? 'text-lg mb-2' : 'text-2xl mb-4'}`}>
          {blog.title}
        </h3>
        <p className={`text-gray-500 leading-relaxed ${compact ? 'text-xs' : 'text-sm'}`}>
          {blog.desc}
        </p>
      </div>
    </Motion.div>
  )

  return (
    <section id="blogs" className="py-14 sm:py-18 lg:py-20 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div className="space-y-4">
            <Motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-gray-100 px-3 py-1 rounded-md"
            >
              <img src={aboutLogo} alt="blogs" className="w-4 h-4" />
              <span className="text-[12px] font-bold text-slate-700 uppercase tracking-tight">Our Blogs</span>
            </Motion.div>
            
            <Motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-6xl font-bold text-slate-900"
            >
              Read Our Recent Article
            </Motion.h2>
          </div>

          <Motion.a
            href="/articles"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={(event) => {
              event.preventDefault();
              navigate('/articles');
            }}
            className="bg-[#CFFE25] text-slate-900 px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-[#CFFE25]/20 self-start md:self-auto"
          >
            Browse All Article
          </Motion.a>
        </div>

        {/* --- Blogs Mobile Auto Scroll --- */}
        <div className="md:hidden overflow-hidden">
          <Motion.div
            className="flex w-max gap-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
          >
            {[...articles, ...articles].map((blog, index) => renderBlogCard(blog, index, true))}
          </Motion.div>
        </div>

        {/* --- Blogs Grid Desktop --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((blog, index) => renderBlogCard(blog, index, false))}
        </div>

      </div>
    </section>
  );
};

export default RecentArticles;