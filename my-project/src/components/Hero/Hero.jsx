import React from 'react'
import { GiBeachBag } from "react-icons/gi";
import Heropng from "../../assets/Hero.png"
import leaf from "../../assets/leaf.png"
import { motion } from 'framer-motion';
import { FadeRight } from '../../Utility/animation';
const Hero = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ">
            {/* Brand Info */}
            <div className=' flex flex-col justify-center py-14 md:py-0 relative z-10  '>
                <div className=' text-center md:text-left space-y-6 lg:max-w-[450px] '>
                    <motion.h1 
                    variants={FadeRight(0.6)}
                    initial="hidden"
                    animate="visible"
                    
                    className='  text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose 
                        font-averia  '>
                            Healthy
                        <br />
                        Juicy<span className='text-secondary'> Fruit's!</span>
                    </motion.h1>
                    <motion.p 
                        variants={FadeRight(0.9)}
                        initial="hidden"
                        animate="visible"
                        className=' text-2xl tracking-wide'
                    >
                        Order Now for Juicy Healthy Delight
                    </motion.p>
                    <motion.p 
                        variants={FadeRight(1.2)}
                        initial="hidden"
                        animate="visible"
                        className=' text-gray-400 '
                    >
                        Delicious and nutritious fruits for a vibrant start to your day. 
                        Enjoy daily for a healthier lifestyle and sharper mind. Order now and save 20% on your first purchase!
                    </motion.p>

                    {/* button section  */}
                    <motion.div 
                        variants={FadeRight(1.5)}
                        initial="hidden"
                        animate="visible"
                        className=' justify-center md:justify-start '
                    >
                        <button className='primary-btn flex items-center gap-2 '>
                            <span> <GiBeachBag/> </span>
                            Order Now
                        </button>
                    </motion.div>
                </div>
            </div>
            {/* Hero images */}
            <div className=' flex justify-center items-center  '>
                <motion.img 
                    initial = {{ opacity: 0, x: 200, rotate: 75 }}
                    animate = {{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    src={Heropng} 
                    alt="Hero image"  
                    className=' w-[350px] md:w-[550px] drop-shadow '
                />
            </div>
            {/* Leaf image */}
            <div  className=' absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg] '>
                <motion.img 
                   initial = {{ opacity: 0, x: -200, rotate: 75 }}
                   animate = {{ opacity: 1, x: 0, rotate: 0 }}
                   transition={{ duration: 1, delay: 1.5 }}
                   src={leaf} 
                   alt="fruit" 
                   className=' w-full md:w-[300px]  '
                 />
            </div>
        </div>
      
    </section>
  )
}

export default Hero
