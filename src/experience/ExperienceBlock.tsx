import React, { useRef, useState } from 'react';
import { FaCircleNotch } from "react-icons/fa6";
import { MdExpandMore, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
    expItem: any,
    image: any,
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
                        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}                >
                        <motion.div
                            className='bg-white rounded-xl p-8 w-full max-w-4xl relative'
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

                            <h6 className='mb-2 font-bold text-2xl'>
                                {props.expItem.type} - <span className='text-lg text-green-300'>{props.expItem.name}</span>
                            </h6>
                            <p className='mb-4 text-neutral-600 text-lg'>
                                {props.expItem.description}
                            </p>
                            <p className='mb-4 text-md text-neutral-600'>
                                {props.expItem.startDate + ' - ' + props.expItem.endDate}
                            </p>
                            <div className="flex justify-center mb-8">
                                <img className="max-w-full h-auto" src={props.image} alt="Guilherme Santos" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExperienceBlock;
