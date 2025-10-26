import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    experienceData: any,
    showModal?: boolean,
    onClose?: () => void
};

function ExperienceCard({ experienceData, showModal = false, onClose }: Props) {
    return (
        <>
            {/* Card content (for timeline, not modal) */}
            {!showModal && (
                <article className='w-10/12 flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center snap-center bg-[#292929] pt-5'>
                    <motion.img
                        className='w-14 h-14 sm:w-28 sm:h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-top'
                        src={experienceData.imageUrl}
                    />
                    <div className='pl-3'>
                        <h4 className='max-[420px]:text-sm sm:text-xl font-light'>{experienceData.title}</h4>
                        <p className='font-bold text-lg mt-1 max-[420px]:w-[280px]'>{experienceData.company}</p>
                        <div className='flex my-2 space-x-2'>
                            {experienceData.skills.map((skill: string, i: number) => (
                                <img
                                    key={i}
                                    className='w-8 h-8 rounded-full'
                                    src={skill} />
                            ))}
                        </div>
                        <p className='py-5 text-gray-300 uppercase'>
                            {experienceData.workDuration}
                        </p>
                    </div>
                </article>
            )}

            {/* Modern Modal */}
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
                        onClick={onClose}
                    />
                    {/* Modal content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-lg mx-4 sm:mx-auto my-4 sm:my-8 rounded-2xl shadow-2xl bg-gradient-to-br from-[#232323] via-[#292929] to-[#232323] p-8 border border-[#F7AB0A]/30"
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-3xl text-gray-300 hover:text-[#F7AB0A] transition-colors font-bold focus:outline-none"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            <img
                                className="w-20 h-20 rounded-full object-cover border-4 border-[#F7AB0A] mb-4 shadow-lg"
                                src={experienceData.imageUrl}
                                alt={experienceData.company}
                            />
                            <h4 className="text-2xl font-semibold text-white mb-1 text-center">{experienceData.title}</h4>
                            <p className="text-lg font-bold text-[#F7AB0A] mb-2 text-center">{experienceData.company}</p>
                            <div className="flex gap-2 mb-2 flex-wrap justify-center">
                                {experienceData.skills.map((skill: string, i: number) => (
                                    <img
                                        key={i}
                                        className="w-8 h-8 rounded-full border border-gray-600"
                                        src={skill}
                                        alt="skill"
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-gray-400 mb-4 uppercase tracking-wider">{experienceData.workDuration}</span>
                            <div className="w-full max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-gray-700 bg-[#232323]/60 rounded-lg p-4">
                                <ul className="list-disc space-y-3 text-gray-200 text-sm pl-5">
                                    {experienceData.summaryPoints.map((summary: string, i: number) => (
                                        <li key={i}>{summary}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}

export default ExperienceCard;