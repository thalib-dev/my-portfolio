import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Education from '../Education/Education'
import Skill from '../Skills/Skill'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Home = () => {
  // animation
  useEffect(()=>{
    AOS.init({duration:1500})
},[])
  return (
    <>
        <Hero/>
        <About/>
        <Education/>
        <Skill/>
        <Project/>
        <Contact/>
    </>
  )
}

export default Home