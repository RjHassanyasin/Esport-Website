import React, { Component } from 'react'

export default class Last extends Component {
    render() {
        return (
            <>
                <div className='h-auto w-full py-3 bg-[#1A1A1A]'>
                    <div className='w-[85%] flex py-4 mt-20 mx-auto flex-wrap'>
                        <ul className='text-white text-[16px] w-[20%]'>
                            <li className='text-gray-300 text-sm mt-2'>Games</li>
                            <li className='mt-5'>League of lagend</li>
                            <li className='mt-2'>VALORANT</li>
                            <li className='mt-2'>Call of Duty</li>
                            <li className='mt-2'>Gaming</li>
                        </ul>

                        <ul className='text-white text-[16px] w-[20%]'>
                            <li className='mt-10'>CS:GO</li>
                            <li className='mt-2'>DOTA 2</li>
                            <li className='mt-2'>Pokemon</li>
                        </ul>

                        <ul className='text-white text-[16px] w-[20%]'>
                            <li className='text-gray-300 text-sm mt-2'>Guides</li>
                            <li className='mt-5'>League of lagend Guides</li>
                            <li className='mt-2'>CS:GO Guides</li>
                            <li className='mt-2'>Call of Duty Guides</li>
                            <li className='mt-2'>DOTA 2 Guides</li>
                            <li className='mt-2'>Pokemon Guides</li>
                        </ul>

                        <ul className='text-white text-[16px] w-[20%]'>
                            <li className='text-gray-300 text-sm mt-2'>News</li>
                            <li className='mt-5'>League of lagend News</li>
                            <li className='mt-2'>CS:GO News</li>
                            <li className='mt-2'>Call of Duty News</li>
                            <li className='mt-2'>DOTA 2 News</li>
                            <li className='mt-2'>Pokemon News</li>
                            <li className='mt-2'>Fifa News</li>
                        </ul>

                        <ul className='text-white text-[16px] w-[20%]'>
                            <li className='text-gray-300 text-sm mt-2'>Patchnotes</li>
                            <li className='mt-5'>League of lagend Patchnotes</li>
                            <li className='mt-2'>CS:GO Patchnotes</li>
                            <li className='mt-2'>Call of Duty Patchnotes</li>
                            <li className='mt-2'>DOTA 2 Patchnotes</li>
                        </ul>

                        <ul className='text-white text-[16px] w-[20%]'>
                            <li className='text-gray-300 text-sm mt-2'>More</li>
                            <li className='mt-5'>Special Deals</li>
                            <li className='mt-2'>Gaming News</li>
                            <li className='mt-2'>Entertainment</li>
                            <li className='mt-2'>Videos</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
