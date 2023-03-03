import React, { useEffect, useState } from 'react'
import "./Catagories.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Catagories = () => {

    const styles ={
        contan:{
            objectPosition: "0% 40%"
        }
    }

    const { ref, inView } = useInView({
        //Threshold is done to adjust the delay of effect , after how much % of height its effect should be applied
        threshold:0.50
        
      });
      const [hasScrolledDown, setHasScrolledDown] = useState(true);
    //   useEffect(() => {
    //     let scrollBefore = 0;
    //     const handleScroll = () => {
    //       const scrolled = window.pageYOffset;
    //       if(scrollBefore > scrolled){
          
    //         scrollBefore = scrolled;
    //         setHasScrolledDown(false)
    //     }else{
    //         scrollBefore = scrolled;
            
    //         setHasScrolledDown(true)
    //     }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //   }, []);
      console.log(inView)
    return (
        <div className='catagories'  ref={ref}>
            <div className="col">
                <motion.div className="row"
                 initial={inView && hasScrolledDown?{x:"0px"}:{x:"-1000px"}}
                 animate={inView && hasScrolledDown?{
                    x:"0px",
                   type:"spring",
                          stiffness:"200",
                         delay:5
           
               }:{
                X:"-1000px"
               }}  
                
                >
                    <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <motion.button
                        whileHover={{scale:1.2}}
                    >
                        <Link className='link' to="/products/1">Sale</Link>
                        </motion.button>
                </motion.div>
                <motion.div className="row"
                 initial={inView && hasScrolledDown?{x:"0px"}:{x:"-1000px"}}
                 animate={inView && hasScrolledDown?{
                    x:"0px",
                   type:"spring",
                          stiffness:"200",
                         delay:5
           
               }:{
                X:"0px"
               }}  
                
                >
                    <img src="https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <motion.button
                        whileHover={{scale:1.2}}
                    >
                        <Link className='link' to="/products/2">Women</Link>
                        </motion.button>
                </motion.div>
            </div>
            <div className="col">
                <motion.div className="row"
                 initial={inView && hasScrolledDown?{y:"0px"}:{y:"-50px"}}
                 animate={inView && hasScrolledDown?{
                    y:"0px",
                   type:"spring",
                          stiffness:"200",
                         delay:5
           
               }:{
                y:"-50px"
               }}  
                
                >
                {" "}
                    <img src="https://images.pexels.com/photos/1918445/pexels-photo-1918445.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <motion.button
                        whileHover={{scale:1.2}}
                    >
                        <Link className='link' to="/products/1">New Sale</Link>
                    </motion.button>
                </motion.div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <motion.div className="row"
                         initial={inView && hasScrolledDown?{y:"0px"}:{y:"-100px"}}
                         animate={inView && hasScrolledDown?{
                            y:"0px",
                           type:"spring",
                                  stiffness:"200",
                                 delay:5
                   
                       }:{
                        y:"-100px"
                       }}  
                        >
                            <img src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                            <motion.button
                        whileHover={{scale:1.2}}
                    >
                                <Link className='link' to="/products/2">Men</Link>
                                </motion.button>
                        </motion.div>
                    </div>
                    <div className="col">
                        <motion.div className="row"
                         initial={inView && hasScrolledDown?{x:"0px"}:{x:"500px"}}
                         animate={inView && hasScrolledDown?{
                            x:"0px",
                           type:"spring",
                                  stiffness:"200",
                                 delay:5
                   
                       }:{
                        x:"500px"
                       }}  
                        >
                        {" "}
                            <img src="https://images.pexels.com/photos/3363204/pexels-photo-3363204.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                            <motion.button
                        whileHover={{scale:1.2}}
                    >
                                <Link className='link' to="/products/1">Traditional</Link>
                                </motion.button>
                        </motion.div>
                    </div>
                </div>
                <motion.div className="row"
                
                initial={inView && hasScrolledDown?{x:"0px"}:{x:"500px"}}
                animate={inView && hasScrolledDown?{
                   x:"0px",
                  type:"spring",
                         stiffness:"500",
                        delay:8
          
              }:{
               x:"100px"
              }}  
                >
                    <img src="https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_960_720.jpg" style={styles.contan}  alt="" />

                    <motion.button
                        whileHover={{scale:1.2}}
                    >
                        <Link className='link' to="/products/1">Vintage</Link>
                    </motion.button>
                </motion.div>
            </div>

        </div>
    )
}

export default Catagories