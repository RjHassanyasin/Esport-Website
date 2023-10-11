import React, { Component } from 'react'
import Nav from '../Firstpage/Nav'
import Sub_Nav from '../Firstpage/Sub_Nav'
import All_videos from './All_videos'
import Last from '../Firstpage/Last'
import Footer from '../Firstpage/Footer'


export default class Videos extends Component {
    render() {
        return (
            <>
                <Nav />
                <Sub_Nav />
                <All_videos />
                <Last />
                <Footer />
            </>
        )
    }
}
