import React, { Component } from 'react'
import img from "../images/2022-04_OWN3Dtv_esports-banner_EN_710x400.png"

export default class Sec_two extends Component {
    render() {
        return (
            <>
                <div className='h-auto w-full bg-[#333333]'>
                    <div className='h-auto w-[85%] mx-auto border-b-2 border-white  py-5 flex justify-between'>
                        <div className='h-auto w-[49%] '>
                            <h1 className='text-white py-5 font-medium text-2xl'>Say yes & get 50% off your cool looks for that at OWN3D!</h1>
                            <p className='text-gray-300 text-[16px] pb-5'>OWN3D is the #1 online shop for streamers and has the biggest selection of Stream Overlay Packages, alerts, emotes and more! All designs work right out of the box with your streaming software of choice. OBS Studio, Streamlabs or StreamElements. Be ready on any streaming platform like Twitch, YouTube, Trovo or Facebook. Get 50% off using the code “streaming”. Your viewers will love it.</p>
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
