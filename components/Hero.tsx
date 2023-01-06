import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from '../components/BackgroundCircles';
import Image from 'next/image'
import dp from '../public/dp.png';
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I am Himanshu Sharma",
            "Full-Stack Developer",
            "Machine Learning Enthusiast"],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <motion.div
                initial={{
                    y: 200,
                    scale: 1.5
                }}
                animate={{
                    y: 0,
                    scale: 1
                }}
                transition={{
                    duration: 2.5
                }}
                className='relative mx-auto w-56 h-56'>
                <Image alt='Profile Photo' src={dp} className='rounded-full mt-10'/>
            </motion.div>
            <div className='z-20'>
                {/* <h2 className='text-xl uppercase -mt-10 text-gray-500 pb-2 tracking-[15px]'>
                    Software Engineer
                </h2> */}
                <h1 className='text-2xl sm:text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    {/* <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link> */}
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero