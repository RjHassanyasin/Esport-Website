import React, { Component } from 'react'
import img from "../images/valorant.jpg"

export default class Scard2 extends Component {
    render() {
        return (
            <>
                <div className="h-auto w-[18%] ">
                    <img src={img} alt="" srcset="" className='mx-auto' />
                    <h1 className='text-center text-white text-[20px] font-medium mt-4'>VALORANT</h1>
                </div>
            </>
        )
    }
}
