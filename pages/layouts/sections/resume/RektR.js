import React from 'react';
import Typed from 'react-typed';
import {Container,Row,Col} from 'reactstrap'
const RektR = () => (
    <section className="resume header" id="header">
        <div className="header7-content">
            <div className="resume bg bg-pink" id="rektr">
                <Container>
                    <Row>
                        
                        <Col lg="6" md="6" className="offset-lg-1">
                            <div className="center-text">
                                <div>
                                    <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase"># REKTR</h5>
                                    </div>
                                    <div className="header-text">
                                        <h1><span className="bold-text">ERC-20</span><br /> Governance Token</h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="font-secondary">Join, Vote, & <span className="typed-resume"><Typed
                                                strings={['Determine the future of the Platform']}
                                                typeSpeed={80}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed></span></h4>
                                    </div>
                                    <div className="header-sub-text">
                                        <p className="font-secondary font-large">REKTR will be awarded to those who have been scammed. 
                                        It will be built with community in mind. 
                                        Earn more by staking. Ulitmately, the community will drive the project. 
                                        We will add and incentive new members to grow this movement.</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li><a className="btn btn-default primary-btn back-white">Trade</a></li>
                                            <li><a className="btn btn-default primary-btn back-white">telegram</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="5" md="6" className="offset-lg">
                            <div id="photo-cont">
                            <img 
                            height="360px"
                            width="320px"
                            alt="" className="img-responsive center-block" 
                            src="/assets/images/graphics/govNaked.png" />
                            {/* <img alt="" className="img-fluid set-abs bottom-0 right-0" src="/assets/images/graphics/gov.png" /> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
)

export default RektR;