import React, { Component } from 'react'
import Nav from '../Firstpage/Nav'
import Sub_Nav from "../Firstpage/Sub_Nav"
import All_News from "../Firstpage/All_News"
import Seven_sec from '../Firstpage/Seven_sec'
import T_Sec from '../Firstpage/T_Sec'
import Last from '../Firstpage/Last'
import Footer from '../Firstpage/Footer'

export default class News extends Component {
    render() {
        return (
            <>
                <Nav />
                <Sub_Nav />
                <All_News />
                <T_Sec />
                <Seven_sec />
                <T_Sec />
                <Seven_sec />
                <T_Sec />
                <Seven_sec />
                <Last />
                <Footer />
            </>
        )
    }
}
