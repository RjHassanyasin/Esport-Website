import React, { Component } from 'react'
import IMG from "../images/Capture.PNG"
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className=' bg-[#333333] py-4 flex justify-around item-center'>
        <img src={IMG} alt="" srcset="" />
        <ul className=' text-white text-xl flex items-center justify-around w-[35%]'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/News"><li>News</li></Link>
          <Link to="/Videos"><li>Videos</li></Link>
          <Link to="/Deals"><li>Special Deals</li></Link>
          <Link to="/Shop"><li>Shop</li></Link>
        </ul>
      </nav>
    )
  }
}
