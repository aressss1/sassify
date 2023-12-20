import Image from "next/image";
import { Button } from "./ui/button";

const Section1 = () => {
    return (
        <div className="bg-violet-50 flex md:flex-row flex-col-reverse items-center justify-around lg:px-20 md:px-14 px-4 lg:py-16 py-6" >
            <div className="flex flex-col md:w-[29rem] md:gap-7 gap-5 p-5" >
                <div className=" text-black lg:text-5xl md:text-3xl text-xl font-bold inter">
                    Powerful and easy to use SaaS platform
                </div>
                <div className=" opacity-80 text-black lg:text-lg md:text-base text-sm font-medium inter ">
                    Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.
                </div>
                <Button className='w-36  rounded-3xl  bg-gradient-to-r from-blue-500 to-blue-800 hover:text-white/75  text-white font-semibold md:text-base text-xs' size='default' >
                    Get Started
                </Button>
            </div>
            <div>
                <Image 
                    src="/section-image.png"
                    alt="section-image"
                />
            </div>
        </div>
    );
}

export default Section1;