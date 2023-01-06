import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function About({ }: Props) {
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
            className='flex flex-col relative h-screen text-center md:text-left
                md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true // if I want to run while In view only once
                }}
                src="https://i.picsum.photos/id/855/200/300.jpg?hmac=2aBMcUWlYEynKymdtTjCpwCpl2v_ELuWkkmOeWbjqa0"
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis enim ullamcorper, semper nunc in, aliquam magna. Proin vel dui pulvinar, interdum mi non, mollis leo. Praesent elit nibh, semper gravida dolor nec, venenatis cursus lorem. Maecenas sed lorem vitae nisl mollis malesuada. Phasellus lacinia efficitur erat, eu commodo libero vestibulum sed. Mauris ac massa et nunc cursus consectetur eu in elit. Vivamus feugiat, elit sed consectetur gravida, nulla massa vehicula sem, eget rutrum nunc mauris a lacus. Nulla vestibulum nec leo vel pulvinar. Mauris eu posuere augue, eget imperdiet ex.
                </p>
            </div>

        </motion.div>
    )
}

export default About