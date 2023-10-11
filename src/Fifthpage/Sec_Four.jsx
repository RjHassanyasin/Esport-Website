import React, { Component } from 'react'
import img from "../images/ESL-FACEIT-merge-under-Saudi-Savvy-Group.jpg"

export default class Sec_Four extends Component {
  render() {
    return (
        <>
        <div className='h-auto w-full bg-[#333333]'>
            <div className='h-auto w-[85%] mx-auto border-b-2 border-white py-5 flex justify-between'>
                <div className='h-auto w-[49%] '>
                    <h1 className='text-white py-5 font-medium text-2xl'>Official ESL Shop</h1>
                    <p className='text-gray-300 text-[16px] pb-5'>The ESL Shop offers a wide range of merchandise from CS:GO and Dota2 merch to official clan wear of teams like Virtus Pro, FaZe, ENCE, BIG, fnatic, G2 Esports and more.</p>
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
