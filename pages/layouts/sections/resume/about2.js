import React from 'react';
import Typed from 'react-typed';
import {Container,Row,Col} from 'reactstrap'
const About2 = () => (
    <section className="resume header" id="header">
        <div className="header7-content">
            <div className="resume bg bg-pink container-fluid" id="sale">
                <Container>
                    <Row>
                    <Col lg="5" md="5" className="offset-lg-1">
                            <div className="center-text">
                                <div>
                                    <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase"># sale</h5>
                                    </div>
                                    <div className="header-text">
                                        <h1><span className="bold-text">Presale-Info</span><br /><span className="bold-text2">Sale Date: October 16, 2020 16:00 UTC</span></h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="font-secondary">Get In <span className="typed-resume"><Typed
                                                strings={['Early for More Rewards']}
                                                typeSpeed={80}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed></span></h4>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large">8000 REKTR For Sale</p>
                                        <p className="font-secondary font-large">Liquidity added to Uniswap 1 hour after sale</p>
                                        <p className="font-secondary font-large">All Unsold tokens burned</p>
                                        <p className="font-secondary font-large">Presale Price: </p>
                                        <p className="font-secondary font-large">Uniswap Listing Price: </p>
                                        {/* <div>
                                        <p className="font-secondary font-large"><strong>Sale Proceeds: <br></br>50% to liquidity/40% development/
                                            10% donation to Rekt project token holders</strong></p>
                                        </div> */}
                                    </div>
                                    {/* <div className="header-text">
                                        <h1><span>Sale Proceeds</span><br /></h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large">50% to liquidity<br></br>
                                            40% development<br></br>
                                            10% donation to Rekt project token holders<br></br></p>
                                    </div> */}
                                    <div className="link-horizontal">
                                        <ul>
                                            <li><a className="btn btn-default primary-btn back-green">join sale</a></li>
                                            <li><a className="btn btn-default primary-btn back-white">telegram</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="5" md="5" className="offset-lg-1">
                            <div className="center-text">
                                <div>
                                    <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase"># rektr Token</h5>
                                    </div>
                                    <div className="header-text">
                                        <h1><span className="bold-text">Token Supply</span><br /><span className="bold-text2">Total Supply: 30,000 REKTR</span> </h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="font-secondary">Unsold Tokens <span className="typed-resume"><Typed
                                                strings={['From Pre-Sale will be burned']}
                                                typeSpeed={80}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed></span></h4>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large"><span>2000 REKTR</span> - Private Sale</p>
                                        <p className="font-secondary font-large"><span>8000 REKTR</span> - Presale</p>
                                        <p className="font-secondary font-large">12000 REKTR - Staking rewards/community voted</p>
                                        <p className="font-secondary font-large">2000 REKTR - Uniswap liquidity—locked</p>
                                        <p className="font-secondary font-large">3000 REKTR - Team & marketing</p>
                                        <p className="font-secondary font-large">3000 REKTR - Rugged projects/Redemption Pool</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li><a className="btn btn-default primary-btn back-white">etherscan</a></li>
                                            <li><a className="btn btn-default primary-btn back-green">github</a></li>
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

export default About2;
