
import { navItems } from "./navbarItems";
import Link from "next/link";
const Navbar = () => {

    return(
        <>
                <nav className="bg-transparent w-full flex ">
                      {navItems.map( (items, index) =>(
                        <Link href={items.url}>
                        < div className="text-secondary">
                        {items.title}          
                        </div>
                        </Link>
                      ))}  
                      <div>
                        <h2>Book a table</h2>
                        <h2> +234 8166578546</h2>
                      </div>
                </nav>
        </>
    )

};

export default Navbar;