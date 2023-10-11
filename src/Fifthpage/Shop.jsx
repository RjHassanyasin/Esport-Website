import React, { Component } from 'react'
import Nav from "../Firstpage/Nav"
import Sub_Nav from "../Firstpage/Sub_Nav"
import ShopF from './ShopF'
import Sec_two from './Sec_two'
import Sec_three from './Sec_three'
import Sec_Four from './Sec_Four'
import T_Sec from '../Firstpage/T_Sec'
import Last from "../Firstpage/Last"
import Footer from "../Firstpage/Footer"

export default class Shop extends Component {
    render() {
        return (
            <>
                <Nav />
                <Sub_Nav />
                <ShopF />
                <Sec_two />
                <Sec_three />
                <Sec_Four />
                <T_Sec />
                <Last />
                <Footer />
            </>
        )
    }
}
