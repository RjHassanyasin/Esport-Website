import React, { Component } from 'react'
import Scards from './Scards'
import Scard2 from './Scard2'

export default class S_Sec extends Component {
    render() {
        return (
            <>
                <div className='h-auto  py-6 w-full bg-[rgb(51,51,51)]'>
                    <div className='h-auto w-[85%]  gap-5 py-5 mx-auto border-b-2 border-white'>
                        <h1 className='text-2xl text-white font-medium pb-8'>Top Games</h1>
                        <div className='h-auto w-full flex'>
                            <Scards />
                            <Scard2 />
                            <Scards />
                            <Scard2 />
                            <Scards />
                            <Scard2 />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
