import React, { Component } from 'react'
import Nav from '../Firstpage/Nav'
import Sub_Nav from '../Firstpage/Sub_Nav'
import F_Sec from '../Firstpage/F_Sec'
import All_News from "../Firstpage/All_News"
import Last from '../Firstpage/Last'
import Footer from '../Firstpage/Footer'

export default class Deals extends Component {
    render() {
        return (
            <>
                <Nav />
                <Sub_Nav />
                <F_Sec />
                <All_News/>
                <Last/>
                <Footer/>
            </>
        )
    }
}
