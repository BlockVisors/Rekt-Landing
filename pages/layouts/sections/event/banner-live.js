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
                                        <h1 id="sale-title">Rekt Redemption Pre-Sale Now Live <span className="typed">
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
                                                <h3>50% bonus for early buyers</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <h4 className="text-white">
                                        <i className="fa fa-map-marker m-r-10 text-white"></i>
                                        Worldwide
                                    </h4> */}
                                    <h5 className="header-sub-text text-white">
                                        <i className="fa fa-calendar m-r-10"></i>
                                        Sale Begins: 31 October 2020
                                    </h5>
                                    <h5 className="header-sub-text text-white">
                                        <i className="fa fa-calendar m-r-10"></i>
                                        Sale Ends: 1 November 2020
                                    </h5>
                                    <div>
                                    <h5 className="header-sub-text text-white">
                                        Sale Address: 0x9008F04Ab5B84db34fb9Ec3d8B103964D2d171E7
                                    </h5>
                                    </div>
                                    
                                    <div className="text-center link-horizontal">
                                        <a className=" btn btn-default back-white text-uppercase border-not" href="#">
                                            Go to Sale
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