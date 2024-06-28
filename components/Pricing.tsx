import React from 'react';

const ContentSection = () => {
    return (
        <div className="w-auto m-auto h-auto bg-[#15141dc7] p-12 rounded-3xl  flex flex-col justify-center align-middle">
            <span className='border border-[rgb(33,36,52)] h-auto w-auto p-2 px-6 rounded-[35px] text-xs text-[#d2fbff] font-bold m-auto align-middle'>PRICING</span>
            <h1 className='text-2xl sm:text-4xl text-center mt-6 font-extrabold '>ONLY PAY</h1>
            <h1 className='text-2xl sm:text-4xl text-center mt-6 font-extrabold '>FOR RESULTS.</h1>
            <p className='mt-8 text-center'>With our Pay Per Views model, you only pay based on the actual number of views your content receives.</p>
            <p className='mt-8 text-center'>With our Pay Per Views model, you only pay based on the actual number of views your content receives.</p>
            <div className="border border-[rgb(33,36,52)] h-auto w-auto mt-10 p-2 px-6 rounded-[35px] text-xs text-[#77b4ce] font-bold m-auto align-middle">
                REPURPOSING
            </div>
            <div className=' p-6 h-auto w-auto border-[2px] mt-10 rounded-[2rem] border-[rgb(33,36,52)] m-auto z-50'>
                <div className='p-4 px-6 m-auto w-auto rounded-3xl align-middle h-auto bg-[rgb(19,23,30)]'>
                    <p className='text-3xl font-bold text-center'>Growth Package</p>
                    <p className='text-lg text-[#bbefff] font-bold text-left'>$<span className='text-3xl'>20</span>/m</p>
                </div>
            </div>
            <div
                className="h-[15.2rem] w-[1.5px] mt-[24.6rem] ml-[37rem] -z-0 bg-[rgb(33,36,52)] overflow-hidden"
                style={{ position: "absolute" }}
            >
                <div className=" w-full h-full">
                    {/* Shiny element */}
                    <div
                        className=" w-4  h-52 bg-gradient-to-b from-transparent via-[#bbfff978] to-[#d1eeff1a]"
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
    );
};

export default ContentSection;
