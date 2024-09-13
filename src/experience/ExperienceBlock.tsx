import React, { useRef, useState } from 'react';
import { MdExpandMore, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from "react-player";
import { SiCodeigniter, SiJavascript, SiMysql, SiPhp } from 'react-icons/si';
import niaefeup2 from '../assets/niaefeup2.png';
import niaefeup3 from '../assets/niaefeup3.jpg';
import niaefeup4 from '../assets/niaefeup4.jpg';
import niaefeup5 from '../assets/niaefeup5.jpg';
import niaefeup6 from '../assets/niaefeup6.jpeg';
import niaefeup7 from '../assets/niaefeup7.jpeg';
import UPDigitalVideo from '../assets/UPDigitalVideo.mp4';
import { Carousel } from './Carousel';

type Props = {
    expItem: any,
    image: any,
    index: any,
    itemRef?: any
}

const ExperienceBlock = (props: Props) => {

    const blockRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleClose = () => {
        setIsExpanded(false);
    };

    return (
        <>
            <motion.div
                layout
                className='mb-8 flex flex-wrap lg:justify-center'
                ref={blockRef}
                initial={{ borderRadius: "16px" }}
            >
                <motion.div layout className='w-full lg:w-1/2'>
                    <motion.div layout className='flex items-center gap-10'>
                        <motion.div
                            layout
                            className='w-full max-w-xl border rounded-xl border-neutral-500 p-4 mb-8'
                            initial={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: isExpanded ? 0 : 1, scale: isExpanded ? 0.9 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h6 className='mb-2 font-bold'>
                                {props.expItem.type} - <span className='text-sm text-green-300'>{props.expItem.name}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>
                                {props.expItem.description}
                            </p>
                            <p className='mb-4 text-sm text-neutral-400 text-left'>
                                {props.expItem.startDate + ' - ' + props.expItem.endDate}
                            </p>
                            <div className="flex justify-center mb-8">
                                <img className="" src={props.image} alt="Guilherme Santos" />
                            </div>
                            <div className='flex justify-center'>
                                <motion.span
                                    whileHover={{ scale: 1.2 }}
                                    onClick={handleExpand}
                                >
                                    <MdExpandMore className='w-16 h-16' />
                                </motion.span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className='fixed w-max-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 m-4'
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}                >
                        <motion.div
                            className='bg-neutral-300 rounded-xl p-8 w-full max-w-4xl relative'
                            initial={{ opacity: 0, scale: 0.8, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 100 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            layoutId="expandableModal"
                        >
                            <button
                                onClick={handleClose}
                                className='absolute top-4 right-4 text-gray-600 hover:text-gray-900'
                            >
                                <MdClose className='w-8 h-8' />
                            </button>

                            <h6 className='mb-2 text-black text-2xl'>
                                {props.expItem.type} - <span className='text-lg text-black font-bold'>{props.expItem.name}</span>
                            </h6>
                            <p className='mb-4 text-black text-lg'>
                                {props.expItem.description}
                            </p>
                            <p className='mb-4 text-md text-neutral-600'>
                                {props.expItem.startDate + ' - ' + props.expItem.endDate}
                            </p>
                            {props.index === 2 && (
                                <div className='md:flex lg:flex'>
                                    <div className='w-[100%]'>
                                        <ReactPlayer
                                            width='100%'
                                            muted
                                            controls
                                            url={"https://www.youtube.com/watch?v=9bZqYLlIw6A"}
                                        />
                                    </div>
                                    <div className='gap-2 flex lg:flex-col md:flex-col justify-center m-2 p-4'>
                                        <div className='rounded-2xl bg-neutral-800 border-4 border-neutral-800 p-1 m-1 md:p-2 md:ml-2 lg:p-2 lg:ml-2'>
                                            <SiCodeigniter className='text-5xl text-[#DD4814]' />
                                        </div>
                                        <div className='rounded-2xl bg-neutral-800 border-4 border-neutral-800 p-1 m-1 md:p-2 md:ml-2 lg:p-2 lg:ml-2'>
                                            <SiMysql className='text-5xl text-[#00758f]' />
                                        </div>
                                        <div className='rounded-2xl bg-neutral-800 border-4 border-neutral-800 p-1 m-1 md:p-2 md:ml-2 lg:p-2 lg:ml-2'>
                                            <SiPhp className='text-5xl text-[#AEB2D5]' />
                                        </div>
                                        <div className='rounded-2xl bg-neutral-800 border-4 border-neutral-800 p-1 m-1 md:p-2 md:ml-2 lg:p-2 lg:ml-2'>
                                            <SiJavascript className='text-5xl text-[#f0db4f]' />
                                        </div>
                                    </div>
                                </div>)}
                            {props.index === 0 && (
                                <div className='md:flex lg:flex'>
                                    <video className='md:w-5/6 md:h-5/6 lg:w-5/6 lg:h-5/6'
                                        autoPlay loop muted src={UPDigitalVideo}
                                    />
                                    <div className='gap-2 flex lg:flex-col md:flex-col justify-center m-2 p-4'>
                                        <div className='rounded-2xl bg-neutral-800 border-4 border-neutral-800 p-1 m-1 md:p-2 md:ml-2 lg:p-2 lg:ml-2'>
                                            <SiCodeigniter className='text-5xl text-[#DD4814]' />
                                        </div>
                                        <div className='rounded-2xl bg-neutral-800 border-4 border-neutral-800 p-1 m-1 md:p-2 md:ml-2 lg:p-2 lg:ml-2'>
                                            <SiMysql className='text-5xl text-[#00758f]' />
                                        </div>
                                        <div className='rounded-2xl bg-neutral-800 border-4 border-neutral-800 p-1 m-1 md:p-2 md:ml-2 lg:p-2 lg:ml-2'>
                                            <SiPhp className='text-5xl text-[#AEB2D5]' />
                                        </div>
                                        <div className='rounded-2xl bg-neutral-800 border-4 border-neutral-800 p-1 m-1 md:p-2 md:ml-2 lg:p-2 lg:ml-2'>
                                            <SiJavascript className='text-5xl text-[#f0db4f]' />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {props.index === 1 && (
                                <Carousel />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExperienceBlock;
