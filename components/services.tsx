import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { MoveRight } from 'lucide-react';

const Services = () => {
    const servicesContent = [
        {
            imgSrc: "/icons/i-1.png",
            title: "Task Management",
            description: "The process of managing a task through its life cycle. It involves planning, testing, tracking."
        },
        {
            imgSrc: "/icons/i-2.png",
            title: "Design System",
            description: "The technology by which a process or procedure is performed with minimal human assistance."
        },
        {
            imgSrc: "/icons/i-3.png",
            title: "Best Practices",
            description: "Creating plan to spend your money, This spending planer is called a budgeting tool for business."
        },
    ]

    return ( 
        <div className="flex flex-col gap-16 lg:px-20 md:px-14 px-4  lg:py-20 md:py-6  " >
            <div className="text-center text-black lg:text-5xl md:text-4xl text-2xl font-bold inter capitalize leading-[3.5rem] ">
                Our services made <br /> for you?
            </div>
            <div className="flex lg:flex-row lg:gap-12 gap-4 overflow-y-auto px-5 no-scrollbar pb-10 " >
                {servicesContent.map((service) => (
                    <div key={service.title} className="group" >
                    <Card className="flex flex-col lg:gap-4 gap-3 md:p-2  lg:p-3 p-2  shadow-xl  rounded-xl h-[275px] md:h-[302px] lg:h-auto group-hover:bg-blue-700" >
                    <CardHeader className="flex flex-col lg:gap-3 md:gap-0 items-center justify-center lg:p-6 md:p-4 p-2  " >
                        <Image
                            src={service.imgSrc}
                            alt="service"
                            className="lg:h-[60px] h-[50px]"
                        />
                        <div className="text-black group-hover:text-white lg:text-2xl md:text-lg font-bold inter md:text-center ">
                            {service.title}
                        </div>
                    </CardHeader>
                    <CardDescription className=" w-[213px] md:w-[185px] lg:w-auto opacity-70 text-center text-black group-hover:text-white lg:text-base md:text-sm font-medium inter ">
                            {service.description}
                    </CardDescription>
                    <CardFooter className="flex justify-center lg:p-6 md:p-4 p-2" >
                        <div className="flex flex-row gap-2 text-blue-800 group-hover:text-white lg:text-base text-sm font-semibold inter ">
                            Read More
                            <MoveRight />
                        </div>
                    </CardFooter>
                </Card>
                </div>
                ))}
            </div>
            
        </div>
     );
}
 
export default Services;