import React, { Component } from 'react'
import img from "../images/Header_Gaming-Desks-below-150-EN-350x197.jpg"

export default class Special_cards extends Component {
  render() {
    return (
      <>
        <div className='h-auto w-[23%] py-2'>
            <img src={img} alt="" srcset="" />
            <h1 className='text-white text-[18px] font-medium '>
            Gaming Gear – The 5 best Gaming Keyboards
            </h1>
            <p className='text-gray-300 text-sm'>Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!</p>
        </div>  
     </>
    )
  }
}
