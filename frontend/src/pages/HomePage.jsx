import React, { useState } from 'react'
import img1 from '../assets/ipvphysical.png'
import img2 from '../assets/1q80fy6d.png'


const HomePage = () => {
  return (
    <div>
        <h1 style={{textAlign:'center', fontSize: '25px'}}>Safe Haven</h1>
        <img src={img2} width={100} height={100} class="center" />
        <img src={img1} width={200} height={200} />
        
    </div>
  )
}

export default HomePage
