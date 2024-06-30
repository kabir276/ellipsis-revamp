import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GitHub from './icons/githubIcon';
import Eliipselogo from './icons/elepsislogo';
import Prlogo from './icons/prlogo';
import Mergelogo from './icons/mergelogo';

const steps = [
    {
        title: "Connect",
        description: "Seamlessly integrate Ellipses with your GitHub repositories.",
        icon: <GitHub />,
    },
    {
        title: "Analyze",
        description: "AI scans your PRs, understanding context and code patterns.",
        icon: <Prlogo />,
    },
    {
        title: "Review",
        description: "Receive intelligent suggestions and catch potential issues early.",
        icon: <Eliipselogo />,
    },
    {
        title: "Improve",
        description: "Learn from AI insights and enhance your coding practices.",
        icon: <Mergelogo />,
    },
];

const HowItWorks: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState<number>(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.offsetHeight);
        }
    }, []);

    return (
        <div className="w-full bg-transparent py-20 relative overflow-hidden">
            <div className="absolute inset-0 " />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl font-extrabold text-white text-center mb-16">
                    How Ellipses Works
                </h2>
                <div className="relative" ref={containerRef}>
                    <div className="absolute md:top-[12%] md:left-1/2 left-[82%]   h-full">
                        <div
                            className=" m-auto -z-0 bg-[rgb(33,36,52)] overflow-hidden"
                            style={{ position: "absolute" }}
                        >
                            <div className=" w-[2px] md:h-[32rem] -mt-40">

                                <div
                                    className=" w-[2px]  h-[50rem] bg-gradient-to-b from-transparent via-[#bbfff978] to-[#d1eeff1a]"
                                    style={{
                                        animation: 'shineVertical 6s linear infinite',
                                    }}
                                />
                            </div>


                            <style jsx>{`
    @keyframes shineVertical {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
  `}</style>
                        </div>
                    </div>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="relative mb-16 last:mb-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="group flex items-center">
                                <div className="w-[75%] md:w-1/2 pr-8 text-right">
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-300">{step.description}</p>
                                </div>
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center z-10">
                                    {step.icon}
                                </div>
                                <div className="hidden sm:block w-1/2 pl-8">
                                    <div className="bg-gray-900 bg-opacity-50 backdrop-blur-xl rounded-xl p-4 ring-1 ring-gray-700/50 hover:ring-gray-500 transition duration-300">
                                        <p className="text-gray-400 text-sm">Additional info or features related to this step...</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;