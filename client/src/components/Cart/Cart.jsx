import React from 'react'
import './Cart.scss'
import {useSelector} from "react-redux"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Navbar from '../Navbar/Navbar';
import { removeItem, resetCart } from '../../redux/cartReducer';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useDispatch } from 'react-redux';
const Cart = ({open,setOpen}) => {
   const products = useSelector(state=>state.cart.products)
  
   const dispatch = useDispatch()

const subtotal=()=>{
let total=0;
products.forEach(item=>total=total+(item.price*item.quantity))

return total.toFixed(2)
}


  return (

    
    <div className='cart' >
     
       <h1>Products in your cart</h1>
       {products?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">
                {item.quantity} x <CurrencyRupeeIcon/> {item.price}
                </div>
            </div>
            <DeleteOutlineIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>

        </div>
       ))}
<div className="total">
    <span> SUBTOTAL</span>
    <span><CurrencyRupeeIcon/> {subtotal()}</span>
</div>
<button>PROCEED TO CHECKOUT</button>
<span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>

    </div>
  )
}

export default Cart