import Image from "next/image";
import { Button } from "./ui/button";

const Section2 = () => {
    const boardingPrcoess = [
        {
            id: 1,
            stepName: "Create Account",
            stepDescription: "After learning about your customer service needs, we will get you up"
        },
        {
            id: 2,
            stepName: "Install tracking code",
            stepDescription: "After learning about your customer service needs, we will get you up"
        },
        {
            id: 3,
            stepName: "Track analytics",
            stepDescription: "After learning about your customer service needs, we will get you up "
        },
    ]

    return (
        <div className="bg-[url('/gradient.png')] lg:px-20 md:px-14 px-4 lg:py-16 md:py-10 py-2 flex flex-col items-center " >
            <div className="flex justify-between" >
                <div className=" text-white text-5xl font-bold inter ">
                    Work smarter<br />with easy access for user..
                </div>
                <Button className='w-40  rounded-3xl bg-white text-blue-800 hover:text-blue-800/75 font-semibold md:text-base text-xs' size='default' >
                    Get Started Now
                </Button>
            </div>
            <div className="flex flex-row justify-between" >
                <div className="flex flex-col items-center justify-center gap-5" >
                    {boardingPrcoess.map((step) => (
                        <div key={step.id} className="flex items-start justify-center " >
                            <div className="w-24 h-24 bg-white rounded-full text-center " >
                                {step.id}
                            </div>
                            <div className="text-white text-2xl font-bold inter">
                                {step.stepName}
                            </div>
                            <div className=" opacity-80 text-white text-lg font-medium inter ">
                                {step.stepDescription}
                            </div>
                        </div >
                    ))}
                </div>
                <div>
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