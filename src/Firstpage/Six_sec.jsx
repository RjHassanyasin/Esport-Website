import React, { Component } from 'react'
import image from "../images/New-VALORANT-AGent-teaser-350x197.jpg"

export default class Six_sec extends Component {
    render() {
        return (
            <>
                <div className='h-auto w-full  bg-[#333333]'>
                    <div className='h-auto w-[85%] mx-auto '>
                        <h1 className='text-yellow-500 text-2xl py-4 font-bold'>VALORANT</h1>
                        <div className='w-full  flex'>
                            <div className='w-[50%]  py-3 '>
                                <img src={image} alt="" srcset="" className=' w-[95%] mx-auto ' />
                            </div>
                            <div className='h-auto w-[50%] '>
                                <h1 className='text-white text-3xl font-medium py-5'>VALORANT blog teases newest agent</h1>
                                <p className='text-gray-300 text-sm px-4 '>We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
