import Link from "next/link";
import { buttonVariants } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
    return <div className="fixed backdrop-blur-sm  z-50 top-0 left-0 right-0 h-20 border-b  shadow-sm flex items-center justify-between">
        <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
            <Link href='/' className={buttonVariants({ variant: 'link' })}>
                <span className="text-lg font-bold">HDP</span>
            </Link>
            
            <div>
                <ThemeToggle />
            </div>

        </div>
    </div>
}

export default NavBar;