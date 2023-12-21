import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";

const ReviewSection = () => {
    const reviewsContent = [
        {
            imgSrc: "/people/p-1.png",
            name: "Kartik Bansal",
            location: "Kota, Rajasthan",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna",
        },
        {
            imgSrc: "/people/p-2.png",
            name: "Anil Dvivedi",
            location: "New Delhi",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna",
        },
        {
            imgSrc: "/people/p-3.png",
            name: "Srijan Sirasikar",
            location: "Bhadrak",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna",
        },
        
    ]

    return ( 
        <div className="flex flex-col gap-16 lg:px-20 md:px-14 px-4  lg:py-20 md:py-6  " >
            <div className="text-center text-black lg:text-5xl md:text-4xl text-2xl font-bold inter capitalize ">
            What people are saying about us
            </div>
            <div className="flex lg:flex-row lg:gap-12 gap-4 overflow-y-auto px-5 no-scrollbar pb-10 " >
                {reviewsContent.map((review) => (
                    <div key={review.name} className="group" >
                    <Card className="flex flex-col gap-4 md:p-2  lg:p-3 p-2  shadow-xl  rounded-xl h-[275px] md:h-[302px] lg:h-auto group-hover:bg-blue-700" >
                    <CardHeader className="flex flex-col lg:gap-3 md:gap-0 items-start lg:p-6 md:p-4 p-2  " >
                        <Image
                            src="/star.png"
                            alt="rating"
                            className="lg:h-[18px] h-auto group-hover:text-white"
                        />
                    </CardHeader>
                    <CardDescription className=" w-[213px] md:w-[185px] lg:w-auto text-left text-black group-hover:text-white lg:text-base md:text-sm font-medium inter lg:px-6 md:px-4 px-2 ">
                            {review.review}
                    </CardDescription>
                    <CardFooter className="flex gap-2 justify-start lg:p-6 md:p-4 p-2" >
                        <Image 
                            src={review.imgSrc}
                            alt={review.name}
                        />
                        <div className="flex flex-col ">
                            <div className="text-black group-hover:text-white  md:text-base  text-sm font-bold inter">
                                {review.name}
                            </div>
                            <div className="opacity-70 text-black group-hover:text-white text-sm font-normal ">
                                {review.location}
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                </div>
                ))}
            </div>
            
        </div>
     );
}
 
export default ReviewSection;   