import React from 'react'
import {useSelector} from "react-redux"

import WishCard from '../wishCard/WishCard';
import './Wishlist.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishlist} from '../../redux/cartReducer';
import {setWishlist} from '../../redux/cartReducer';
import { addToCart } from '../../redux/cartReducer';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Wishlist = () => {
    const wishlists = useSelector(state=>state.cart.wishlists)
    const data = useSelector(state=>state.cart.wishlists)
    console.log("wishcart",wishlists)
    // console.log("data",data[0].id)
    const dispatch = useDispatch()
    const handleAddToCartAndWishlist = (i) => {
      dispatch(
        addToWishlist({
          id: data[i].id,
          title: data[i].title,
          desc: data[i].desc,
          price: data[i].price,
          img: data[i].img,
          quantity: 1,
        })
      );
  
      dispatch(
        setWishlist({
          id: data[i].id,
          wish: false,
        })
      );
    };

const handleAddtoCart=(i)=>{
  
    dispatch(
      addToCart({
        id: data[i].id,
        title: data[i].title,
        desc: data[i].desc,
        price: data[i].price,
        img: data[i].img,
        quantity: 1,
        
      })
    )
  
}

  return (
    <div className='container'>
        <p className='text'>My Wishlist</p>
        {/* {
            wishlists.map(product=>
               <WishCard product={product}/> 
            )
        } */}
        
        {/* <WishCard/> */}



        <table>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Price</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {wishlists.map((item, index) => (
           
          <tr key={index}>
            <td>
            <Link className='link'  to={`/product/${item.id}`}>
              
              {<img src={item?.img} alt=""  style={{height:"100px",width:"100px"}}/>} {item?.title}
              </Link>
              </td>
            <td >
            <div className='price'>
              <CurrencyRupeeIcon/>  

            {item?.price}
            </div>
            </td>
            <td><p>In Stock</p></td>
            <td><button onClick={()=>handleAddtoCart(index)} >Add to cart </button> <DeleteIcon onClick={()=>handleAddToCartAndWishlist(index)}/></td>
          </tr>
          
        ))}
      </tbody>
    </table>

    </div>
  )
}

export default Wishlist