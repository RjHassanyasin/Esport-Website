import React, { Component } from 'react'
import img from "../images/lol.jpg"

export default class Scards extends Component {
  render() {
    return (
     <>
        <div className="h-auto w-[18%]">
            <img src={img} alt="" srcset="" className='mx-auto' />
            <h1 className='text-center text-white text-[23px] font-medium'>Lagends of Leagues</h1>
        </div>
     </>
    )
  }
}
