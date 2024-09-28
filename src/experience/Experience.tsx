import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import niaefeup from '../assets/NIAEFEUP1.jpg'
import skysigma from '../assets/SkySIGMA1.png'
import updigital from '../assets/UPDigital.png'
import ExperienceBlock from './ExperienceBlock'
import { motion } from 'framer-motion'
type Props = {}

const Experience = (props: Props) => {
    const arr = [updigital, niaefeup, skysigma]
    const { t } = useTranslation()
    const experience: any = t('experience')

    const experienceRef = useRef(null)

    return (
        <div className='flex m-4 p-8' ref={experienceRef}>
            <div className='m-8 border-b border-neutral-900 pb-4 w-screen'>
                <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Experience</motion.h1>
                <motion.div 
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 0.7 }}
                className='flex flex-col justify-center items-center'
                
                >
                    {Object.keys(experience).map((key, index) => {
                        const expItem = experience[key]
                        return (
                            <div key={key}>
                                <ExperienceBlock expItem={expItem} image={arr[index]} index={index} />
                            </div>

                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Experience
