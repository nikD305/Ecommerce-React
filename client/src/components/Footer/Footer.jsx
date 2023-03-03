import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
      <div className="item">
        <h1>Catagories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div className="item">
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className="item">
        <h1>About</h1>
        <span>
        Welcome to our e-commerce website! We are a company that prides ourselves on offering a wide variety of high-quality products at competitive prices.
        </span>
      </div>
      <div className="item">
        <h1>Contact</h1>
        <span>
        Thank you for visiting our e-commerce website. If you have any questions or concerns,


<br />
Thank you for choosing our website and we look forward to serving you!
        </span>
      </div>

      </div>

      <div className="bottom">
        <div className="left">
          <span className='logo'>TrendyShop</span>
          <span className="copyright">
          © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="img\cards.jpg" alt=""  height={50}/>
        </div>
      </div>

    </div>
  )
}

export default Footer