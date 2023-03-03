import React from 'react'

import { useDispatch } from 'react-redux';
import Product from '../../pages/Product/Product';
const WishCard = ({product}) => {

  return (
    <div className='wish'>
        <div className='box'>
            <img src={product?.img} alt="" />
        <h3>{product?.title}</h3>

        </div>

       
    </div>
  )
}

export default WishCard