import { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaPython } from "react-icons/fa"
import { SiCodeigniter, SiHaskell, SiJavascript, SiLaravel, SiNumpy, SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiDjango} from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { motion } from 'framer-motion';


type Props = {}

const relatedTechnologies: { [key: string]: string[] } = {
    python: ['scikit-learn', 'pandas', 'numpy'],
    javascript: ['react', 'nodejs', 'nextjs', 'typescript', 'tailwindcss'],
    typescript: ['react', 'nodejs', 'nextjs', 'tailwindcss'],
    php: ['laravel', 'codeigniter']
};

const Technologies = (props: Props) => {

    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    const handleMouseEnter = (tech: string) => {
        setHoveredTech(tech);
    };

    const handleMouseLeave = () => {
        setHoveredTech(null);
    };

    const isRelated = (tech: string) => {
        if (!hoveredTech) return false;
        return relatedTechnologies[hoveredTech]?.includes(tech) || hoveredTech === tech;
    };

    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    onMouseEnter={() => handleMouseEnter('python')}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('python') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython className='text-7xl text-[#ffde57]' />
                </motion.div>
                <motion.div
                    onMouseEnter={() => handleMouseEnter('javascript')}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('javascript') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJavascript className='text-7xl text-[#f0db4f]' />
                </motion.div>
                <motion.div
                    onMouseEnter={() => handleMouseEnter('typescript')}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('typescript') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div
                    onMouseEnter={() => handleMouseEnter('cplusplus')}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('cplusplus') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCplusplus className='text-7xl text-[#00599c]' />
                </motion.div>
                <motion.div
                    onMouseEnter={() => handleMouseEnter('php')}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('php') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPhp className='text-7xl text-[#AEB2D5]' />
                </motion.div>
                <motion.div
                    onMouseEnter={() => handleMouseEnter('haskell')}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('haskell') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiHaskell className='text-7xl text-[#5e5086]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('react') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('nextjs') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs className='text-7xl text-white' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('django') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiDjango className='text-7xl text-cyan-400 text-green-400' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('postgres') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <BiLogoPostgresql className='text-7xl text-[#0064a5]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('nodejs') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-[#3c873a]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('docker') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaDocker className='text-7xl text-[#0db7ed]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('pandas') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPandas className='text-7xl text-[#150470]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('scikit-learn') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiScikitlearn className='text-7xl text-[#F7931E]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('laravel') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiLaravel className='text-7xl text-[#F05340]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('codeigniter') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCodeigniter className='text-7xl text-[#DD4814]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('numpy') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiNumpy className='text-7xl text-[#4dabcf]' />
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    animate={isRelated('tailwindcss') ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTailwindcss className='text-7xl text-[#a5f3fc]' />
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies