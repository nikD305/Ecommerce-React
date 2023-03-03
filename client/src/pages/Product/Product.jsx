import React from 'react'
import { useState } from 'react'
import useFetch from '../../Hooks/useFetch';
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { addToWishlist} from '../../redux/cartReducer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useSelector} from "react-redux"
import {setWishlist} from '../../redux/cartReducer';
import { animate, motion } from "framer-motion"
import { useAnimation} from "framer-motion";
//How do we create link of every individual products? like product/1 ,product/2 etc... 
//How do we take and pass the data in this Product path??
//Everything explained in the notes



const Product = () => {

  //it will use useParam to see the iD beside the Product and fetch Data of that iD from Strapi db and display it.
const id =useParams().id;

  const [selectedImg , setSelectedImg] = useState("img")
  const [quantity , setQuantity] = useState(1)
 const [anime, setAnime] = useState(false)
  const dispatch = useDispatch()
  const wishIcon = useSelector(state=>state.cart.wishIcon)

  // console.log(wishIcon)
 
  const indexWish = wishIcon.findIndex((wish)=>wish.id==id)
  console.log("indexWish",indexWish)
const wishvalue = indexWish>=0?indexWish:0;
   const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

   const handleAddToCartAndWishlist = () => {
    dispatch(
      addToWishlist({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: process.env.REACT_APP_UPLOAD_URL +data.attributes.img.data.attributes.url,
        quantity: 1,
      })
    );

    dispatch(
      setWishlist({
        id: data.id,
        wish: false,
      })
    );
  };
 
  const handleAnimationone = () =>{
    
    setAnime(true)

    setTimeout(()=>{
      setSelectedImg("img")
      setAnime(false)
    },300)
  }
  const handleAnimationTwo = () =>{
  
    setAnime(true)

    setTimeout(()=>{
      setSelectedImg("img2")
      setAnime(false)
    },500)
  }


  return (
    <div className='product'>
    { loading? "loading "  :   <>
     <div className="left">
      <div className="images">
       
        <div className='next' style={{marginLeft:"50%", transform: `translateX(${"-50%"})` ,height:"40px",width:"40px"}} onClick={handleAnimationone}> <img className='nextbtn' src="https://cdn-icons-png.flaticon.com/512/339/339148.png" alt="" /></div>
        <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img?.data?.attributes?.url} alt=""  onClick={e=>setSelectedImg("img")}/>
        <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img2?.data?.attributes?.url} alt=""  onClick={e=>setSelectedImg("img2")}/>
        <div className='prev' style={{marginLeft:"50%", transform: `translateX(${"-50%"})` ,height:"40px",width:"40px"}} onClick={handleAnimationTwo}> <img className='prevbtn' src="https://cdn-icons-png.flaticon.com/512/339/339148.png" alt="" /></div>
      </div>
      <div className="mainImg">
        <motion.div 
        initial={anime?{ opacity: 0, x: 0,  }:{x:0}}
        animate={anime?{ opacity: 1, y: 1000 ,type:"spring"}:{x:0}}
        exit={anime?{ opacity: 0, y: 500 }:{x:0}} 
         className="fav" style={{ color: !wishIcon[wishvalue].wish? "gray" : "red"  }}

onClick={handleAddToCartAndWishlist}
        >

        <FavoriteIcon/>
        </motion.div>
        
        <motion.img  initial={anime?{ opacity: 0, x: 0,  }:{x:0}}
  animate={anime?{ opacity: 1, y: 1000 ,type:"spring"}:{x:0}}
  exit={anime?{ opacity: 0, y: 500 }:{x:0}} 
 
  src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
      </div>
     </div>
     <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'> <CurrencyRupeeIcon/> {data?.attributes?.price}</span>  
        <p> {data?.attributes?.decs}</p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev=== 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>

<button className='add' 
  onClick={()=>
    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: process.env.REACT_APP_UPLOAD_URL +data.attributes.img.data.attributes.url,
        quantity,
        
      })
    )
  }
>
        <AddShoppingCartIcon/> ADD TO CART
</button>

<div className="links">
<div className="item">
  <div className="add_to_wishlist"  style={{ color: !wishIcon[wishvalue].wish? "gray" : "red"  }}
   onClick={handleAddToCartAndWishlist}
  >

  <FavoriteBorderIcon /> ADD TO WISHLIST
  </div>
</div>
<div className="item">
  <BalanceIcon/> ADD TO COMPARE
</div>
</div>
<div className="info">
  <span>Vendor: Polo</span>
  <span>Product Type: T-Shirt</span>
  <span>Tag: T-Shirt, Women, Top</span>
</div>
<hr />
<div className="info">
  <span>DESCRIPTION</span>
  <hr />
  <span>ADDITIONAL INFORMATION</span>
  <hr />
  <span>FAQ</span>
</div>
     </div> </>}
    </div>
  )
}

export default Product