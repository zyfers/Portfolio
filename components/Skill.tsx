import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    skill: any;
}

export default function Skill({ skill }: Props) {
  return (
    <div className='relative flex group'>
        <motion.img
            initial={{
                y: skill.directionLeft ? -200 : -200,
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            src={skill.url}
            className='object-cover w-16 h-16 transition duration-300 ease-in-out bg-white border border-gray-500 rounded-full md:w-16 md:h-16 xl:w-24 xl:h-24 filter'
            alt={skill.alt}
            title={skill.alt}
        />
        {/* <div className='absolute z-0 w-16 h-16 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-16 md:h-16 xl:w-24 xl:h-24'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.proficiency}%</p>
            </div>
        </div> */}
    </div>
  )
}