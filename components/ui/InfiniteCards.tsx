import React, { useState, useRef, useEffect } from 'react';
import { testimonials } from '@/data';
import { Meteors } from './meteors';
import Image from "next/image";


const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = isPaused ? 'paused' : 'running';
    }
  }, [isPaused]);

  return (
    <div className="w-full overflow-hidden bg-transparent mt-14">
      <div
        ref={carouselRef}
        className="flex animate-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`} className={`flex-none px-4`} style={{ width: `480px` }}>
            <div className="relative mx-auto">
              <div className="absolute inset-0 h-full w-full ml-4 transform scale-[0.80] rounded-full blur-3xl" />
              <div
                className="relative shadow-xl bg-gray-900 border border-gray-800 px-8 py-8 overflow-hidden rounded-2xl flex flex-col justify-end items-start"
                style={{ height: `31d0px` }}
              >
                <div className=" mb-4 border-gray-500">
                  <Image
                    src={testimonial.image}
                    width={70}
                    height={70}
                    className="rounded-full "
                    alt="logo"
                  />
                </div>
                <p className="font-bold text-xl -mt-4 text-[#c3c3c3] mb-4 relative z-50">
                  {testimonial.name}
                </p>
                <p className="font-bold text-sm text-white mb-4 relative z-50">
                  {testimonial.title}
                </p>

                <p className="font-normal text-lg text-slate-500 mb-4 relative z-50 overflow-hidden" style={{ maxHeight: `{350 - 50 }px` }}>
                  {testimonial.quote}
                </p>
                <Meteors number={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
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

export default Testimonials;