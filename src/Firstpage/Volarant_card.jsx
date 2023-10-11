import React, { Component } from 'react'
import img from "../images/Virtus-Pro-playing-under-outsiders-350x197.jpg"

export default class Volarant_card extends Component {
  render() {
    return (
        <>
        <div className='h-auto w-[23%] py-2'>
            <img src={img} alt="" srcset="" />
            <h1 className='text-white text-[18px] font-medium '>
            Team Liquid to replace FunPlus Phoenix at VCT Masters Reykjavik
            </h1>
            <p className='text-gray-300 text-sm'>What many people have feared turned into reality, as FunPlus Phoenix is unable to participate at VCT Masters Reykjavik due to the war in Ukraine.</p>
        </div>  
     </>
    )
  }
}
