import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './Pages/Home'
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
        {isLoading ? <SiteLoader key="loader" /> : <Home key="home" />}
      </AnimatePresence>
    </div>
  )
}

export default App
