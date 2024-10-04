import React from 'react'
import BannerImg from "../../assets/banner-bg.jpg"
import { GiBeachBag } from "react-icons/gi";
import { motion } from 'framer-motion'
import { FadeLeft } from '../../Utility/animation'

const bgStyle ={
    backgroundImage : `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

const Banners3 = () => {
  return (
    <section className=' container mb-12 '>
    <div 
      style={bgStyle}
      className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl "
    >
        {/* blank div*/}
        <div></div>
   
        {/* Brand Info */}
        <div className=' flex flex-col justify-center   '>
            <div className=' text-center md:text-left space-y-4 lg:max-w-[400px] '>
                <motion.h1
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className=' text-3xl lg:text-6xl font-bold uppercase '>
                    {" "}
                    Get Fresh Fruits Today
                </motion.h1>
                <motion.p
                    variants={FadeLeft(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    At Jim's fruits, we're dedicated to delivering fresh, high-quality fruits directly to you. 
                    We partner with local farmers to ensure every piece is carefully selected for flavor and quality.
                    Enjoy a wide variety of fruits with the convenience of doorstep delivery. 
                    Your health and satisfaction are our priority.
                </motion.p>
             
                {/* button section  */}
                <motion.div 
                    variants={FadeLeft(0.9)}
                    initial="hidden"
                    animate="visible"
                    className=' justify-center md:justify-start '
                >
                    <button className='primary-btn flex items-center gap-2'>
                        <span> <GiBeachBag/> </span>
                        Order Now </button>
                </motion.div>
            </div>
        </div>
    </div>
</section>
    
  )
}

export default Banners3
