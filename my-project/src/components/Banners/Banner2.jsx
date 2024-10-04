import React from 'react'
import Banner2 from "../../assets/Banner2.png"
import { motion } from 'framer-motion'
import { FadeUp } from '../../Utility/animation'
function Banners() {
  return (
    <section className=''>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24  ">
          
            {/* Brand Info */}
            <div className=' flex flex-col justify-center   '>
                <div className=' text-center md:text-left space-y-4 lg:max-w-[400px] '>
                    <motion.h1
                        variants={FadeUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=' text-3xl lg:text-6xl font-bold uppercase '>
                        {" "}
                        Online fruit store
                    </motion.h1>
                    <motion.p
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        At Jim's fruits, we're dedicated to delivering fresh, high-quality fruits directly to you. 
                        We partner with local farmers to ensure every piece is carefully selected for flavor and quality.
                        Enjoy a wide variety of fruits with the convenience of doorstep delivery. 
                        Your health and satisfaction are our priority.
                    </motion.p>
                    <motion.p
                        variants={FadeUp(0.9)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        We aim to make healthy eating easy and accessible for everyone. 
                        Whether you're stocking up for the week or looking for a special treat, 
                        our diverse fruit selection caters to all tastes and needs. With Jim's Fruits, 
                        freshness is guaranteed, and every order is delivered with care.
                    </motion.p>
                        {/* button section  */}
                        <motion.div 
                        variants={FadeUp(1.1)}
                        initial="hidden"
                        animate="visible"
                        className=' justify-center md:justify-start '
                    >
                        <button className='primary-btn'>Download App </button>
                    </motion.div>
                </div>
            </div>
            {/* Banners Image */}
            <div className=' flex justify-center items-center  '>
                <motion.img 
                    initial={{ opacity: 0, x: 200, rotate: 75 }}
                    whileInView={{ opacity: 1, x: 0,  rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    src={Banner2} 
                    alt="banner" 
                    className=' w-[500px] md:max-w-[500px] h-full object-cover drop-shadow-2xl  ' 
                />
            </div>
        </div>
    </section>
  )
}

export default Banners
