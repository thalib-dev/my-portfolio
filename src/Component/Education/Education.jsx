import React from 'react'
import EducationCard from './EducationCard'
import aec from '../Assests/tnc.jpg'

const Education = () => {
  return (
    <>
      <div id='education'
      className='dark:text-white  max-w-[1080px] mx-auto mt-20 mb-5'>
        <h2 className='text-4xl font-semibold mt-2 text-center'><i className="fa-solid fa-graduation-cap"></i> My <span className='text-[#86198f] '>Education</span></h2>
        <p className='sm:text-xl font-serif sm:tracking-wider mt-2 text-center'>Education is not the learning of Facts, <br /> but The Training of The Mind to Think</p>
        <div className='flex flex-wrap justify-center gap-4'>
            <EducationCard image={aec} degree={"Bachelor of Computer Application"} college={"The New College (TNC)"} year={"2022-2025 | Graduated"} link={"http://www.thenewcollege.edu.in/"}/>
        </div>
        
      </div>
    </>
  )
}

export default Education