import React from 'react'
import { GiFruitBowl } from "react-icons/gi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';
const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Products',
        url: '#'
    },
    {
        id: 3,
        title: 'About',
        url: '#'
    },
    {
        id: 4,
        title: 'Shop',
        url: '#'
    },
    {
        id: 5,
        title: 'Contacts',
        url: '#'
    },

]
function Navbar() {
    const [ open , setOpen ] = React.useState(false);
  return (
    <>
        <nav>
            <motion.div 
                initial = {{ opacity: 0}}
                animate = {{ opacity: 1 }}
                transition={{ duration : 0.5, delay: 0.5 }}
                className="container flex justify-between items-center py-4 md:pt-4 "
            >
                {/* Logo Section */}
                <div className=' text-2xl flex items-center gap-2 font-bold uppercase '>
                    <p className=' text-primary'>Jim's</p>
                    <p className='text-secondary'>Fruits</p>
                    <GiFruitBowl className=' text-green-500 '/>
                </div>
                {/* Menu section */}
                <div className=' hidden md:block  '>
                    <ul className=' flex items-center gap-6 text-gray-600 '>
                        {NavbarMenu.map((menu) => (
                            <li key={menubar.id} >
                                <a href={menu.link}
                                className=' inline-block py-1 px-3 hover:text-primary 
                                hover:shadow-[0_3px_0_-1px_#ef4444]  font-semibold cursor-pointer'
                                >
                                    {menu.title}</a>
                            </li>
                        ))}
                        <button className=' text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 '>
                            <PiShoppingCartSimpleFill/>
                        </button>
                    </ul>
                </div>
                {/* Mobile Humberger Menu Section */}
                <div className=' md:hidden ' onClick={() => 
                    setOpen(!open)} 
                >
                    <IoMdMenu className=' text-4xl ' />
                </div>

            </motion.div>
        </nav>
        {/* Mobile menu Section */}
        <ResponsiveMenu open={open} />

    </>
  )
}

export default Navbar
