import { SiGithub } from "react-icons/si"
import { HoverBorderGradient } from "./ui/hover-border"

const FreeTrial = () => {

    return (
        <div className="flex flex-col md:flex-row gap-5 md:gap-40 md:my-20">
            <div className="flex flex-row md:ml-24">
                <div className="flex">
                    <div className="border -z-0 bg-[#00cbf434]  border-[rgba(255,255,255,0.08)] h-[12rem] mt-[4rem] ml-5 w-[3rem] absolute">
                    </div>

                    <h1 className="text-[11rem] flex font-serif z-50 ">7</h1>
                </div>
                <div className="ml-2">
                    <h1 className="text-5xl mt-20 md:mt-28 ">Start your <br /> Day <span className="text-[hsl(202,50%,45%)]">Free</span> Trial</h1>
                    <p className="text-sm text-[#9c9c9c]">Free 7-day trial | No credit card required</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-8 md:mt-36  gap-5 md:gap-24 ">
                <div className=" md:-ml-24 m-auto md:m-0">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black m-auto bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer "

                    >

                        <div className="flex flex-row gap-2 m-auto">
                            <span>Start free trial</span>
                            <span className="text-[24px] justify-center"><SiGithub /></span>
                        </div>
                    </HoverBorderGradient>
                </div>
                <p className="text-base text-[#d8d8d8]">Installation takes 2 clicks. Uninstall at any time. <br />              We support GitLab, too.</p>

            </div>
        </div>

    )

}
export default FreeTrial