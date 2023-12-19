import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

// bg-gradient-to-r from-blue-500 to-blue-800
const Navbar = () => {
    return (
        <div className="h-16 lg:px-20 md:px-14 px-4 flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-800 lg:bg-none " >
            <div className="text-white text-xl font-semibold inter ">
                Saasify
            </div>
            <div className="hidden md:flex gap-5 items-center text-white text-base font-light inter  ">
                <p>Product</p>
                <p>Solution</p>
                <p>Customer</p>
                <p>Pricing</p>
                <p>About us</p>
            </div>
            <div className='flex gap-2 items-center ' >
                <Button className='rounded-3xl bg-white hover:bg-white/80 text-black font-semibold text-base' size='default' >
                    Sign up
                </Button>
                {/* Responsive Navbar / Hambergur Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size='icon' className='md:hidden bg-transparent hover:bg-transparent text-white hover:text-white/75' >
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className='bg-gradient-to-r from-blue-500 to-blue-800' >
                        <div className="flex flex-col gap-14 items-center text-white text-base font-medium inter pt-14 ">
                            <p>Product</p>
                            <p>Solution</p>
                            <p>Customer</p>
                            <p>Pricing</p>
                            <p>About us</p>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navbar;