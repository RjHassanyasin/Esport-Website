import React, { Component } from 'react'
import image from "../images/Secret-Vault-Warzone-Rebirth-Island-720x405.jpg"
import Seven_sec from './Seven_sec'

export default class N_sec extends Component {
    render() {
        return (
            <>
                <div className='h-auto w-full bg-[#333333]'>
                    <div className='h-auto w-[85%] mx-auto '>
                        <h1 className='text-yellow-500 text-2xl py-4 font-bold'>Call of Duty</h1>
                        <div className='w-full flex'>
                            <div className='w-[50%] py-3 '>
                                <img src={image} alt="" srcset="" className=' w-[95%] mx-auto ' />
                            </div>
                            <div className='h-auto w-[50%] '>
                                <h1 className='text-white text-3xl font-medium py-5'>
                                    Warzone Player finds loadout and cash in secret vault on Rebirth Island</h1>
                                <p className='text-gray-300 text-sm px-4 '>Like usual the newest Warzone update has some surprises in store and players have found a secret vault this time around.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Seven_sec />
            </>
        )
    }
}
