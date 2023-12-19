import { Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="flex flex-col gap-20  lg:px-20 md:px-14 px-8 py-10 
        // bg-gradient-to-r from-blue-500 to-blue-800   
        " >
                <div className="bg-[url('/bg-image.png')] h-48" />
                <div className="flex flex-col items-center justify-center pt-20 md:gap-6  inter " >
                    <div className=" text-center text-white text-6xl font-extrabold capitalize lg:leading-[4.5rem]">
                        The fastest way for startups <br /> to do any analysis
                    </div>
                    <div className=" lg:px-56 opacity-80 text-center text-white text-xl font-medium leading-normal">
                        Equals is the only spreadsheet with built-in connections to any database, versioning, and collaboration.
                    </div>
                    <div className="flex bg-white lg:w-96 p-2 rounded-3xl " >
                        <div className="flex items-center pl-3" >
                            <Mail className="text-muted-foreground" />
                            <Input placeholder="Enter your email " className="focus:ring-0 " />
                        </div>
                        <Button className='rounded-3xl  bg-gradient-to-r from-blue-500 to-blue-800 hover:text-white/75  text-white font-semibold text-base' size='default' >
                            Start for free
                        </Button>
                    </div>
                </div>
                <div className="shadow-2xl " >
                    <Image
                        src="/hero-image-3.png"
                        alt="dasboard"
                        className="rounded-lg w-[75rem] "
                    />
                </div>
            </div>
    );
}

export default HeroSection;