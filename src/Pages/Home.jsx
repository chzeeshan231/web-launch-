import React from 'react'
import AgencyLanding from '../Components/AgencyLanding'
import AboutSection from '../Components/AboutSection'
import RecentProjects from '../Components/Projects'
import WorkingProcess from '../Components/Working'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonial'
import StartTalkCTA from '../Components/StartTalk'
import RecentArticles from '../Components/RecentArticles'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <AgencyLanding />
      <AboutSection />
      <Services />
      <RecentProjects />
      <WorkingProcess />
      <Testimonials />
      <StartTalkCTA />
      <RecentArticles />
      <Footer />
    </div>
  )
}

export default Home
