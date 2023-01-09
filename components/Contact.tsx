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
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-2xl sm:text-4xl font-semibold text-center'>
                    {" "}
                    <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
                </h4>

                <div className='space-y-8'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse' />
                        <p className='text-lg sm:text-2xl'>+1(480)702-8580</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse' />
                        <p className='text-lg sm:text-2xl'>Tempe, Arizona, United States</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse' />
                        <p className='text-lg sm:text-2xl'>himanshusharma7296@gmail.com</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='hidden sm:flex sm:flex-col sm:space-y-2 sm:w-fit sm:mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact