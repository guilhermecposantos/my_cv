import React, { Dispatch, SetStateAction} from 'react'
import niaefeup3 from '../assets/niaefeup3.jpg';
import niaefeup4 from '../assets/niaefeup4.jpg';
import niaefeup5 from '../assets/niaefeup5.jpg';
import niaefeup6 from '../assets/niaefeup6.jpeg';
import niaefeup7 from '../assets/niaefeup7.jpeg';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';


const DRAG_BUFFER = 20;

const SPRING_OPTIONS = {
    type:"spring",
    mass: 3,
    stifness: 400,
    damping: 50,
}

type Props = {
    images: string[];
}


export const Carousel = (props : Props) => {

    const [dragging, setDragging] = React.useState(false);
    const [imgIndex, setImgIndex] = React.useState(0);
    const dragX = useMotionValue(0);
    const dragXProgress = useMotionValue(0);

    useMotionValueEvent(dragX, "change", (latest) => {
        if (typeof latest === 'number' && dragging){
            dragXProgress.set(latest)
        } else{
            dragXProgress.set(0);
        }
    })

    const onDragStart = () => {
        setDragging(true);
    }

    const onDragEnd = () => {
        setDragging(false);

        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < props.images.length - 1) {
            setImgIndex((prev) => prev + 1);
        }
        else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((prev) => prev - 1);
        }
    }


    return (
        <div className='relative overflow-hidden p-2 m-2'>
            <motion.div className='flex items-center cursor-grab active:cursor-grabbing'
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                animate={{ translateX: `-${imgIndex * 100}%`}}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                style={{
                    x: dragX,
                }}
                transition={
                    SPRING_OPTIONS
                }
            >
                <Images imgIndex={imgIndex} imgs={props.images}/>
            </motion.div>
            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={props.images}/>
        </div>
    )
}


const Images = ({imgIndex, imgs} : {imgIndex : number, imgs : string[]} ) => {
    return (
        <>
            {imgs.map((image, index) => {

                return (
                    <motion.div
                        key={index}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className='aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover'
                        animate={{
                            scale: imgIndex === index ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        >
                    </motion.div>
                )
            }

            )}
        </>
    )
}

const Dots = ({ imgIndex, setImgIndex, imgs}: { imgIndex: number; setImgIndex: Dispatch<SetStateAction<number>>; imgs : string[]}) => {
    return (
        <div
            className='mt-4 flex w-full justify-center gap-2'
        >
            {imgs.map((img, index) => {
                return <button
                    key={index}
                    onClick={() => setImgIndex(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${index === imgIndex ? "bg-neutral-50" : "bg-neutral-500"}`}
                />
            })}
        </div>
    )
}

const GradientEdges = () => {
    return <>
        <div
        className='pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] h-1/2 bg-gradient-to-r from-neutral-950/50 to-neutral-950/0'></div>
    </>
}