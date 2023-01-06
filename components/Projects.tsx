import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function Projects({ }: Props) {
    const projects = [
        {
            image: "/aigen.png",
            name: "AI Background Generator",
            summary: [
                "Developed a web app using Angular and Python to automatically remove background from an image and replace it with image generated by AI based on user provided text prompt"
            ]
        },
        {
            image: "/protrac.png",
            name: "ProTrac",
            summary: [
                "Developed a Project Management Software with focus on task management, scheduling, and record keeping for Slnko Energy using Angular, MongoDB, and Node.js and deployed it on AWS"
            ]
        },
        {
            image: "/dsm.png",
            name: "Daily Stock Metrics",
            summary: [
                "Developed a web application using Angular and Java responsible for showing the analysis of different stocks by caching the relevant stock data in Apache Ignite clusters, collected by scraping data from multiple websites"
            ]
        },
        {
            image: "/village.png",
            name: "Village Land Auction",
            summary: [
                "- Led a team of 3 to develop backend and multi-lingual, user-friendly UI of an Android app used to organize events, handle payments, and capture auction details, saving time and reducing the cost of conducting the auctions significantly",
                "- Designed and built a responsive website using React, Node.js, and MySql to help admin manage and visualize auction data"
            ]
        },
        {
            image: "/handwritting.jpg",
            name: "Automatic Personality Traits Detection using Handwriting",
            summary: [
                "- Created a deep learning CNN model using TensorFlow and Keras to detect the personality of a person with 76% accuracy using 800 handwriting samples of more than 200 individuals",
                "- Developed an Android application to scan handwriting samples and show predicted personality traits"
            ]
        },
        {
            image: "/cancer.png",
            name: "Cancer Prediction using XGBoost",
            summary: [
                "- Trained a machine learning model using Python with a real dataset of 1800 patients collected by Department of Biotechnology, TIET to predict lung cancer with 78% accuracy",
                "- Processed raw data using statistical methods to filter out unwanted data and used Python libraries to visualize and compare performance of different machine learning models. Also created a website to predict cancer using the trained model"
            ]
        }
    ];
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
                {projects.map((project, i) => (
                    <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col snap-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.5
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            className='hidden sm:block w-124 h-72 mb-10'
                            src={project.image}
                        />

                        <div suppressHydrationWarning={true} className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl sm:text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50'>{project.name}</h4>
                            <div className='text-sm sm:text-lg text-center md:text-left'>
                                <ul className='space-y-3'>
                                    {project.summary.map((detail: string, i : any) => (
                                        <li key={i} className='text-justify'>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}