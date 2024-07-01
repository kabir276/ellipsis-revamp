"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';


const LoomVideoFrame = () => {
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef<HTMLIFrameElement | null>(null);
    const videoLink = "https://www.loom.com/share/3c03d542f5d04df19946c770f8db3661?sid=68a46ea2-2197-4ac8-8136-43f5cd73e31b"
    const embedUrl = `https://www.loom.com/embed/3c03d542f5d04df19946c770f8db3661?sid=68a46ea2-2197-4ac8-8136-43f5cd73e31b&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;

    useEffect(() => {
        if (isHovering && videoRef.current && videoRef.current.contentWindow) {
            videoRef.current.contentWindow.postMessage('play', '*');
        } else if (!isHovering && videoRef.current && videoRef.current.contentWindow) {
            videoRef.current.contentWindow.postMessage('pause', '*');
        }
    }, [isHovering]);

    const handleClick = () => {
        window.open(videoLink, '_blank');
    };

    return (
        <motion.div
            className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg md:mt-24"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <iframe
                ref={videoRef}
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
            ></iframe>
            {!isHovering && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <svg
                        className="w-16 h-16 text-white opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
            )}
        </motion.div>
    );
};

export default LoomVideoFrame;