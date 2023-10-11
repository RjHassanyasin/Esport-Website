import React, { Component } from 'react'
import Fourcards from './Fourcards'
import IMG from "../images/Olaf-League-of-Legends-Splash-Art-334x197.jpg"

export default class Four_sec extends Component {
    render() {
        return (
            <div className='h-auto  py-4 w-full bg-[rgb(51,51,51)]'>
                <div className='h-auto w-[85%] flex gap-5 py-5 mx-auto border-b-2 border-white'>
                    <div className=' w-[70%]'>
                        <h1 className='text-yellow-500 pb-10 text-2xl font-medium tracking-[2px]'>League of Lagends</h1>
                        <img src={IMG} alt="" srcset="" className='h-[380px] w-[95%] ml-[5%]' />
                        <h1 className='text-white text-3xl tracking-normal px-6 pt-5 font-bold'>Riot plans mid-scope updates for both Taliyah and Olaf</h1>
                        <p className='text-gray-300 text-sm px-6 pt-2'>League of Legends developers have talked about some possible updates to Taliyah and Olaf which should be released in a couple of months.</p>
                    </div>
                    <Fourcards />
                </div>
            </div>
        )
    }
}
