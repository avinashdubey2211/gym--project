import React from 'react'
import Hearder from '../Hearder/Hearder'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'

const Hero = () => {
  const transition = {type:'spring',duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id ='home'>
      <div className="blur hero-blur"></div>

      <div className="left-h">

      <Hearder/>

      {/*  the best ad */}
      <div className="the-best-ad">
        <motion.div
         initial={{left: mobile? "178px": '238px'}}
         whileInView={{left: '8px'}}
         transition={{...transition, type: 'tween'}}

        ></motion.div>
        <span>The Best Fitness club in the  Town</span>
      </div>
          


          {/* hero heading  */}
          <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span></div>
                <div><span>Ideal body</span></div>
                <div >
                    <span>
                    In here we will help you to shape and build your 
                    ideal body and live up your life to fullest
                    </span>
                  </div>
          </div>
          
          
      {/* figures */}

      <div className="figures">
        <div>
        <span>+ 140</span>
        <span> expert coaches</span>
        </div>

        <div>
            <span>+ 978</span>
            <span> member joined</span>
            </div>

        <div>
            <span>+ 50</span>
            <span>fitness programs</span>
            </div>
      </div>

      {/* hero butttons */}

      <div className="hero-butttons">
        <buttons className="btn">Get Started</buttons>
        <buttons className="btn">Learn More</buttons>
      </div>
      </div>
      <div className="right-h">
         <buttton className="btn">Join Now</buttton>
             
             <motion.div 
             initial={{right: "-1rem"}}
             whileInView={{right: "4rem"}}
             transition={transition}
             className="heart-rate">
                <img src={Heart} alt=""/>
                <span>Heart Rate</span>
                <span>116 bpn</span>
             </motion.div>

             {/*    hero images */}
             <img src={hero_image} alt="" className="hero-image"/>
             <motion.img 
             initial={{right: "11rem"}}
             whileInView={{right: "20rem"}}
             transition={transition}

             src={hero_image_back} alt="" className="hero-image-back"/>
             {/* calories */}
             <motion.div
             initial={{right: "37rem"}}
             whileInView={{right: "28rem"}}
             transition={transition}
              className="calories">
                <img src={Calories} alt=""/>
                <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
               
             </motion.div>
      </div>
    </div>
  )
}

export default Hero