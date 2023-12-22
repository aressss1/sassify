import { Button } from "./ui/button";

const Footer = () => {
    return (
        <div className="bg-[url('/gradient.png')] lg:px-20 md:px-14 px-4 lg:py-16 md:py-10 py-8 flex flex-col" >
            {/* Banner */}
            <div className="flex flex-col justify-center items-center p-10" >
                <div className="text-center text-white text-6xl font-extrabold inter leading-10">
                    We are here to help<br />you grow your business
                </div>
                <Button className='md:w-40 w-28  rounded-3xl bg-white hover:bg-white text-blue-800 hover:text-blue-800/75 font-semibold md:text-base text-xs' size='default' >
                    Get Started Now
                </Button>
            </div>


        </div>
    );
}

export default Footer;