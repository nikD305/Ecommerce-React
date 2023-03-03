import React from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { animate, motion, AnimatePresence } from "framer-motion"
import { useAnimation} from "framer-motion";


const Products = () => {
 

  //first we printed useParm and observed that it is in object inside iD so we did useParams.id to exactly target the number instead of Array or Object
 const catId = parseInt(useParams().id)

 const [maxPrice , setMaxPrice] = useState(1000)
 const [sort , setSort] = useState("asc")
 const [selectedSubCats ,setSelectedSubCats] = useState([])

 const [showProdCat ,setShowProdCat] = useState(false)
 const [showFPrice ,setShowFPrice] = useState(false)
 const [showSort ,setShowSort] = useState(false)

// Show's the Subcategories of Catagories with particular ID
// subcategory(of)>catagories(1.women 2.men)>of ID(their ID)
const {data ,loading ,error} = useFetch(`/subcategories?[filters][catagories][ID][$eq]=${catId}`)


 const handleChange = (e) =>{
  const value = e.target.value;
  const isChecked = e.target.checked;


  setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item=>item !== value))

 }
 useEffect(() => {
  window.scrollTo(0, 0);
}, []);


const handelSlideProd = () =>{
setShowProdCat(!showProdCat)
}
const handlePrice = ()=>{
setShowFPrice(!showFPrice)
}
const handleSort = ()=>{
setShowSort(!showSort)
}
console.log(showProdCat)
  return (
    <div className='products'>
      <div className="left">
        <p>Filters</p>
        <hr style={{width:"290px"}} />
        <div className="filterItem">
  <div className="pro">
    <h2 onClick={handelSlideProd}>
     Product Categories
    </h2> <p  onClick={handelSlideProd}>  {showProdCat ? "-" : "+"}</p>
  </div>
  <div className="ana">
    <AnimatePresence

     
    >
      {showProdCat && (
        <motion.div
          className="partOne"
          key="partOne"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
        >
          {data?.map((item) => (
            <motion.div
              className="inputItem"
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
            >
              <input
                type="checkbox"
                id="1"
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </motion.div>
          ))}
        </motion.div>
      )}
      {!showProdCat && (
        <motion.div
          className="partTwo"
          key="partTwo"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
        ></motion.div>
      )}
    </AnimatePresence>
  </div>
</div>

        <hr style={{width:"290px"}} />
        <div className="filterItem">
          <div className="pro">

         <h2  onClick={handlePrice}> Filter by price</h2> <p onClick={handlePrice}> {showFPrice? "-" : "+"}  </p>
          </div>
       
    
  
         {
          showFPrice? (<motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}>
          <span>0</span>
         <input type="range" min={0} max={1000}  onChange={(e)=>setMaxPrice(e.target.value)}/>
         <span>{maxPrice}</span>
          </motion.div>): (<div style={{transition:"0.8s"}}></div>)
         }
 
        </div>

        <hr style={{width:"290px"}} />
        <div className="filterItem">
          <div className="pro">

         <h2 onClick={handleSort}> Sort </h2> <p onClick={handleSort}> {showSort? "-" : "+"}</p>

          </div>

           {showSort?(<motion.div
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             exit={{ x: -20, opacity: 0 }}
           >
            <div className="inputItem">
          <input type="radio"  id='asc' value='asc' name='price' onChange={(e)=>setSort("asc")}/>
          <label htmlFor="asc">Price Low to High</label>
         </div>
         <div className="inputItem">
          <input type="radio"  id='desc' value='desc' name='price' onChange={(e)=>setSort("desc")}/>
          <label htmlFor="desc"> Price High to Low</label>
         </div>
           </motion.div>):("")}
        
        </div>
         <hr style={{width:"290px"}} />

      </div>
        <div className="right">
              {/* <img className='catImg' src="https://images.pexels.com/photos/936023/pexels-photo-936023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
    </div>
  )
}

export default Products