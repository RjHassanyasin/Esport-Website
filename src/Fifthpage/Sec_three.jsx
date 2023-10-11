import React, { Component } from 'react'
import img from "../images/logitech_mice1.jpg"

export default class Sec_three extends Component {
    render() {
        return (
            <>
                <div className='h-auto w-full bg-[#333333]'>
                    <div className='h-auto w-[85%] mx-auto border-b-2 border-white py-5 flex justify-between'>
                        <div className='h-auto w-[49%] '>
                            <h1 className='text-white py-5 font-medium text-2xl'>Gaming Mice</h1>
                            <p className='text-gray-300 text-[16px] pb-5'>The Logitech G502 HERO is a choice made by many professional esports players and, which is nice for more casual gamers, sits at a very affordable price point. It has a wide DPI range and features 11 customizable buttons, which is a pretty high amount, offering a lot of versatility. Furthermore it’s possible to tweak the weight of the mouse in 3.6 grams intervals, as you’re able to change it to your liking.</p>
                            <button className='bg-yellow-500 text-white  px-6 py-3 rounded-[10px]'>Shop Now</button>
                        </div>
                        <div className='h-auto w-[50%]'>
                            <img src={img} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
