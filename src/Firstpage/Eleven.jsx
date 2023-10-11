import React, { Component } from 'react'
import Seven_sec from './Seven_sec'
import image from "../images/GMHikaru-banned-after-watching-dr-disrespect-720x405.jpg"

export default class Eleven extends Component {
  render() {
    return (
        <>
        <div className='h-auto w-full bg-[#333333]'>
            <div className='h-auto w-[85%] mx-auto '>
                <h1 className='text-yellow-500 text-2xl py-4 font-bold'>Entertainment</h1>
                <div className='w-full flex'>
                    <div className='w-[50%] py-3 '>
                        <img src={image} alt="" srcset="" className=' w-[95%] mx-auto ' />
                    </div>
                    <div className='h-auto w-[50%] '>
                        <h1 className='text-white text-3xl font-medium py-5'>
                           GMHikaru receives Twitch ban after watching Dr Disrespect play chess</h1>
                        <p className='text-gray-300 text-sm px-4 '>Popular chess streamer Hikaru Nakamura has seemingly made an error in judgment, as he’s banned after watching Dr Disrespect.  </p>
                    </div>
                </div>
            </div>
        </div>
        <Seven_sec />
    </>
    )
  }
}
