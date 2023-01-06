import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';


type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>

                <SocialIcon
                    url="https://www.linkedin.com/in/himanshu-sharma-aa165a122/"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon
                    url="https://www.facebook.com/mynameishimanshusharma/"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon
                    url="https://www.instagram.com/himanshu.sharma2/"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon
                    url="https://twitter.com/himashar01"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon
                    url="https://github.com/zyfers"
                    fgColor='gray'
                    bgColor='transparent' />
            </motion.div>

            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className='flex flex-row items-center text-gray-300 cursor-pointer'>
                    <EnvelopeIcon className='bg-transparent text-gray-500 h-7 w-7 mr-2' />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                        Contact
                    </p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header