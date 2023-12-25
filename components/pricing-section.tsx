import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const PricingSection = () => {
    const pricingContentMonthly = [
        {
            id: 1,
            name: "Small Business",
            type: "Pro",
            price: "30",
            content: [
                "3 Social profile",
                "12 Team members",
                "5 Competitors per profile"
            ]
        },
        {
            id: 2,
            name: "Medium Business",
            type: "Popular",
            price: "60",
            content: [
                "3 Social profile",
                "12 Team members",
                "5 Competitors per profile",
                "Hashtag per profile"
            ]
        },
        {
            id: 3,
            name: "Enterprise",
            type: "Advance",
            price: "100",
            content: [
                "3 Social profile",
                "12 Team members",
                "5 Competitors per profile",
                "Hashtag per profile",
                "3 Social profile",
                "12 Team members",
            ]
        },
    ]

    const pricingContentAnnualy = [
        {
            name: "Small Business",
            type: "Pro",
            price: "288",
            content: [
                "3 Social profile",
                "12 Team members",
                "5 Competitors per profile"
            ]
        },
        {
            name: "Medium Business",
            type: "Popular",
            price: "576",
            content: [
                "3 Social profile",
                "12 Team members",
                "5 Competitors per profile",
                "Hashtag per profile"
            ]
        },
        {
            name: "Enterprise",
            type: "Advance",
            price: "960",
            content: [
                "3 Social profile",
                "12 Team members",
                "5 Competitors per profile",
                "Hashtag per profile",
                "3 Social profile",
                "12 Team members",
            ]
        },
    ]

    return (
        <div className="flex flex-col gap-16 lg:px-20 md:px-14 px-4  lg:py-20 md:py-6" >
            <div className="text-center text-black lg:text-5xl md:text-4xl text-2xl font-bold inter capitalize ">
                Get results first. Pick a plan later.
            </div>

            <Tabs defaultValue="monthly" className="flex flex-col items-center gap-9" >
                <TabsList>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="Annualy">Annualy</TabsTrigger>
                </TabsList>

                <TabsContent value="monthly" >
                    <div className="flex md:flex-row justify-center lg:gap-12 gap-4 px-5 pb-10 " >
                        {pricingContentMonthly.map((price) => (
                            <div key={price.name} className="group w-[328px] "  >
                                <Card className={` 
                                ${price.id === 2 ? "bg-[url('/gradient.png')]" : "bg-white"} 
                                flex flex-col gap-4 md:p-2  lg:p-3 p-2  shadow-2xl  rounded-xl h-[275px] md:h-[302px] lg:h-auto ` } >
                                    <CardHeader className="flex flex-col  lg:gap-2 md:gap-0 items-start lg:p-6 p-4" >
                                        <div className={` ${price.id === 2 ? "text-white" : "text-black"}  text-2xl font-bold inter `}>
                                            {price.type}
                                        </div>
                                        <div className={`
                                            ${price.id === 2 ? "text-white" : "text-blue-800"} 
                                            text-6xl font-bold inter leading-10 flex gap-1 `}>
                                            ${price.price}
                                            <div className={` 
                                                ${price.id === 2 ? "text-white" : "text-black"} 
                                                self-end opacity-60  text-base font-medium inter tracking-tight `}>
                                                /month
                                            </div>
                                        </div>
                                        <div className={
                                            `${price.id === 2 ? "text-white" : "text-black"} 
                                            text-base font-normal inter`}>
                                            For {price.name}
                                        </div>
                                    </CardHeader>
                                    <Separator />
                                    <CardDescription className={` 
                                        ${price.id === 2 ? "text-white" : "text-black"}
                                        w-[213px] md:w-[185px] lg:w-auto h-[240px] flex flex-col gap-3 text-left  lg:text-base md:text-sm font-normal inter lg:p-6 md:p-4 px-2 `}>
                                        {price.content.map((content) => (
                                            <div key={content} className="flex flex-row items-start gap-1 " >
                                                <CheckCircle2 />
                                                <p className={`
                                                ${price.id === 2 ? "text-white" : "text-black"}
                                                text-sm font-medium inter tracking-tight `} >
                                                    {content}
                                                </p>
                                            </div>
                                        ))}
                                    </CardDescription>
                                    <CardFooter className="flex gap-2 justify-center items-center lg:p-6 md:p-4 p-2" >
                                        <Button className={` 
                                        ${price.id === 2 ? "bg-white hover:bg-white text-blue-800  hover:text-blue-800/75 " : "bg-gradient-to-r from-blue-500 to-blue-800 hover:text-white/75  text-white"}
                                        w-36  rounded-3xl   font-semibold md:text-base text-xs `} size='default' >
                                            Get Started
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="Annualy" >
                    <div className="flex md:flex-row justify-center lg:gap-12 gap-4 px-5 pb-10 " >
                        {pricingContentAnnualy.map((price) => (
                            <div key={price.name} className="group w-[328px] "  >
                                <Card className="flex flex-col gap-4 md:p-2  lg:p-3 p-2  shadow-2xl  rounded-xl h-[275px] md:h-[302px] lg:h-auto " >
                                    <CardHeader className="flex flex-col  lg:gap-2 md:gap-0 items-start lg:p-6 p-4" >
                                        <div className=" text-black text-2xl font-bold inter">
                                            {price.type}
                                        </div>
                                        <div className="text-blue-800 text-6xl font-bold inter leading-10 flex gap-1 ">
                                            ${price.price}
                                            <div className="self-end opacity-60 text-black text-base font-medium inter tracking-tight">
                                                /annum
                                            </div>
                                        </div>
                                        <div className="text-black text-base font-normal inter">
                                            For {price.name}
                                        </div>
                                    </CardHeader>
                                    <Separator />
                                    <CardDescription className=" w-[213px] md:w-[185px] lg:w-auto h-[240px] flex flex-col gap-3 text-left text-black lg:text-base md:text-sm font-normal inter lg:p-6 md:p-4 px-2 ">
                                        {price.content.map((content) => (
                                            <div key={content} className="flex flex-row items-start gap-1 " >
                                                <CheckCircle2 />
                                                <p className="text-black text-sm font-medium inter tracking-tight" >
                                                    {content}
                                                </p>
                                            </div>
                                        ))}
                                    </CardDescription>
                                    <CardFooter className="flex gap-2 justify-center items-center lg:p-6 md:p-4 p-2" >
                                        <Button className='w-36  rounded-3xl  bg-gradient-to-r from-blue-500 to-blue-800 hover:text-white/75  text-white font-semibold md:text-base text-xs' size='default' >
                                            Get Started
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs >
        </div>

    );
}

export default PricingSection;   