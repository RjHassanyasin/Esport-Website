import React, { Component } from 'react'
import img  from "../images/semmler-small2-330x197.png"

export default class Vid extends Component {
  render() {
    return (
        <>
        <div className='h-auto w-[23%] py-2'>
            <img src={img} alt="" srcset="" />
            <h1 className='text-white text-[18px] font-medium '>
            Gaming Gear – The 5 best gaming mice
            </h1>
            <p className='text-gray-300 text-sm'>Which SSDs are the most fitting for Gamers? Here are the Top 5 for every price range and specifications you require.</p>
        </div>
    </>
    )
  }
}
