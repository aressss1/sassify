import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator"

const Footer = () => {
    return (
            <div className="" >

                <div className="bg-[url('/gradient.png')] lg:px-20 md:px-14 px-4 lg:py-16 md:py-10 py-8 flex flex-col" >
                    {/* Banner */}
                    <div className="flex flex-col justify-center items-center md:p-10 md:gap-7 gap-4 " >
                        <div className="text-center text-white lg:text-6xl md:text-4xl text-2xl  font-extrabold inter lg:leading-[3.5rem] md:leading-10 leading-7 ">
                            We are here to help<br />you grow your business
                        </div>
                        <Button className='md:w-40 w-28  rounded-3xl bg-white hover:bg-white text-blue-800 hover:text-blue-800/75 font-semibold md:text-base text-xs' size='default' >
                            Get Started Now
                        </Button>
                    </div>
                </div>

                <Separator className=" text-white text-opacity-70" />

                {/* Footer */}
                <div className=" bg-[url('/gradient.png')] lg:px-20 md:px-14 px-4 lg:py-16 md:py-10 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-24 md:gap-16 gap-8 " >

                    <div className="flex flex-col lg:gap-4 gap-3 " >
                        <div className="text-white lg:text-xl md:text-base text-sm font-bold  ">
                            Sassify
                        </div>
                        <div className="lg:w-52 md:w-40 text-white  lg:text-base md:text-sm text-xs font-normal leading-normal  ">
                            Data visualization, and <br />expense management <br />for your business.
                        </div>
                    </div>

                    <div className='flex flex-col lg:gap-4 gap-3' >
                        <div className="text-white  lg:text-xl md:text-base text-sm font-bold  ">
                            Product
                        </div>
                        <div className="text-white flex flex-col gap-4  lg:text-base md:text-sm text-xs font-normal leading-normal  ">
                            <p>Digital Invoice </p>
                            <p>Insights </p>
                            <p>Reimbursements</p>
                            <p>Virtual Assistant </p>
                            <p>Artificial Intelligence </p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:gap-4 gap-3' >
                        <div className="text-white  lg:text-xl md:text-base text-sm font-bold  ">
                            Company
                        </div>
                        <div className="text-white flex flex-col gap-4  lg:text-base md:text-sm text-xs font-normal leading-normal  ">
                            <p>About Us </p>
                            <p>Newsletters </p>
                            <p> Our Partners</p>
                            <p>Career </p>
                            <p>Contact Us  </p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:gap-4 gap-3' >
                        <div className="text-white  lg:text-xl md:text-base text-sm font-bold  ">
                            Resources
                        </div>
                        <div className="text-white flex flex-col gap-4  lg:text-base md:text-sm text-xs font-normal leading-normal  ">
                            <p>Blog </p>
                            <p>Pricing  </p>
                            <p>FAQ </p>
                            <p>Events  </p>
                            <p>Ebook & Guide  </p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:gap-4 gap-3' >
                        <div className="text-white  lg:text-xl md:text-base text-sm font-bold  ">
                            Follow Us
                        </div>
                        <div className="text-white flex flex-col gap-4  lg:text-base md:text-sm text-xs font-normal leading-normal  ">
                            <p>LinkedIn </p>
                            <p>Twitter  </p>
                            <p>Instagram </p>
                            <p>Facebook  </p>
                            <p>YouTube   </p>
                        </div>
                    </div>


                </div>

                <Separator className=' text-white text-opacity-70 ' />
                <div className="p-3 text-center text-white  md:text-base text-xs  font-medium  ">
                    Copyright &copy; Sassify 2023. All Rights Reserved.
                </div>

            </div>
    );
}

export default Footer;