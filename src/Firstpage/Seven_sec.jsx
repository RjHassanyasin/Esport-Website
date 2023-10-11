import React, { Component } from 'react'
import Volarant_card from './Volarant_card'
import Volarant_card2 from './Volarant_card2'

export default class Seven_sec extends Component {
    render() {
        return (
            <>
                <div className='h-auto w-full  bg-[#333333] '>
                    <div className='h-auto w-[85%] border-b-2 border-white py-5 mx-auto'>
                        <div className='h-auto w-full flex justify-evenly'>
                            <Volarant_card />
                            <Volarant_card2/>
                            <Volarant_card />
                            <Volarant_card2/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
