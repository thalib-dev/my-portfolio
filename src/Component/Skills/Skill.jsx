import React from 'react'
import SkillCard from './SkillCard'
import c from '../Assests/logo/c.png'
import Java from '../Assests/logo/java.svg'
import python from '../Assests/logo/python.png'
import dsa from '../Assests/logo/dsa.jpg'
import git from '../Assests/logo/git.svg'
import github from '../Assests/logo/github.png'
import bash from '../Assests/logo/bash.svg'
import Terraform from '../Assests/logo/terraform.svg'
import Docker from '../Assests/logo/docker.svg'
import Kubernetes from '../Assests/logo/kubernetes.svg'
import Jenkins from '../Assests/logo/jenkins.svg'
import CI_CD from '../Assests/logo/ci_cd.svg'
import n8n from '../Assests/logo/n8n.svg'
import AWS from '../Assests/logo/aws.svg'
import Ubuntu from '../Assests/logo/ubuntu.png'
import mongodb from '../Assests/logo/mongodb.svg'


const Skill = () => {
  return (
    <>
      <div
      id='skill'
       className='dark:text-white max-w-[900px] mx-auto lg:px-10 overflow-hidden' >
        <h1 className='text-center text-4xl font-semibold underline underline-offset-4 mt-20'>Skills</h1>
        <h2 className='text-center  text-2xl opacity-70 mt-2'>My <span className='text-[#ee39ff] '>Technical Skills</span></h2>
        <div className='flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-4 mt-5 border-2 rounded-md dark:border-gray-600 py-6 lg:px-6 dark:bg-transparent bg-gray-100 shadow-2xl'
        data-aos="zoom-out">
          <SkillCard logo={c} name={"c"} />
          <SkillCard logo={Java} name={"Java"} />
          <SkillCard logo={python} name={"Python"} />
          <SkillCard logo={bash} name={"bash"} />
          <SkillCard logo={dsa} name={"Dsa"}/>
          <SkillCard logo={git} name={"git vcs"}/>
          <SkillCard logo={github} name={"github"}/>
          <SkillCard logo={Terraform} name={"Terraform"} />
          <SkillCard logo={Docker} name={"Docker"} />
          <SkillCard logo={Kubernetes} name={"Kubernetes"}/>
          <SkillCard logo={Jenkins} name={"Jenkins"}/>
          <SkillCard logo={CI_CD} name={"CI/CD"} />
          <SkillCard logo={AWS} name={"AWS"}/>
          <SkillCard logo={n8n} name={"agents"} />
          <SkillCard logo={Ubuntu} name={"Ubuntu"}/>
          <SkillCard logo={mongodb} name={"MongoDB"}/>
      </div>
      
        
        
      </div>
      
    </>
  )
}

export default Skill