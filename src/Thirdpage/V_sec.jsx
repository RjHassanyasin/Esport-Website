import React, { Component } from 'react'
import Vid from './Vid'
import Special_card2 from '../Firstpage/Special_card2'


export default class V_sec extends Component {
  render() {
    return (
        <>
                <div className='h-auto w-full  bg-[#333333] '>
                    <div className='h-auto w-[85%] py-5 mx-auto'>
                        <h1 className='text-white text-2xl py-3 font-medium  '>Special deals</h1>
                        <div className='h-auto w-full flex justify-evenly'>
                            <Vid/>
                            <Special_card2/>
                            <Vid/>
                            <Special_card2/> 
                        </div>
                    </div>
                </div>
            </>
    )
  }
}
