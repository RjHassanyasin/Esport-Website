import React, { Component } from 'react'
import IMG from "../images/wireless-gaming-headsets-affiliates-345x197.jpg"
import Fourcards from './Fourcards'

export default class F_Sec extends Component {
    render() {
        return (
            <div className='h-auto  py-4 w-full bg-[rgb(51,51,51)]'>
                <div className='h-auto w-[85%] flex gap-5 py-5 mx-auto border-b-2 border-white'>
                    <div className=' w-[70%]'>
                        <h1 className='text-yellow-500 pb-10 text-2xl font-medium tracking-[2px]'>Latest News</h1>
                        <img src={IMG} alt="" srcset="" className='h-[380px] w-[95%] ml-[5%]' />
                        <button className='bg-yellow-500 rounded-[4px] py-1 px-1 mt-3'>Gaming</button>
                        <h1 className='text-white text-3xl tracking-normal px-6 font-bold'>Gaming Gear - The best Wireless Handsets compared</h1>
                        <p className='text-gray-300 text-sm px-6 pt-2'>Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are our top 5 recommendations.</p>
                    </div>
                    <Fourcards />
                </div>
            </div>
        )
    }
}
