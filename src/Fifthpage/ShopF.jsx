import React, { Component } from 'react'
import img from "../images/shop-banner-konvertiert.jpg"

export default class ShopF extends Component {
  render() {
    return (
     <>
        <div className='h-auto w-full bg-[#333333]'> 
            <div className='h-auto w-[85%] mx-auto py-5'>
                    <img src={img} alt="" srcset="" className='mx-auto' />
            </div>
         </div>
     </>
    )
  }
}
