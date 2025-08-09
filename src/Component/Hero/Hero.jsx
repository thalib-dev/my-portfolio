import React from 'react'
import profile from '../Assests/dp_white.jpg'
import {useTypewriter,Typewriter,Cursor} from 'react-simple-typewriter'

const Hero = () => {
    const text=["DevOps Engineer","Site Reliability Engineer","Learner"];

  return (
    <>
        <div id='home'
        className='max-w-[1080px] mx-auto md:h-[80vh] dark:text-white  flex flex-wrap-reverse w-full items-center mt-20 justify-center lg:gap-5 md:gap-10 gap-16  lg:justify-between'  >
            {/* left */}
            <div className='lg:w-[60%] md:w-[50%] ' data-aos="fade-down">
                <h3 className='text-2xl dark:text-gray-300 text-gray-800 font-serif'>👋Hi, I'm Mohammed Thalib</h3>
                <h1 className='text-4xl mt-4 font-semibold'>A Professional <br />
                    <span className='text-blue-600'>
                        <Typewriter
                    words={text}
                    loop={Infinity}
                    typeSpeed={200}
                    deleteSpeed={100}
                    delaySpeed={1000}/>
                    </span>
                    <span className='text-green-500'><Cursor/></span>
                    </h1>
                <p className='mt-4 dark:text-gray-400 text-gray-700'>I'm a DevOps Engineer, and this is my portfolio.<br /> Here you'll learn about my journery as a DevOps Engineer.</p>
                <div className='flex gap-5 mt-5'>
                    <a 
                    href="mailto:md.thalib.dev@gmailcom"
                    className='bg-indigo-600 hover:bg-blue-600 cursor-pointer border-2 border-transparent px-4 text-white  py-1 rounded-md  '>Hire Me</a>
                    <a 
                    href='https://drive.google.com/file/d/1vAqNAllIW0nhiAdxrX8N27_Csd7YDBdL/view?usp=sharing'
                    className='border-2 px-4  py-1 rounded-md text-blue-500 font-semibold border-blue-600 hover:border-indigo-600 hover:text-indigo-400'>View Resume</a>
                </div>
            </div>

            {/* right */}
            <div className='lg:w-[33%] md:w-[40%] w-[60%] rounded-full shadow-2xl shadow-blue-500'
            data-aos="fade-left">
                <img src={profile} alt="" className='w-[100%] rounded-full dark:bg-black bg-gray-400 shadow-2xl dark:shadow-blue-500 shadow-black'/>
                
            </div>
        </div>
    </>
  )
}

export default Hero