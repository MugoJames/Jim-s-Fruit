import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram,FaTiktok} from "react-icons/fa"
import { GiFruitBowl } from "react-icons/gi";
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <footer className=' bg-primary/10 p-12 mt-12 ' >
        <motion.div 
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            transition={{ duration:1, delay:0.5 }}
            className=' container flex justify-between items-center '>
            {/* logo section */}
            <div className=' text-2xl flex items-center gap-2 font-bold uppercase '>
                <p className=' text-primary'>Jim's</p>
                <p className='text-secondary'>Fruits</p>
                <GiFruitBowl className=' text-green-500 '/>
            </div>            {
            /* social icons section */}
            <div className=' text-3xl flex items-center gap-4 mt-16 text-gray-700 '>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaTiktok />
            </div>

        </motion.div>
    </footer>
  )
}

export default Footer
