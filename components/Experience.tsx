import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function Experience({ }: Props) {
    const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

    const experienceData = [
        {
            imageUrl: "/artdai_logo.png",
            title: "Senior Software Engineer",
            company: "ARTDAI",
            skills: [
                "/java.jpg",
                "/python.svg",
                "/react.svg",
                "/spring.svg",
                "/grafana.svg",
                "/mysql.svg",
                "/aws.jpg",
            ],
            workDuration: "January 2024 - Present",
            summaryPoints: [
                "Engineered and implemented a high-performance dynamic content management system using Java, reducing latency, and boosting data ingestion throughput through advanced caching and asynchronous processing",
                "Spearheaded the migration of a 50,000+ line Spring Boot application from Java 8 to the latest stable version, improving performance, reducing build times by 30%, and ensuring seamless integration and code compatibility",
                "Optimized CI/CD workflows and managed deployment processes, leveraging AWS services to improve scalability and ensure 99.9% uptime"
            ]
        },
        {
            imageUrl: "/artdai_logo.png",
            title: "Software Engineer Intern",
            company: "ARTDAI",
            skills: [
                "/java.jpg",
                "/python.svg",
                "/spring.svg",
                "/mysql.svg"
            ],
            workDuration: "May 2023 - August 2023",
            summaryPoints: [
                "Built a Java-based Investment Tracker, enabling users to create and manage portfolios, while improving performance trend analysis through detailed analytics",
                "Integrated Apache Lucene for search functionality, accelerating search speed and reducing response times by 40%, improving user experience and data accessibility across millions of records"
            ]
        },
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
                "Designed and implemented a scalable microservices-based application using Java and Angular, replacing a legacy system, reducing production failures by 35%, and enabling real-time health checks of Aladdin applications across client environments",
                "Engineered a multi-threaded stat collector in Java for real-time data fetching, cleaning, and aggregating data from various sources, leveraging Prometheus and Grafana for advanced analytics, and ensuring data integrity with Zookeeper",
                "Developed an automated tool to restore databases after updates, reapply configurations, and validate data integrity, increasing workflow efficiency and reducing manual effort across teams",
                "Designed and built an employee-centric dashboard aggregating actionable ESG metrics, enabling managers to leverage insights to improve the work environment, driving a 20% increase in employee engagement",
                "Worked on a real-time email filtering application built using python, reducing the number of emails sent to wrong recipients by 40%",
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
                "Developed an application using Java and Angular, providing guided workflows and downloadable templates for all the testing related solutions available for developers, which helped to increase the overall test coverage by 80%",
                "Revamped the architecture of a web portal, slashing build time from 40 minutes down to 10 minutes"
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
                "Designed and prototyped a smart irrigation system for precision agriculture, optimizing water usage by 30%, and developed an Android application to visualize sensor data and enhance real-time monitoring capabilities",
                "Leveraged machine learning on sensor data to achieve an 82% accuracy rate in crop yield predictions, empowering farmers with data-driven decision-making"
            ]
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex flex-col items-center min-h-screen max-w-4xl mx-auto px-2 py-20 pt-20 sm:pt-24 sm:py-24 snap-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-lg sm:text-2xl">
                Work Experience
            </h3>
            <div className="relative w-full mt-20">
                {/* Timeline vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#F7AB0A]/60 z-0 overflow-hidden" />
                <div className="flex flex-col gap-6 z-10">
                    {experienceData.map((experience, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative w-full flex justify-center sm:${i % 2 === 0 ? 'justify-start' : 'justify-end'} px-1 sm:px-2`}
                        >
                            <div className="w-full max-w-sm sm:max-w-md mx-auto sm:mx-0">
                                <div
                                    className="bg-[#202020] rounded-lg shadow-md p-2 sm:p-3 flex flex-col items-center min-h-[80px] sm:min-h-[120px] max-h-[120px] sm:max-h-[180px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_24px_6px_rgba(247,171,10,0.5)] w-full max-w-full cursor-pointer hover:scale-[1.025]"
                                    onClick={() => setOpenModalIndex(i)}
                                >
                                    {/* Timeline card content: basic details */}
                                    <div className="flex items-center gap-2 mb-1">
                                        <img src={experience.imageUrl} alt={experience.company} className="w-10 h-10 rounded-full object-cover border border-gray-700" />
                                        <div className="flex flex-col ml-2">
                                            <span className="text-sm font-semibold text-white leading-tight">{experience.title}</span>
                                            <span className="text-xs text-gray-400 font-medium">{experience.company}</span>
                                        </div>
                                    </div>
                                    {/* Skills row: hidden on small screens */}
                                    <div className="gap-1 sm:mb-1 flex-wrap justify-center w-full hidden sm:flex">
                                        {experience.skills.map((skill, idx) => (
                                            <img key={idx} src={skill} alt="skill" className="w-6 h-6 rounded-full border border-gray-600" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400 mb-1">{experience.workDuration}</span>
                                </div>
                                {/* Show Details Modal - render outside clickable card */}
                                {openModalIndex === i && (
                                    <ExperienceCard
                                        experienceData={experience}
                                        showModal={true}
                                        onClose={() => setOpenModalIndex(null)}
                                    />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;