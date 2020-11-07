import React, {useRef} from 'react'
import Typed from 'react-typed';
import CountdownComponent from '../../../../containers/common/countdown';
import {Container,Row,Col} from 'reactstrap'
import { withRouter } from 'next/router'

const Banner = ({router}) => {
   const scrollToRef = (val) => {
        document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
      }

    return(
    <section className="event header" id="home">
        <div className="header3 bg">
            <div className="event-content" id="sale-title">
                <Container>
                    <Row>
                        <Col xl="6" md="10" className="offset-xl-3 offset-md-1">
                            <div className="center-text">
                                <div className="text-center w-100">
                                    <div className="h1-margin">
                                        <h1 id="sale-title">Rekt Redemption Airdrop <span className="typed">
                                            <Typed
                                                strings={['']}
                                                typeSpeed={20}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed></span></h1>
                                    </div>
                                    <div className="wedding-time">
                                        <div>
                                            <div className="event-countdown">
                                                <h3>100% bonus for liquidity providers on UniSwap</h3>
                                            </div>

                                            <h6 className="header-sub-text text-white">
                                        Note: Bonus REKTR will be distributed immediately after verifying liquidity lock
                                    </h6>

                                    <h6 className="header-sub-text text-white">
                                        Investor must lock for one week via Unicrypt to get bonus REKTR
                                    </h6>
                                        </div>
                                    </div>
                                    {/* <h4 className="text-white">
                                        <i className="fa fa-map-marker m-r-10 text-white"></i>
                                        Worldwide
                                    </h4> */}
                                    {/* <h5 className="header-sub-text text-white">
                                        Sign up Now Below
                                    </h5> */}
                                    <h5 className="header-sub-text text-white">
                                        8000 REKTR will be given away-- First 533 participants will receive 15 REKTR
                                    </h5>
                                    <div>
                                    {/* <h5 className="header-sub-text text-white">
                                        <i className="fa fa-calendar m-r-10"></i>
                                        Airdrop will close 9 October 2020 or when number of participants are maxed out
                                    </h5> */}
                                    {/* <h5 className="header-sub-text text-white">
                                        REKTR Token Address: 0x....
                                    </h5> */}
                                    <h5 className="header-sub-text text-white">
                                        <i className="fa fa-calendar m-r-10"></i>
                                        Airdrop Date will be 10 November 2020 - Uniswap Listing 12 November 2020
                                    </h5>
                                    </div>
                                    
                                    <div className="text-center link-horizontal">
                                        <a className=" btn btn-default back-white text-uppercase border-not" href="https://forms.gle/mfKW4FXiJGqTbY2w9">
                                            Signup for Airdrop
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {router.pathname !== '/elements/count-down' ? 
            <div className="set-bottom set-abs">
                <a className="center-content down" onClick={()=>scrollToRef('booking')} >
                    <img alt="" className="scroll-down" src="/assets/images/event/image-down.png" />
                    <img alt="" className="scroll-down" src="/assets/images/event/image-down.png" /> 

                </a>
            </div>
            : ''}
        </div>
    </section>
    )
}


export default withRouter(Banner);