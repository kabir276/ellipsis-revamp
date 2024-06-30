import Link from 'next/link';
import Image from 'next/image';
import { socialMedia } from '@/data';
import { GlareCard } from './ui/glarecard';

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
              <ul className="space-y-2">
                <li><a href="#Pricing" className="hover:text-gray-400  cursor-pointer">Pricing ↗</a></li>
                <li><a href="https://app.ellipsis.dev/" className=" hover:text-gray-400 cursor-pointer">Installation<span className="ml-1">↗</span></a></li>
                <li><a href="https://docs.ellipsis.dev/intro" className="hover:text-gray-400 cursor-pointer">Documentation <span className="ml-1">↗</span></a></li>
                <li><a href="https://status.ellipsis.dev/" className="hover:text-gray-400 cursor-pointer">Status <span className="ml-1">↗</span></a></li>
                <li ><a href="#Security" className="hover:text-gray-400 cursor-pointer">Security</a></li>
                <li ><a href="#Security" className="hover:text-gray-400 cursor-pointer">Terms & Conditions</a></li>
              </ul>
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