import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    experienceData: any
}

function ExperienceCard({ experienceData }: Props) {
  return (
    <article className='flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: 1.2
            }}
            className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-top'
            src={experienceData.imageUrl} 
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-xl font-light'>{experienceData.title}</h4>
            <p className='font-bold text-lg mt-1'>{experienceData.company}</p>
            <div className='flex space-x-2 my-2'>
                {experienceData.skills.map((skill: string, i: number) => (
                    <img
                    key={i}
                    className='h-8 w-8 rounded-full' 
                    src={skill}/>
                ))}
                 {/* <img
                    className='h-10 w-10 rounded-full' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"/>
                <img
                    className='h-10 w-10 rounded-full' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"/>
                <img
                    className='h-10 w-10 rounded-full' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"/>
                <img
                    className='h-10 w-10 rounded-full' 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"/>             */}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {experienceData.workDuration}
            </p>
            <div>
                <div className=''>
            <ul className='list-disc space-y-3 h-32 text-sm overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
                {experienceData.summaryPoints.map((summary: string, i: number) => (
                    <li key={i}>{summary}</li>
                ))}
            </ul>
            </div>
            </div>
        </div>
    </article>
  )
}

export default ExperienceCard