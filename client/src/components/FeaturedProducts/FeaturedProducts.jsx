import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../Hooks/useFetch'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { useAnimation} from "framer-motion";
import { Scale } from '@mui/icons-material';

const FeaturedProducts = ({type}) => {


 const {data ,loading , error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`) 

// const {insta , l , e} = useFetch(`/products?/`)


// console.log("data", insta)

 const { ref, inView } = useInView({
  //Threshold is done to adjust the delay of effect , after how much % of height its effect should be applied
 threshold:0.40
  
});
const [hasScrolledDown, setHasScrolledDown] = useState(false);
 const animation = useAnimation()



 //Scrolled Up or Down?
 useEffect(() => {
  let scrollBefore = 0;
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    if(scrollBefore > scrolled){
    
      scrollBefore = scrolled;
      setHasScrolledDown(false)
  }else{
      scrollBefore = scrolled;
      
      setHasScrolledDown(true)
  }
  };
  window.addEventListener('scroll', handleScroll);
}, []);


 useEffect(() => {
  
  // if(inView){
  //  animation.start({
  //   x:"0px",
  //   type:"spring",
  //          stiffness:"200",
  //          delay: 3 ,
  //          stiffness:"400",
  //        damping:125

  //  })
  // }
  // if(!inView){
  //   animation.start({x:"-500px"})
  // }
 
 },[inView])
 

  return (

    <div className="box">
    <div className='featuredProducts'>

      <div className="top">
        <h1>{type} Collections</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quia aperiam facilis vitae neque iste delectus nisi sequi porro atque exercitationem fuga quos illum voluptates, doloribus cum? Porro, est mollitia!
        </p>
      </div>
      <div  ref={ref}>
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
         spaceBetween={250}
         slidesPerView={5}
         navigation
       
        speed={100}
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
        >
          
      <div className="bottom" >
        
         { error
         ?"Something went wrong!"
         :loading
         ? "loading"  
        :  
         data?.map((item)=>
        
         <SwiperSlide> 
          <motion.div 
           
          animate={inView && hasScrolledDown ? { x:"0px"}  : { x:"-300px",delay:3}}
          transition={ inView && hasScrolledDown ?{ 
            type:'spring',
           
        stiffness:"80",
        delay:0
     
    } : {type:'tween',delay:2}}           

       whileHover={{scale:1.08}}
          >
               <Card item={item} key={item.id}  />
               
          </motion.div >
         </SwiperSlide> 
        )
         
        }
        {/* writing question mark beside data is very important while we are fetching data from db in backend */}
      </div>
    
        </Swiper>
        </div>
    </div>
    </div>
  )
}

export default FeaturedProducts