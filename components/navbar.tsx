import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar = () => {
    return (
        <div className="h-12 mx-20 flex items-center justify-between bg-gradient-to-br from-blue-500 to-purple-700 " >
            <div className="text-white text-lg font-semibold inter ">
                Saasify
            </div>
            <div className="hidden md:flex lg:gap-5 items-center text-white text-base font-normal inter  ">
                <p>Product</p>
                <p>Solution</p>
                <p>Customer</p>
                <p>Pricing</p>
                <p>About us</p>
            </div>
            <Button className='rounded-3xl bg-white text-black font-semibold text-lg' size='default' >
                Sign up
            </Button>
            {/* Responsive Navbar / Hambergur Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size='icon' className='md:hidden text-white' >
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
    );
}

export default Navbar;