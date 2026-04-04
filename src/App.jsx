import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ArticlesPage from './Pages/ArticlesPage'
import ArticleDetailPage from './Pages/ArticleDetailPage'
import SiteLoader from './Components/SiteLoader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SiteLoader key="loader" />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticleDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
