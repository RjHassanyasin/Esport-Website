import React, { Component } from 'react'
import Special_cards from './Special_cards'
import Special_card2 from './Special_card2'

export default class T_Sec extends Component {
    render() {
        return (
            <>
                <div className='h-auto w-full  bg-[#333333] '>
                    <div className='h-auto w-[85%] border-b-2 border-white py-5 mx-auto'>
                        <h1 className='text-white text-2xl py-3 font-medium  '>Special deals</h1>
                        <div className='h-auto w-full flex justify-evenly'>
                            <Special_cards />
                            <Special_card2/>
                            <Special_cards />
                            <Special_card2/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
