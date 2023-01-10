import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    experienceData: any
}

function ExperienceCard({ experienceData }: Props) {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <article className='flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center
        snap-center bg-[#292929] p-5
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 min-[319px]:overflow-x-scroll sm:overflow-hidden'>
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
                className='w-14 h-14 sm:w-28 sm:h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-top'
                src={experienceData.imageUrl}
            />
            <div className='px-0 md:px-10'>
                <h4 className='max-[420px]:text-sm sm:text-xl font-light'>{experienceData.title}</h4>
                <p className='font-bold text-lg mt-1 max-[420px]:w-[280px]'>{experienceData.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experienceData.skills.map((skill: string, i: number) => (
                        <img
                            key={i}
                            className='h-8 w-8 rounded-full'
                            src={skill} />
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
                <div className=''>


                    <div>
                        <button
                            className="heroButton"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Show Details
                        </button>
                        {showModal ? (
                            <>
                                <motion.div
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={{
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 0.5
                                    }}
                                    className="m-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-gray-700"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex bg-[#292929] items-start justify-between pb-0 pt-2 pl-3 border-b border-solid border-[#F7AB0A] rounded-t">
                                                <h3 className="text-lg">
                                                    Summary
                                                </h3>
                                                <button
                                                    className="pr-5 ml-auto bg-transparent border-0 float-right text-2xl leading-none outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="text-white h-6 w-6 text-sm">
                                                        x
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-4 pr-2 bg-[#292929] flex-auto">
                                                <ul className='list-disc max-[420px]:w-full space-y-3 h-32 md:h-96 text-sm overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
                                                    {experienceData.summaryPoints.map((summary: string, i: number) => (
                                                        <li key={i}>{summary}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        ) : null}
                    </div>
                    {/* <ul className='hidden list-disc max-[420px]:w-full space-y-3 h-32 md:h-96 text-sm overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
                        {experienceData.summaryPoints.map((summary: string, i: number) => (
                            <li key={i}>{summary}</li>
                        ))}
                    </ul> */}
                </div>
            </div>
        </article>
    )
}

export default ExperienceCard