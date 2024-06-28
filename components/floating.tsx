import React from 'react';
import { ScrollParallax } from 'react-just-parallax';

interface FloatingCardProps {
    width?: number;
    height?: number;
}
const FloatingCard: React.FC<FloatingCardProps> = ({
}) => {
    return (
        <section >
            <ScrollParallax isAbsolutelyPositioned>
                <div className=" hidden md:block outer sm:mt-[15rem] -ml-16 -rotate-6" style={{ width: "230px", height: "180px" }}>
                    <div className="dot"></div>
                    <div className="card">
                        <div className="ray"></div>
                        <div className="text">25k</div>
                        <div>Views</div>
                        <div className="line topl"></div>
                        <div className="line leftl"></div>
                        <div className="line bottoml"></div>
                        <div className="line rightl"></div>
                    </div>
                </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
                <div className="hidden md:block outer rotate-6 ml-[68rem] -mt-[4rem]" style={{ width: "230px", height: "180px" }}>
                    <div className="dot"></div>
                    <div className="card">
                        <div className="ray"></div>
                        <div className="text">2K</div>
                        <div className='text-sm'>Commits reviewed daily</div>
                        <div className="line topl"></div>
                        <div className="line leftl"></div>
                        <div className="line bottoml"></div>
                        <div className="line rightl"></div>
                    </div>
                </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
                <div className="hidden md:block outer -rotate-1 ml-[70rem] mt-[20rem]" style={{ width: "230px", height: "180px" }}>
                    <div className="dot"></div>
                    <div className="card">
                        <div className="ray"></div>
                        <div className="text">13%</div>
                        <div className='text-sm'>Faster Time To merge</div>
                        <div className="line topl"></div>
                        <div className="line leftl"></div>
                        <div className="line bottoml"></div>
                        <div className="line rightl"></div>
                    </div>
                </div>
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
                <div className="hidden md:block outer sm:mt-[15rem] -ml-16 -rotate-6" style={{ width: "230px", height: "180px" }}>
                    <div className="dot"></div>
                    <div className="card">
                        <div className="ray"></div>
                        <div className="text">25k</div>
                        <div>CODEBASES ONLINE</div>
                        <div className="line topl"></div>
                        <div className="line leftl"></div>
                        <div className="line bottoml"></div>
                        <div className="line rightl"></div>
                    </div>
                </div>
            </ScrollParallax>
        </section >
    );
};

export default FloatingCard;