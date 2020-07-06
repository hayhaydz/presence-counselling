import React from 'react'

import Layout from '../components/Layout/Layout'
import Landing from '../components/Landing/Landing'
import Blocks from '../components/Blocks/Blocks'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import Details from '../components/Details/Details'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Blocks />
      <About />
      <Testimonials />
      <Details />
      <Contact />
    </Layout>
  )
}
export default Home