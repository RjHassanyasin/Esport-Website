import React, { Component } from 'react'
import img from "../images/Cypher-VALORANT-removed-temporarily-350x197.jpg"

export default class Volarant_card2 extends Component {
  render() {
    return (
        <>
        <div className='h-auto w-[23%] py-2'>
            <img src={img} alt="" srcset="" />
            <h1 className='text-white text-[18px] font-medium '>
            VALORANT Bug party continues – Astra returns as Cypher breaks the game
            </h1>
            <p className='text-gray-300 text-sm'>VALORANT players are currently unable to play as Cypher due to a game-breaking bug. In the meantime, Astra returns to the field.</p>
        </div>  
     </>
    )
  }
}
