import React, { Component } from 'react'

export default class Sub_Nav extends Component {
  render() {
    return (
      <nav className='py-4 bg-[#1A1A1A]'>
        <ul className='flex justify-center gap-20 text-white '>
            <li>Special Deals</li>
            <li>League of Lagends</li>
            <li>CS:GO</li>
            <li>DOTA 2</li>
            <li>Call of Duty</li>
            <li>Pokemon</li>
            <li>Valorant</li>
            <li>Gaming</li>
        </ul>
      </nav>
    )
  }
}
