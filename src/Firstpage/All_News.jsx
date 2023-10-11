import React, { Component } from 'react'
import T_Sec from './T_Sec'
import Seven_sec from './Seven_sec'

export default class All_News extends Component {
    render() {
        return (
            <>
                <div className='h-auto w-full bg-[#333333]'>
                    <div className=' w-[85%] py-4 mx-auto'>
                    <h1 className='text-yellow-500 text-2xl py-4 font-bold'>All News</h1>
                    <ul className='w-[60%] text-white flex justify-evenly'>
                        <li className='text-yellow-500'>All</li>
                        <li>League of Lagend</li>
                        <li>CS:GO</li>
                        <li>VOLARANT</li>
                        <li>DOTA 2</li>
                        <li>Call of Duty</li>
                        <li>Pokemon</li>
                        <li>Gaming</li>
                    </ul>
                    </div>
                    <T_Sec/>
                    <Seven_sec/>    
                </div>
            </>
        )
    }
}
