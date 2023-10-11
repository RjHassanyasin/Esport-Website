import React, { Component } from 'react'
import image from "../images/Arlington-Major-announced-350x197.jpg"
import Seven_sec from './Seven_sec'

export default class E_sec extends Component {
  render() {
    return (
      <>
        <div className='h-auto w-full bg-[#333333]'>
          <div className='h-auto w-[85%] mx-auto '>
            <h1 className='text-yellow-500 text-2xl py-4 font-bold'>DOTA 2</h1>
            <div className='w-full flex'>
              <div className='w-[50%] py-3 '>
                <img src={image} alt="" srcset="" className=' w-[95%] mx-auto ' />
              </div>
              <div className='h-auto w-[50%] '>
                <h1 className='text-white text-3xl font-medium py-5'>
                  PGL announces $500.000 Dota 2 Texas Major</h1>
                <p className='text-gray-300 text-sm px-4 '>A new Dota 2 Major is coming to the United States, says PGL, featuring a $500.000 prize pool.</p>
              </div>
            </div>
          </div>
        </div>
        <Seven_sec />
      </>
    )
  }
}
