import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {}

function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:himanshusharma7296@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} (${formData.email}). ${formData.message}`
    }

    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center'>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-xl sm:text-2xl md:text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>Let&apos;s Connect! 🚀</span>
                </h4>
                <p className='text-base sm:text-lg md:text-xl text-gray-300 text-justify max-w-xl mx-auto px-4'>
                    Whether you want to talk code, AI, coffee, or cat memes, I&apos;m all ears! Drop me a message and let&apos;s make something awesome together. Prefer smoke signals or carrier pigeons? Email works too! ☕💬
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-full max-w-md mx-auto'>
                    <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#F7AB0A] py-3 sm:py-5 px-6 sm:px-10 rounded-md text-black font-bold text-base sm:text-lg w-full'>Submit</button>
                </form>

                <div className='flex flex-col gap-4 sm:gap-6 items-center justify-center w-full max-w-md mx-auto mt-8 sm:mt-20'>
                    {/* Phone */}
                    <div className="flex items-center gap-3 w-full px-6 sm:px-10 py-3 rounded-md bg-gradient-to-r from-[#F7AB0A]/20 to-[#232323]/60 shadow-lg hover:scale-105 transition-transform duration-200 border border-[#F7AB0A]/30">
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <span className='text-sm sm:text-base font-semibold text-white tracking-wide'>+1 (480) 702-8580</span>
                    </div>
                    {/* Address */}
                    <div className="hidden sm:flex items-center gap-3 w-full px-6 sm:px-10 py-3 rounded-md bg-gradient-to-r from-[#F7AB0A]/20 to-[#232323]/60 shadow-lg hover:scale-105 transition-transform duration-200 border border-[#F7AB0A]/30">
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <span className='text-sm sm:text-base font-semibold text-white tracking-wide'>New York, NY, United States</span>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-3 w-full min-w-0 px-6 sm:px-10 py-3 rounded-md bg-gradient-to-r from-[#F7AB0A]/20 to-[#232323]/60 shadow-lg hover:scale-105 transition-transform duration-200 border border-[#F7AB0A]/30">
                        <EnvelopeIcon className='flex-shrink-0 text-red-500 h-7 w-7 animate-pulse' />
                        <span className='text-xs sm:text-sm font-semibold text-white tracking-wide truncate'>himanshusharma7296@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact