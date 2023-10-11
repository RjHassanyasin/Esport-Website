import React, { Component } from 'react'
import IMG from "../images/LEC-Grand-Final-to-feature-live-audience-967x544.jpg"

export default class Card_comp extends Component {
    render(props) {
        return (
            <>
                <div className='py-4 mt-8 flex justify-evenly'>
                    <div className='w-[45%]'>
                        <img src={IMG} alt="" srcset="" />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-white text-sm font-medium'>LEC to bring back live audience for Spring Split Finals</h1>
                        <p className='text-gray-300 text-sm'>The LEC is bringing back to live audiance for one series , as a Compitions</p>
                    </div>
                </div>
            </>
        )
    }
}
