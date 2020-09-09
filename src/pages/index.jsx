import React from 'react'
import { LandingTop } from '../components/sections'
import LandingMiddle from '../components/sections/landing_middle'
import showMeCode from '../components/sections/showMeCode'
import LandingBottom from '../components/sections/landing_bottom.js'


const Index = props => {

    return <>
        <LandingTop/>
        <LandingMiddle/>
        <LandingBottom/>
        <showMeCode/>
    </>
}

export default Index