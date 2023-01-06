import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {}

function Skills({}: Props) {

  const skills = [
    {
        url: "/java.jpg",
        directionLeft: true,
        proficiency: "90",
        alt: "Java"
    },
    {
        url: "/javascript.svg",
        directionLeft: true,
        proficiency: "80",
        alt: "JavaScript"
    },
    {
        url: "/typescript.svg",
        directionLeft: true,
        proficiency: "80",
        alt: "TypeScript"
    },
    {
        url: "/python.svg",
        directionLeft: true,
        proficiency: "65",
        alt: "Python"
    },
    {
        url: "/html.svg",
        directionLeft: true,
        proficiency: "90",
        alt: "HTML5"
    },
    {
        url: "/css.svg",
        directionLeft: true,
        proficiency: "70",
        alt: "CSS"
    },
    {
        url: "/tailwind.svg",
        directionLeft: true,
        proficiency: "90",
        alt: "Tailwind CSS"
    },
    {
        url: "/express.svg",
        directionLeft: true,
        proficiency: "80",
        alt: "ExpressJS"
    },
    {
        url: "/nodejs.svg",
        directionLeft: true,
        proficiency: "80",
        alt: "NodeJS"
    },
    {
        url: "/angular.svg",
        directionLeft: true,
        proficiency: "80",
        alt: "Angular"
    },
    {
        url: "/react.svg",
        directionLeft: true,
        proficiency: "70",
        alt: "React"
    },
    {
        url: "/flask.svg",
        directionLeft: true,
        proficiency: "80",
        alt: "Flask"
    },
    {
        url: "/mysql.svg",
        directionLeft: false,
        proficiency: "80",
        alt: "MySQL"
    },
    {
        url: "/mongo.jpg",
        directionLeft: false,
        proficiency: "80",
        alt: "MongoDB"
    },
    {
        url: "/ignite.png",
        directionLeft: false,
        proficiency: "50",
        alt: "Apache Ignite"
    },
    {
        url: "/aws.jpg",
        directionLeft: false,
        proficiency: "70",
        alt: "AWS"
    },
    {
        url: "/git.svg",
        directionLeft: false,
        proficiency: "95",
        alt: "Git"
    },
    {
        url: "/protobuf.png",
        directionLeft: false,
        proficiency: "65",
        alt: "Protobuf"
    },
    {
        url: "/grafana.svg",
        directionLeft: false,
        proficiency: "80",
        alt: "Grafana"
    },
    {
        url: "/azure.svg",
        directionLeft: false,
        proficiency: "70",
        alt: "Azure"
    },
    {
        url: "docker.svg",
        directionLeft: false,
        proficiency: "70",
        alt: "Docker"
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
        className='relative flex flex-col text-center md:text-left
        xl:flex-rpw max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current proficiency
        </h3> */}

        <div className='grid grid-cols-4 gap-5 xl:grid-cols-6'>
            {skills.map((skill, i) => (
                <Skill key={i} skill={skill}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills