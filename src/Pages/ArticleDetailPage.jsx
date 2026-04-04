import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarDays, ArrowLeft, Clock3, UserRound, CheckCircle2, ArrowRight } from 'lucide-react'
import { articles } from '../data/articles'

const Motion = motion

const ArticleDetailPage = () => {
  const { id } = useParams()
  const article = articles.find((item) => String(item.id) === id)
  const related = articles.filter((item) => item.id !== article?.id).slice(0, 2)

  if (!article) {
    return <Navigate to="/articles" replace />
  }

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#f8faf7_0%,#ffffff_30%)] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 mb-6"
        >
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 bg-white border border-[#e8eedf] px-4 py-2.5 rounded-full text-sm font-bold text-slate-800"
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-500 bg-white border border-[#e8eedf] px-3 py-2 rounded-full">
            <CalendarDays size={14} /> {article.date}
          </span>
        </Motion.div>

        <Motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[26px] sm:rounded-[34px] border border-[#e4ecd6] bg-white"
        >
          <div className="relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[210px] sm:h-[280px] lg:h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="inline-flex bg-white/95 border border-white/70 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-slate-700 mb-2 sm:mb-3">
                {article.tag}
              </p>
              <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
                {article.title}
              </h1>
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-7 lg:gap-10">
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                  <span className="inline-flex items-center gap-2 bg-[#f5f8f0] border border-[#e4ecd6] px-3 py-1.5 rounded-full text-xs font-bold text-slate-700">
                    <Clock3 size={14} /> {article.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2 bg-[#f5f8f0] border border-[#e4ecd6] px-3 py-1.5 rounded-full text-xs font-bold text-slate-700">
                    <UserRound size={14} /> {article.author}
                  </span>
                  <span className="inline-flex items-center gap-2 bg-[#f5f8f0] border border-[#e4ecd6] px-3 py-1.5 rounded-full text-xs font-bold text-slate-700">
                    <CalendarDays size={14} /> {article.date}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">{article.overview}</p>

                <div className="space-y-4 mb-8">
                  {article.content.map((paragraph, index) => (
                    <Motion.p
                      key={index}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="text-[15px] sm:text-base text-gray-600 leading-relaxed"
                    >
                      {paragraph}
                    </Motion.p>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="rounded-2xl border border-[#e8efdc] bg-[#f8fbf2] p-4 sm:p-5">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Key Takeaways</h2>
                    <ul className="space-y-2.5">
                      {article.takeaways.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#7ea70b] mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-[#e8efdc] bg-[#f8fbf2] p-4 sm:p-5">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Quick Checklist</h2>
                    <ul className="space-y-2.5">
                      {article.checklist.map((item, index) => (
                        <li key={index} className="text-sm text-slate-700 leading-relaxed">
                          {index + 1}. {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <aside className="lg:sticky lg:top-6 h-fit">
                <div className="rounded-2xl border border-gray-100 bg-[#F8F9FA] p-4 sm:p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-3">About The Author</h3>
                  <p className="text-sm text-slate-700 font-semibold">{article.author}</p>
                  <p className="text-xs text-gray-500 mb-4">{article.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Focused on practical strategies that improve user experience and business outcomes for modern digital products.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </Motion.article>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/articles/${item.id}`}
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 hover:shadow-md transition-all"
              >
                <div className="min-w-0 pr-4">
                  <p className="text-[11px] font-bold uppercase text-gray-500 mb-1">{item.tag}</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#7ea70b] transition-colors line-clamp-2">
                    {item.title}
                  </p>
                </div>
                <ArrowRight size={18} className="text-slate-500 shrink-0 group-hover:text-[#7ea70b] transition-colors" />
              </Link>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default ArticleDetailPage
