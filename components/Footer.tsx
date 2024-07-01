import Link from 'next/link';
import Image from 'next/image';
import { socialMedia } from '@/data';
import { GlareCard } from './ui/glarecard';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white p-8 rounded-lg">
      <div className="container mx-auto">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            width={200}
            height={200}
            className="w-screen opacity-50 "
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left side */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <GlareCard className="flex flex-col bg-[rgb(16,16,23)] items-center justify-center">
                <Image src="/eliipselogo.png" alt="Logo" width={200} height={100} className="mr-2" />
              </GlareCard>
            </div>

          </div>

          <div className="flex flex-col md:flex-row space-y-8 -ml-32   md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>

              <div className='flex flex-col gap-2'>
                <span className="cursor-pointer z-50 mt-2 hover-underline">
                  <a href="#Pricing" className="">Pricing</a>
                </span>
                <span className="cursor-pointer z-50 mt-2 hover-underline">
                  <a href="https://app.ellipsis.dev/" className="">Installation<span className="ml-1">↗</span></a>
                </span>
                <span className="cursor-pointer z-50 mt-2 hover-underline">
                  <a href="https://docs.ellipsis.dev/intro" className="">Documentation <span className="ml-1">↗</span></a>
                </span>
                <span className="cursor-pointer z-50 mt-2 hover-underline">
                  <a href="https://status.ellipsis.dev/" className="">Status <span className="ml-1">↗</span></a>
                </span>
                <span className="cursor-pointer z-50 mt-2 hover-underline">
                  <a href="#Security" className="">Security</a>
                </span>
                <span className="cursor-pointer z-50 mt-2 hover-underline">
                  <a href="#Security" className="">Terms & Conditions</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=' mt-8 pt-8  flex flex-row border-t  border-gray-700 justify-between'>
          <div className=" text-sm text-center">
            Copyright © {new Date().getFullYear()} Ellipsis AI Inc.
          </div>
          <div className="-mt-2 flex space-x-4">
            {
              socialMedia.map((info) => (
                <div
                  key={info.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;