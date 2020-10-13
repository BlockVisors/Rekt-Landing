import React from 'react';
import { AboutData } from '../../../../database/layouts/resume/database';
import {Container,Row,Col} from 'reactstrap'
import Typed from 'react-typed';

const About = () => (
    <section className="resume about" id="about">
        <Container>
            <div className="title title2">
                <Row>
                    <Col md="8" className="offset-md-2">
                        <h6 className="font-primary borders main-text text-uppercase"><span>Rekt Redemption Sale Info</span></h6>
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text">Pre-Sale Details</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
       
        </Container>
        <div className="header7-content">
        <div className="resume bg bg-pink">
            <Container>
                <Row>
                    {/* <Col lg="8" md="6">
                        <img alt="" className="img-fluid set-abs bottom-0 right-0" src="/assets/images/resume/h7.png" />
                    </Col> */}
                    <Col lg="10" md="8" className="offset-lg-1">
                        <div className="center-text">
                            <div>
                                {/* <div className="header-sub-text">
                                    <h5 className="text-hash text-uppercase"># redemption</h5>
                                </div> */}
                                {/* <div className="header-text">
                                    <h1><span className="bold-text">Rekt Redemption</span><br /> Redeem Your Losses</h1>
                                </div> */}
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
                                     or "Rekt" on recent DeFi projects. </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                    <div className="text-center m-t-50">
                        <a className="btn btn-default primary-btn">More</a>
                    </div>
            </Container>
        </div>
    </div>
    </section>
  
)

export default About;