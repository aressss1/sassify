import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { MoveRight } from 'lucide-react';

const Services = () => {
    return ( 
        <div className="flex flex-col gap-4 lg:px-20 md:px-14 px-4 py-6" >
            <div className="text-center text-black text-5xl font-bold inter capitalize tracking-tight">
                Our services made <br /> for you?
            </div>
            <Card>
                <CardHeader className="flex flex-col gap-3 items-center justify-center" >
                    <Image
                        src="/icons/i-1.png"
                        alt="i-1"
                    />
                    <div className="text-black text-2xl font-bold inter ">
                        Task Management
                    </div>
                </CardHeader>
                <CardDescription className=" opacity-70 text-center text-black text-base font-medium inter ">
                    The process of managing a task through its life cycle. It involves planning, testing, tracking.
                </CardDescription>
                <CardFooter>
                    <div className="flex flex-row gap-2 text-blue-800 text-base font-semibold inter ">
                        Read More
                        <MoveRight />
                    </div>
                </CardFooter>
            </Card>
        </div>
     );
}
 
export default Services;