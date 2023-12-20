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
        <div className="flex flex-col gap-24 lg:px-20 md:px-14 px-4 py-6 m " >
            <div className="text-center text-black text-5xl font-bold inter capitalize ">
                Our services made <br /> for you?
            </div>
            <div className="flex flex-row gap-4" >
                {servicesContent.map((service) => (
                    <Card key={service.title}  className="flex flex-col gap-4  p-3  shadow-xl " >
                    <CardHeader className="flex flex-col gap-3 items-center justify-center" >
                        <Image
                            src={service.imgSrc}
                            alt="service"
                        />
                        <div className="text-black text-2xl font-bold inter ">
                            {service.title}
                        </div>
                    </CardHeader>
                    <CardDescription className=" opacity-70 text-center text-black text-base font-medium inter ">
                            {service.description}
                    </CardDescription>
                    <CardFooter className="flex justify-center" >
                        <div className="flex flex-row gap-2 text-blue-800 text-base font-semibold inter ">
                            Read More
                            <MoveRight />
                        </div>
                    </CardFooter>
                </Card>
                ))}
            </div>
            
        </div>
     );
}
 
export default Services;