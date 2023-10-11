import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='flex justify-around bg-[#000000] w-full py-10'>
                    <ul className='text-gray-300 w-[60%] text-[14px] flex justify-evenly'>
                        <li>Imprint</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Cookie Privacy Policy</li>
                        <li>Contact</li>
                        <li>Editorial Staff</li>
                        <li>Terms and Conditions</li>
                    </ul>
                    <p className='text-white text-sm '>
                        © 2023 Seven.One Entertainment Group GmbH</p>
                </div>
            </>
        )
    }
}
