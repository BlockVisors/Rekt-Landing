import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components

import Header from './../containers/common/MainHeader'
import NavMain from './../containers/common/NavMain'

import RektHeader from './../containers/common/RektHeader'
import Team from './layouts/sections/agency/expert'
import Countdown from './layouts/sections/resume/Countdown'
import CountDownSection from './layouts/sections/event/banner'
import LiveSection from './layouts/sections/event/banner-live'

import FAQ from './layouts/sections/modern-sass/faq'
import SpeakerSection from './layouts/sections/event/speaker'


import RektR from './layouts/sections/resume/RektR'

import BannerSection from './layouts/sections/resume/banner'
import AboutSection from './layouts/sections/resume/about'
import About2 from './layouts/sections/resume/about2'

import ServiceSection from './layouts/sections/resume/services'
import Section from './layouts/sections/resume/section'
import CounterSection from './layouts/sections/resume/counter'
import ScheduleSection from './layouts/sections/resume/schedule'
import PricingSection from './layouts/sections/resume/pricing'
import SubscribeSection from './layouts/sections/resume/subscribe'
import FooterSection from './layouts/sections/resume/footer'
import Footer2 from '../containers/common/footer'


const Resume = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#1f232c')
        document.body.style.setProperty('--secondary', '#676767')
        document.body.style.setProperty('--light', '#000')
        document.body.style.setProperty('--dark', '#000')
    })

    return (
        <div>
            <Head>
                <title>Rekt Redemption </title>
            </Head>
            {/* <RektHeader /> */}
            <Header className="dark" />

            <BannerSection />
            {/* <Countdown /> */}
            {/* <CountDownSection /> */}
            <LiveSection />
{/*
            <AboutSection />
            <About2 /> */}
          
            <ServiceSection />

            <RektR />

            <Section />

            {/* <CounterSection /> */}
            {/* <SpeakerSection /> */}
            {/* <Team /> */}
            <FAQ />
            <SubscribeSection />

            {/* <FooterSection /> */}
            <Footer2 />

        </div>
    )
}

export default Resume;