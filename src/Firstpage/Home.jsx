import React, { Component } from 'react'
import Nav from './Nav'
import Sub_Nav from './Sub_Nav'
import F_Sec from './F_Sec'
import S_Sec from './S_Sec'
import T_Sec from './T_Sec'
import Four_sec from './Four_sec'
import Five_sec from './Five_sec'
import Six_sec from './Six_sec'
import Seven_sec from './Seven_sec'
import E_sec from './E_sec'
import N_sec from './N_sec'
import Ten_sec from './Ten_sec'
import Eleven from './Eleven'
import All_News from './All_News'
import Last from './Last'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Sub_Nav />
                <F_Sec />
                <S_Sec />
                <T_Sec />
                <Four_sec/>
                <Five_sec/>
                <Six_sec/>
                <Seven_sec/>
                <E_sec/>
                <N_sec/>
                <Ten_sec/>
                <Eleven/>
                <All_News/>
                <Last/>
                <Footer/>
            </div>
        )
    }
}
