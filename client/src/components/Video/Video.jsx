import React from 'react'
import './Video.scss'
import videoBg from '../assets/Video Fashion Ads. _ Passa Silkwear (1).mp4'
const Video = () => {
  return (
    <div className='video'>
 <video src={videoBg} autoPlay loop muted/>

    </div>
  )
}

export default Video