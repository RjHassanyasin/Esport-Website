import React, { Component } from 'react'
import Fourcards from './Fourcards'
import IMG from "../images/Best-Gaming-Keyboards-350x197.jpg"

export default class Ten_sec extends Component {
  render() {
    return (
        <div className='h-auto  py-4 w-full bg-[rgb(51,51,51)]'>
        <div className='h-auto w-[85%] flex gap-5 py-5 mx-auto border-b-2 border-white'>
            <Fourcards />
            <div className=' w-[70%]'>
                <h1 className='text-yellow-500 pb-10 text-3xl font-medium tracking-[2px]'>CS:GO</h1>
                <img src={IMG} alt="" srcset="" className='h-[380px] w-[95%] ml-[5%]' />
                <h1 className='text-white text-3xl tracking-normal px-6 pt-5 font-bold'>Gaming Gear – The 5 best Gaming Keyboards</h1>
                <p className='text-gray-300 text-sm px-6 pt-2'>Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!</p>
            </div>
        </div>
    </div>
    )
  }
}
