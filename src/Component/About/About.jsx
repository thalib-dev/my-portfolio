import React, { useEffect, useState } from 'react'
import Github from '../Stats/Github'
import LeetCode from '../Stats/Leetcode'

const About = () => {
  const [githubStats, setGithubStats] = useState({});
  const [leetcodeStats, setLeetcodeStats] = useState({
    solved: 680,
    easy: 233,
    medium: 390,
    hard: 57
  });

  useEffect(()=>{
    const fetctGithubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/thalib-dev');
        const data = await response.json();
        console.log(data);
        setGithubStats(data);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }

    }

    fetctGithubStats()
  },[])
  return (
    <>
      <div id="about" className="max-w-[1080px] mx-auto dark:text-white flex flex-col lg:flex-row items-center gap-8 mt-20 font-abc">
        <div data-aos="fade-left space-y-4">
          <h2 className="text-3xl font-semibold underline underline-offset-8 text-center">About <span className="text-[#86198f]">Me</span></h2>
          <ul className="mt-4 space-y-3 text-base md:text-lg leading-relaxed dark:text-gray-300">
            {[
              "Enthusiastic DevOps fresher with hands-on project experience deploying scalable apps using Docker, Jenkins, and Kubernetes on AWS. Passionate about automation, system monitoring, and building reliable cloud-native solutions. Seeking to start my career in a growth-driven DevOps/SRE team.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#d946ef]">•</span>
                <p className='text-sm sm:text-base'>{text}</p>
              </li>
            ))}
          </ul>


          <div className='grid sm:grid-cols-2 gap-4 mt-4'>
            <Github githubStats={githubStats} />
            <LeetCode leetcodeStats={leetcodeStats} />
          </div>
        </div>


      </div>
    </>
  )
}

export default About;
