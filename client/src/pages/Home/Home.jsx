import React from 'react'
import Contact from '../../components/Contact/Contact'
import Slider from '../../components/Slider/Slider'
import Search from '../../Searchbar/Searchbar'
import "./Home.scss"
import Video from '../../components/Video/Video'

import Fetchtry from '../../components/fetchtry/Fetchtry'
import { Suspense, lazy, startTransition } from 'react'

const FeaturedProducts = React.lazy(()=>import('../../components/FeaturedProducts/FeaturedProducts'))
const Catagories = React.lazy(()=>import('../../components/Catagories/Catagories'))

const Home = () => {
  return (
    <div className='home'>
      {/* <Fetchtry/>   Ex on fetching data from strapi */}

      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProducts type="Featured"/>
        
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
          <Catagories/>
        </Suspense>
      <Video/>

      <Suspense fallback={<div>Loading...</div>}>
      
          <FeaturedProducts type="Trending"/>
      
      </Suspense>

      <Contact/>
    </div>
  )
}

export default Home;
