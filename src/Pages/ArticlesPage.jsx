import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarDays, ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react'
import { articles } from '../data/articles'

const Motion = motion

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const ArticlesPage = () => {
  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#f8faf7_0%,#ffffff_35%)] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[26px] sm:rounded-[34px] border border-[#dce7cd] bg-[#f2fadf] p-5 sm:p-8 mb-7 sm:mb-10"
        >
          <div className="absolute -top-16 -right-14 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(207,254,37,0.34),rgba(207,254,37,0))]" />
          <div className="absolute -bottom-16 -left-14 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(140,190,20,0.18),rgba(140,190,20,0))]" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/80 border border-[#e6efda] px-3 py-1 rounded-full text-[11px] font-bold text-slate-700 uppercase">
                <Sparkles size={12} /> Journal
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">All Articles</h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Explore practical insights on design, performance, and product development.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm font-bold text-slate-800 shadow-sm border border-[#ebf1e2]"
            >
              <ArrowLeft size={16} /> Back Home
            </Link>
          </div>
        </Motion.div>

        <Motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {articles.map((article) => (
            <Motion.article
              key={article.id}
              variants={item}
              className="group bg-[#F8F9FA] rounded-[24px] border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <Link to={`/articles/${article.id}`} className="block">
                <div className="overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 border border-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-700">
                    {article.readTime}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3 gap-3">
                    <span className="bg-white border border-gray-100 px-3 py-1 rounded-lg text-xs font-bold text-slate-800">
                      {article.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 font-medium whitespace-nowrap">
                      <CalendarDays size={12} /> {article.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-[#7ea70b] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.desc}</p>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:text-[#7ea70b] transition-colors">
                    Read details <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Motion.article>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default ArticlesPage
