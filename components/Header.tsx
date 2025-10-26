import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';


type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 z-20 flex items-start justify-between p-3 sm:p-5 mx-auto max-w-7xl xl:items-center'>
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
                className='flex flex-row items-center gap-1 sm:gap-2'>

                <SocialIcon
                    url="https://www.linkedin.com/in/himashar/"
                    fgColor='gray'
                    bgColor='transparent'
                    className='hover:bg-gray-50 hover:rounded-md' />
                <SocialIcon
                    url="https://www.facebook.com/mynameishimanshusharma/"
                    fgColor='gray'
                    bgColor='transparent'
                    className='hover:bg-gray-50 hover:rounded-md' />
                <SocialIcon
                    url="https://www.instagram.com/himanshu.sharma2/"
                    fgColor='gray'
                    bgColor='transparent'
                    className='hover:bg-gray-50 hover:rounded-md' />
                <SocialIcon
                    url="https://twitter.com/himashar01"
                    fgColor='gray'
                    bgColor='transparent'
                    className='hover:bg-gray-50 hover:rounded-md' />
                <SocialIcon
                    url="https://github.com/zyfers"
                    fgColor='gray'
                    bgColor='transparent'
                    className='hover:bg-gray-50 hover:rounded-md' />
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
                    className='flex flex-row items-center p-2 sm:p-3 text-gray-300 cursor-pointer hover:bg-gray-50 hover:rounded-md hover:text-black'>
                    <EnvelopeIcon className='mr-2 text-gray-500 bg-transparent h-7 w-7' />
                    <p className='hidden text-sm text-gray-400 uppercase md:inline-flex hover:text-black'>
                        Contact
                    </p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header