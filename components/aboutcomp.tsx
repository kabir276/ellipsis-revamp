import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const CreativeSlideInElement = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`flex flex-col md:flex-row my-14 items-center transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 translate-y-0 rotate-0'
                : 'opacity-0 translate-y-20 rotate-3'
                }`}
        >
            <div className="w-1/2 transform transition-transform duration-1000 ease-out-back hover:scale-105 bg-[#49c0eb20] shadow-sm  shadow-[#758e95] md:p-8 z-10  rounded-3xl sm:my-28">
                <Image
                    src="/Github.png"
                    alt="Github"
                    width={400}
                    height={200}
                    layout="responsive"
                    className="rounded-2xl  shadow-xl"
                />
                <Image
                    src="/grid.svg"
                    alt="Description of image"
                    width={500}
                    height={650}
                    layout="responsive"
                    className="xl:-mt-52 xl:ml-[20rem] shadow-xl z-0  absolute"
                />
            </div>
            <div className="md:w-1/2 md:p-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-purple-800">Ellipsis help teams ship 13% faster? </h2>
                <p className="text-gray-700 text-center md:text-left  leading-relaxed">
                    Ellipsis catches bugs on PRs before code review <br />
                    Higher quality of code during peer review <br />
                    PR&apos;s get merged faster
                </p>
            </div>
        </div>
    );
};

export default CreativeSlideInElement;