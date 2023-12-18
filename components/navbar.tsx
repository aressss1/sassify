import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar = () => {
    return (
        <div className="h-16 px-20 flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-800 " >
            <div className="text-white text-xl font-semibold inter ">
                Saasify
            </div>
            <div className="hidden md:flex lg:gap-5 items-center text-white text-base font-normal inter  ">
                <p>Product</p>
                <p>Solution</p>
                <p>Customer</p>
                <p>Pricing</p>
                <p>About us</p>
            </div>
            <div>
                <Button className='rounded-3xl bg-white hover: bg-white/80 text-black font-semibold text-lg' size='default' >
                    Sign up
                </Button>
                {/* Responsive Navbar / Hambergur Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size='icon' className='md:hidden text-white hover:text-white/75' >
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <div className="flex flex-col gap-5 items-center text-white text-base font-normal inter  ">
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