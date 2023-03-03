import React, { useState } from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './Slider.scss'
import useFetch from '../../Hooks/useFetch';
import Searchbar from "../../Searchbar/Searchbar"
import { Link } from 'react-router-dom';
import { lazy, Suspense } from "react";
const Slider = ({ translateValue , setTranslateValue }) => {

  const transValue = setTranslateValue
  let type = "trending"
  const [curretnSlide,setCurrentSlide] = useState(0)

  
const data = [
  "/img/woman-2564660_960_720.jpg",
    "/img/pexels-andrea-piacquadio-3771835.jpg",
   
    "img/woman-1128523_960_720.jpg"
]

const prevSlide = () =>{
setCurrentSlide(curretnSlide === 0? 2 : (prev)=>prev-1)
}

const nxtSlide = () =>{
  setCurrentSlide(curretnSlide === 2? 0 : (prev)=>prev+1)

}


  return (
    <div className="bar">
      
    <div className='slider'>

    <div className="search" style={{ transform: `translateY(${-translateValue}px)` }}>

      <Searchbar transValue={transValue}/>
      </div>
    <div className="container" style={{transform :`translateX(-${curretnSlide *100/3}%)`}}>
      <div className="images">
      <img src={data[0]} alt=""  />
         <img src={data[1]} alt="" />
        <img src={data[2]} alt=""  />
      </div>
      <Link className='link' to="/products/1">
        <button className='btn'> Shop Now</button>
        </Link>
       
    </div>
    <div className="icons">
      <div className="icon" onClick={prevSlide}>
        <WestOutlinedIcon/>
      </div>
      <div className="icon"  onClick={nxtSlide} >
      <EastOutlinedIcon />
      </div>

    </div>
    </div>
    </div>
  )
}

export default Slider