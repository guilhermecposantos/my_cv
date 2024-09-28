import React from 'react'
import { useTranslation } from 'react-i18next'
import project1image from '../assets/TSP-heuristics.png'
import project2image from '../assets/water-supply.png'
import project3image from '../assets/banck-churn.png'
import project4image from '../assets/Screenshot from 2024-09-27 14-10-43.png'
import { SiCplusplus, SiDoxygen, SiNumpy, SiPandas, SiScikitlearn } from 'react-icons/si'
import { FaPython, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {

    const { t } = useTranslation();
    const projects: any = t('projects')

    const projectImages = [
        project1image,
        project2image,
        project3image,
        project4image
    ]

    const projectGithubLinks = [
        'https://github.com/guilhermecposantos/TSP_Heuristics', 
        'https://github.com/guilhermecposantos/Water-Supply-System-Management',
        'https://github.com/guilhermecposantos/Banking-Customer-Churn-Prediction',
        'https://github.com/guilhermecposantos/Even-More-Pizza'
    ]

    const technologies = [
        <div className='flex flex-wrap gap-5'>
            <SiCplusplus className='text-7xl text-[#00599c]' />
            <SiDoxygen className='text-7xl'/>
        </div>,
        <div className='flex flex-wrap gap-5'>
            <SiCplusplus className='text-7xl text-[#00599c]' />
            <SiDoxygen className='text-7xl'/>
        </div>,
        <div className='flex flex-wrap gap-5'>
            <FaPython className='text-7xl text-[#ffde57]' />
            <SiScikitlearn className='text-7xl text-[#F7931E]' />
            <SiNumpy className='text-7xl text-[#4dabcf]' />
            <SiPandas className='text-7xl text-[#150458]' />
        </div>,
        <div className='flex flex-wrap gap-5'>
            <FaPython className='text-7xl text-[#ffde57]' />
            <SiPandas className='text-7xl text-[#150458]' />
        </div>
    ]

    return (
        <div className='pb-4 m-4'>
            <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='my-20 text-center text-4xl'>
                {t('projects.projects')}
            </motion.h1>
            <div>
                {Object.keys(projects).slice(1).map((key, index) => {
                    const project = projects[key]
                    return (
                        <div key={index} className='mb-10 p-4 flex flex-wrap lg:justify-center'>
                            <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4 relative'>
                                <motion.div
                                  className='group relative overflow-hidden rounded'
                                  initial={{ opacity: 1 }}
                                  whileHover={{ opacity: 1 }}
                                >
                                    <img 
                                      src={projectImages[index]} 
                                      alt={project.name} 
                                      width={250} 
                                      height={250} 
                                      className='transition-all duration-500 group-hover:brightness-50 m-4' 
                                    />
                                    {/* GitHub Link Icon */}
                                    <motion.a 
                                      href={projectGithubLinks[index]} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="absolute bottom-[-40px] left-[140px] flex justify-center items-center transform -translate-x-1/2 group-hover:bottom-4 transition-all duration-500"
                                    >
                                        <FaGithub className="text-white text-3xl" />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                            <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}

                            className='w-full max-w-xl lg:w-3/4 m-4'>
                                <h6 className='mb-2 font-semibold'>{project.name}</h6>
                                <p className='mb-4 text-neutral-400'>{project.description}</p>
                                {technologies[index]}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
