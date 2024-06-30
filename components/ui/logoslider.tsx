import React from 'react';
import Image from 'next/image';

const ClientCarousel = () => {
    const logos = [
        { id: 1, src: '/abler.png', alt: 'Client 1' },
        { id: 2, src: '/axionray.png', alt: 'Client 2' },
        { id: 3, src: '/mosauic.png', alt: 'Client 3' },
        { id: 4, src: '/OmniAi.png', alt: 'Client 4' },
        { id: 5, src: '/OPTech.png', alt: 'Client 5' },
        { id: 6, src: '/promptlayer.png', alt: 'Client 6' },
        { id: 7, src: '/relari.png', alt: 'Client 7' },
        { id: 8, src: '/risotto.png', alt: 'Client 8' },
        { id: 9, src: '/Shepherd.png', alt: 'Client 9' },
        { id: 10, src: '/symphonyAi.png', alt: 'Client 10' },
        { id: 11, src: '/wegio.png', alt: 'Client 11' },



    ];

    return (
        <div className="w-full overflow-hidden bg-transparent">
            <div className="flex animate-carousel">
                {[...logos, ...logos].map((logo, index) => (
                    <div key={`${logo.id}-${index}`} className="flex-none w-[200px] mx-4">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={200}
                            height={100}
                            className="object-contain w-full h-full filter  grayscale"
                        />
                    </div>
                ))}
            </div>
            <style jsx global>{`
                @keyframes carousel {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-carousel {
                    animation: carousel 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default ClientCarousel;