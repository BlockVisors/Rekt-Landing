import React from 'react';
import Typed from 'react-typed';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="resume header" id="header">
        <div className="header7-content">
            <div className="resume bg bg-pink container-fluid">
                <Container>
                    <Row>
                        <Col lg="5" md="6" id="top">
                            <img 
                            height="400px"
                            weight="400px"
                            alt="" 
                            // className="img-fluid set-abs bottom-0 right-0" 
                            src="/assets/images/graphics/greenHand.png" />
                        </Col>
                        <Col lg="6" md="6" className="offset-lg-1">
                            <div className="center-text">
                                <div>
                                    <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase"># redemption</h5>
                                    </div>
                                    <div className="header-text">
                                        <h1><span className="bold-text">Rekt Redemption</span><br />Redeem Your Losses</h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="font-secondary">The <span className="typed-resume"><Typed
                                                strings={['Taste of Sweet Redemption']}
                                                typeSpeed={80}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed></span></h4>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large">Payback for early investors who have been burned
                                         or "Rekt" on recent DeFi projects. Real visible team. No risk of scam or rug pulls. Rewards
                                         and payback for all who have lost ETH on scams.</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li><a className="btn btn-default primary-btn back-white">know more</a></li>
                                            <li><a className="btn btn-default primary-btn back-white">join sale</a></li>
                                            <li><a href="https://t.me/rektredemption" className="btn btn-default primary-btn back-white">telegram</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
)

export default Banner;