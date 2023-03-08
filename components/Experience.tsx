import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

function Experience({}: Props) {
  
  const experienceData = [
    {
        imageUrl: "/blackrock.png",
        title: "Software Development Engineer II",
        company: "BlackRock",
        skills: [
            "/java.jpg",
            "/angular.svg",
            "/spring.svg",
            "/grafana.svg",
            "/nosql.png"
        ],
        workDuration: "July 2019 - July 2022",
        summaryPoints: [
            "- Designed and implemented frontend and backend of a scalable application used for onboarding and viewing results of daily health checks of Aladdin applications running in different client environments, replacing the existing legacy system, and reducing the number of production failures significantly",
            "- Designed and implemented stat collector to fetch and aggregate test result data from Jenkins, Azure DevOps, Jira and ALM and visualize it on Grafana using Prometheus as data source",
            "- Developed an application for reinstating the state of the database after a refresh, reducing the manual efforts required by multiple teams significantly across BlackRock",
            "- Led the initiative to migrate VM infrastructure and more than 10 applications to Azure DevOps",
            "- Worked on a real-time email filtering application built using python, reducing the number of emails sent to wrong recipients by 40%",
        ]
    },
    {
        imageUrl: "/blackrock.png",
        title: "Software Developer Intern",
        company: "BlackRock",
        skills: [
            "/java.jpg",
            "/angular.svg",
            "/Selenium.png",
            "/ignite.png"
        ],
        workDuration: "January 2019 - July 2019",
        summaryPoints: [
            "- Developed an application using Java and Angular, providing guided workflows and downloadable templates for all the testing related solutions available for developers, which helped to increase the overall test coverage by 80%",
            "- Redesigned architecture of a common web portal, significantly reducing build time from 40 minutes to 10 minutes"
        ]
    },
    {
        imageUrl: "/csir.jpg",
        title: "Research Intern",
        company: "Council of Scientific and Industrial Research",
        skills: [
            "/arduino.svg",
            "/android.svg",

        ],
        workDuration: "June 2018 - July 2018",
        summaryPoints: [
            "- Worked on precision agriculture and developed prototypes for smart irrigation system",
            "- Developed an Android application using Java and Firebase to visualize sensor data and perform useful actions",
            "- Used data collected by sensors to predict the yield of crops using machine learning with 82% accuracy"
        ]
    }
  ]

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
        className='relative flex flex-col items-center h-screen max-w-full px-1 mx-auto overflow-hidden text-left md:flex-row justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
            Work Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-y-hidden overflow-x-scroll p-5 snap-x snap-mandatory
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]
            h-[calc(100%-400px)] mt-10'>
            {experienceData.map((experience, i) => (
                <ExperienceCard key={i} experienceData={experience}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Experience