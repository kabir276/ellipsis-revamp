import Image from 'next/image';
import { footerelems, socialMedia } from '@/data';
import { GlareCard } from './ui/glarecard';
import { useRouter } from "next/navigation"
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-[#000] text-white p-8 rounded-lg">
      <div className="container mx-auto">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            width={200}
            height={200}
            className=" hidden md:block w-screen opacity-50 "
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left side */}
          <div className="mb-8 md:mb-0">
            <div onClick={() => { router.push("#Hero") }} className="cursor-pointer flex items-center mb-4">
              <GlareCard className="flex flex-col bg-[rgb(16,16,23)] cursor-pointer items-center justify-center">
                <Image src="/eliipselogo.png" alt="Logo" width={200} height={100} className="mr-2" />
              </GlareCard>
            </div>

          </div>

          <div className=" hidden md:flex flex-col md:flex-row space-y-8 -ml-32   md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>

              <div className='flex flex-col gap-2'>
                {footerelems.map((footerelem) => (
                  <div key={footerelem.id} className='flex'>
                    <Link href={footerelem.href} className={cn("flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 z-50 hover:border-foreground  ")}
                      target="_blank"><p className='truncate'> {footerelem.title}</p></Link>
                  </div>
                )
                )}

              </div>
            </div>
          </div>
        </div>
        <div className=' mt-8 pt-8  flex flex-col-reverse md:flex-row border-t  border-gray-700 md:justify-between'>
          <div className="mt-1 text-sm text-center">
            Copyright © {new Date().getFullYear()} Ellipsis AI Inc.
          </div>
          <div className="-mt-3 flex space-x-4 m-auto md:m-0">
            {
              socialMedia.map((info) => (
                <div
                  onClick={() => { window.open(`${info.Link}`) }}
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