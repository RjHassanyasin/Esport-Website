import React, { Component } from 'react'
import Card_comp from './Card_comp'


export default class Fourcards extends Component {
  render() {
    return (
      <div className='w-[40%] '>
        <Card_comp/>
        <Card_comp/>
        <Card_comp/>
        <Card_comp/>
      </div>
    )
  }
}
