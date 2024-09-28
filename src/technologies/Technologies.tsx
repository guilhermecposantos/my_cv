import { useState, useEffect } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaPython, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiCodeigniter, SiHaskell, SiJavascript, SiLaravel, SiNumpy, SiPhp, SiTailwindcss, SiTypescript, SiPandas, SiScikitlearn, SiCplusplus } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';

type Props = {};

const relatedTechnologies: { [key: string]: string[] } = {
  python: ['scikit-learn', 'pandas', 'numpy', 'django'],
  javascript: ['react', 'nodejs', 'nextjs', 'tailwindcss'],
  typescript: ['react', 'nodejs', 'nextjs', 'tailwindcss'],
  php: ['laravel', 'codeigniter'],
  cplusplus: [],
  haskell: [],
  react: ['nextjs', 'tailwindcss', 'nodejs', 'javascript', 'typescript'],
  nextjs: ['react', 'tailwindcss', 'nodejs', 'javascript', 'typescript'],
  django: ['python', 'postgres'],
  postgres: ['django', 'docker'],
  nodejs: ['react', 'nextjs', 'javascript', 'typescript'],
  docker: ['postgres', 'nodejs'],
  pandas: ['python'],
  'scikit-learn': ['python'],
  laravel: ['php'],
  codeigniter: ['php'],
  numpy: ['python'],
  tailwindcss: ['react', 'nextjs', 'javascript', 'typescript']
};

const techList = [
  'python', 'javascript', 'typescript', 'cplusplus', 'php', 'haskell',
  'react', 'nextjs', 'django', 'postgres', 'nodejs', 'docker',
  'pandas', 'scikit-learn', 'laravel', 'codeigniter', 'numpy', 'tailwindcss'
];

const Technologies = (props: Props) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % techList.length);
    }, 2000); // 2 seconds interval
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const handleMouseEnter = (tech: string) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const isRelated = (tech: string) => {
    const activeTech = techList[activeIndex];
    if (!hoveredTech) {
      // When no tech is hovered, animate the active tech and its related technologies
      return relatedTechnologies[activeTech]?.includes(tech) || activeTech === tech;
    }
    // If a tech is hovered, animate it and its related technologies
    return relatedTechnologies[hoveredTech]?.includes(tech) || hoveredTech === tech;
  };

  return (
    <div className='border-b border-neutral-800 pb-24 m-1'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {techList.map((tech, index) => (
          <motion.div
            key={tech}
            onMouseEnter={() => handleMouseEnter(tech)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            animate={isRelated(tech) ? { scale: 1.2, transition: { duration: 0.5 } } : { scale: 1 }}
            className='rounded-2xl border-4 border-neutral-800 p-4'
          >
            {getIcon(tech)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const getIcon = (tech: string) => {
  switch (tech) {
    case 'python': return <FaPython className='text-7xl text-[#ffde57]' />;
    case 'javascript': return <SiJavascript className='text-7xl text-[#f0db4f]' />;
    case 'typescript': return <SiTypescript className='text-7xl text-blue-500' />;
    case 'cplusplus': return <SiCplusplus className='text-7xl text-[#00599c]' />;
    case 'php': return <SiPhp className='text-7xl text-[#AEB2D5]' />;
    case 'haskell': return <SiHaskell className='text-7xl text-[#5e5086]' />;
    case 'react': return <RiReactjsLine className='text-7xl text-cyan-400' />;
    case 'nextjs': return <TbBrandNextjs className='text-7xl text-white' />;
    case 'django': return <DiDjango className='text-7xl text-green-400' />;
    case 'postgres': return <BiLogoPostgresql className='text-7xl text-[#0064a5]' />;
    case 'nodejs': return <FaNodeJs className='text-7xl text-[#3c873a]' />;
    case 'docker': return <FaDocker className='text-7xl text-[#0db7ed]' />;
    case 'pandas': return <SiPandas className='text-7xl text-[#150470]' />;
    case 'scikit-learn': return <SiScikitlearn className='text-7xl text-[#F7931E]' />;
    case 'laravel': return <SiLaravel className='text-7xl text-[#F05340]' />;
    case 'codeigniter': return <SiCodeigniter className='text-7xl text-[#DD4814]' />;
    case 'numpy': return <SiNumpy className='text-7xl text-[#4dabcf]' />;
    case 'tailwindcss': return <SiTailwindcss className='text-7xl text-[#a5f3fc]' />;
    default: return null;
  }
};

export default Technologies;
