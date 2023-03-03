import React, { useEffect , useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import {useSelector} from "react-redux"
import Searchbar from "../../Searchbar/Searchbar"
// import Slider from '../Slider/Slider';
import { useLocation } from 'react-router-dom';
import { lazy, Suspense } from "react";
const Slider = lazy(() => import('../Slider/Slider'));
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [translateValue, setTranslateValue] = useState(600);
    const products = useSelector(state=>state.cart.products)
    const wishlists = useSelector(state=>state.cart.wishlists)
    console.log(wishlists)
    const [scrolled, setScrolled] = useState(false);
    const handleTranslateChange = (newValue) => {
        setTranslateValue(newValue);
      };

      //location trick
      const location = useLocation();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [location]);
  //location trick

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>
        <div className="navbar"  style={scrolled? {color:"#0074D9", backgroundColor:"white"}:{color:"black",}}>
            <div className="wrapper">

                <div className='left'>
                   
                    <div className="item">
                    <Link className="link" to="/"> TrendyStore</Link>
                    </div>
                   
                </div>
               
                <div className='center'>
                  
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className="link" to="/">HomePage</Link>
                    </div> 
                    <div className='item'>
                        <Link className="link" to="/">About</Link>
                    </div> 
                    <div className='item'>
                        <Link className="link" to="/">Contact</Link>
                   </div>
                    <div className="icons">
                        <SearchIcon className='searchIcon' onClick={() => handleTranslateChange(translateValue==600? 0 :600)}/>
                        <PersonOutlineOutlinedIcon />
                             <Link className='link' to="/wishlist/">
                        <div className="wishlist">
                        <FavoriteIcon/>
                        <span>{wishlists.length}</span>
                        </div>
                             </Link>
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>

                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
              {open && <Cart open={open} setOpen={setOpen}/>}   
        </div>


        {showComponent && (
          <Suspense fallback={<div>Loading...</div>}>

            <Slider translateValue={translateValue} setTranslateValue={setTranslateValue}/>
          </Suspense>
      )}

        </>
    )
}

export default Navbar