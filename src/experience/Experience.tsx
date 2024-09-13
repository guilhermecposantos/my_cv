import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useSpring } from 'framer-motion'
import niaefeup from '../assets/NIAEFEUP1.jpg'
import skysigma from '../assets/SkySIGMA1.png'
import updigital from '../assets/UPDigital.png'
import ExperienceBlock from './ExperienceBlock'
type Props = {}

const Experience = (props: Props) => {
    const arr = [updigital, niaefeup, skysigma]
    const { t } = useTranslation()
    const experience: any = t('experience')

    const experienceRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: experienceRef
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className='relative flex' ref={experienceRef}>
            <div className='m-8 border-b border-neutral-900 pb-4 w-full'>
                <h1 className='my-20 text-center text-4xl'>Experience</h1>
                <div>
                    {Object.keys(experience).map((key, index) => {
                        const expItem = experience[key]
                        return (
                            <div key={key}>
                                <ExperienceBlock expItem={expItem} image={arr[index]} index={index} />
                            </div>

                        )
                    })}
                </div>
                <motion.div
                    className="md:absolute lg:absolute lg:top-[215px] md:top-[215px] md:right-10 lg:right-[350px] md:h-full lg:h-full md:w-1 lg:w-1 lg:bg-white md:bg-white md:origin-top lg:origin-top"
                    style={{ scaleY }}
                />
            </div>
        </div>
    )
}

export default Experience
