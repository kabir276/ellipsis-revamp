import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from './ui/hover-border';
import { SiGithub } from 'react-icons/si';

const ContentSection = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);

    const toggleCard = () => setIsCardOpen(!isCardOpen);

    return (
        <div id='Pricing' className="w-auto m-auto h-auto bg-[#15141dc7] p-12 rounded-3xl flex flex-col justify-center">
            {isCardOpen && (
                <motion.div 
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
                    <motion.div 
                        className='relative p-6 rounded-3xl bg-[rgb(19,23,30)] max-w-md w-auto m-4'
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        exit={{ scale: 0 }}
                    >
                        <button
                            onClick={toggleCard}
                            className="absolute top-2 right-4 text-white text-2xl hover:text-gray-300"
                        >
                            ×
                        </button>
                        <p className='text-3xl font-bold text-center text-white mb-4'>Unlimited Usage</p>
                        <p className='text-lg text-[#bbefff] font-bold mb-4'>$<span className='text-3xl'>20</span>/m</p>
                        <p className='text-xs text-[#f1f1f1] font-bold mb-4'>per developer per month</p>
                        <div className='flex justify-center'>
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
                            >
                                <div className="flex flex-row gap-2 m-auto px-8 ">
                                    <span>Start free trial</span>
                                    <span className="text-[24px] justify-center"><SiGithub /></span>
                                </div>
                            </HoverBorderGradient>
                        </div>
                        <hr className='text-[#c7c7c7] mt-4' />
                        <p className='text-xl text-[#e2e2e2] font-bold mb-4 mt-4'>Includes:</p>
                        <ul className="text-white space-y-4">
                            <li>✓ AI Code Reviews on every commit</li>
                            <li>✓ Pull request summaries</li>
                            <li>✓ Unlimited code generation</li>
                            <li>✓ Question & answer functionality</li>
                        </ul>
                    </motion.div>
                </motion.div>
            )}
            <span className='border border-[rgb(33,36,52)] h-auto w-auto p-2 px-6 rounded-[35px] text-xs text-[#d2fbff] font-bold m-auto'>PRICING</span>
            <h1 className='text-2xl sm:text-4xl text-center mt-6 font-extrabold '>Pay Per Seat</h1>
            <p className='mt-8 text-center'>Purchase a fixed number of seats every month. Assign those seats to </p>
            <p className='mt-1 text-center'>developers. Developers then get unlimited use of the product in all repositories.</p>
            <div className="border border-[rgb(33,36,52)] h-auto w-auto mt-10 p-2 px-6 rounded-[35px] text-xs text-[#77b4ce] font-bold m-auto">
                NO BRAINER OFFER
            </div>
            <motion.div
                onClick={() => setIsCardOpen(true)}
                className='cursor-pointer p-4 px-6 m-auto w-auto rounded-3xl h-auto bg-[rgb(19,23,30)]'
                whileHover={{ scale: 1.05 }} // Adds a slight scaling effect on hover
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
                <p className='text-3xl font-bold text-center'>Unlimited Usage</p>
                <p className='text-base text-[#bbefff] font-bold text-center'>
                    $<span className='text-3xl text-center'>20</span> <br />
                    Per Developer/Month
                </p>
                <p className='mt-2 text-center text-gray-300 text-lg'>
                    Add tons of Tailwind CSS UI, vibrant gradient text, and ultra-smooth animations to enhance user experience.
                </p>
            </motion.div>
        </div>
    );
};

export default ContentSection;
