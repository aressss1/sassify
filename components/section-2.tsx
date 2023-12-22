import Image from "next/image";
import { Button } from "./ui/button";

const Section2 = () => {
    const boardingPrcoess = [
        {
            stepImageSrc: "/step-1.png",
            stepName: "Create Account",
            stepDescription: "After learning about your customer service needs, we will get you up"
        },
        {
            stepImageSrc: "/step-2.png",
            stepName: "Install tracking code",
            stepDescription: "After learning about your customer service needs, we will get you up"
        },
        {
            stepImageSrc: "/step-3.png",
            stepName: "Track analytics",
            stepDescription: "After learning about your customer service needs, we will get you up "
        },
    ]

    return (
        <div className="bg-[url('/gradient.png')] lg:px-20 md:px-14 px-4 lg:py-16 md:py-10 py-8 flex flex-col " >
            <div className="flex justify-between" >
                <div className=" text-white lg:text-5xl md:text-3xl text-2xl font-bold inter ">
                    Work smarter<br />with easy access for user.
                </div>
                <Button className='md:w-40 w-28  rounded-3xl bg-white hover:bg-white text-blue-800 hover:text-blue-800/75 font-semibold md:text-base text-xs' size='default' >
                    Get Started Now
                </Button>
            </div>
            <div className="flex md:flex-row flex-col-reverse justify-between md:pt-20 pt-16 gap-7 lg:gap-0" >
                <div className="flex flex-col items-center justify-center gap-5" >
                    {boardingPrcoess.map((step) => (
                        <div key={step.stepName} className="flex  justify-start gap-7  " >
                            <div className="self-center" >
                                <Image 
                                    src={step.stepImageSrc}
                                    alt="step"
                                    className="lg:h-16 md:h-[50px] h-10 w-[60px] md:w-auto"
                                />
                            </div>
                            <div className="flex flex-col justify-start lg:w-[25rem] md:w-72 " >
                                <div className="text-white lg:text-2xl text-xl font-bold inter">
                                    {step.stepName}
                                </div>
                                <div className=" opacity-80 text-white text-base text-sm font-medium inter ">
                                    {step.stepDescription}
                                </div>
                            </div>
                        </div >
                    ))}
                </div>
                <div className="flex items-center" >
                    <Image
                        src="/section-image-2.png"
                        alt="section-image"
                    />
                </div>
            </div>
        </div>
    );
}

export default Section2;