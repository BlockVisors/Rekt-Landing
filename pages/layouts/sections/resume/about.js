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
                        {/* <h6 className="font-primary borders main-text text-uppercase"><span>Rekt Redemption Sale Info</span></h6> */}
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text" id="det-title">The Details</h2>
                            </div>
                            <h1><span className="bold-text2">Sale Start Date: October 18, 2020 16:00 UTC</span></h1>
                         <h1><span className="bold-text2">Sale End Date: October 19, 2020 16:00 UTC</span></h1>


                        </div>
                    </Col>
                </Row>
               
            </div>
       
        </Container>
        <Container>
            <div className="title title2">
                <Row>
                    <Col md="8" className="offset-md-2">
                        {/* <h6 className="font-primary borders main-text text-uppercase"><span>Rekt Redemption Sale Info</span></h6> */}
                        <div className="header-sub-text">
                                        <h5 className="text-hash text-uppercase"># Sold Out</h5>
                                    </div>
                       
                        <div className="sub-title">
                            <div>
                                <h2 className="title-text" id="det-title">Private Sale Info</h2>
                            </div>
                            <div className="header-sub-text">
                                        <h4 className="font-secondary">Easy <span className="typed-resume"><Typed
                                                strings={['4x or more!']}
                                                typeSpeed={80}
                                                backSpeed={50}
                                                showCursor={false}
                                                loop >
                                            </Typed></span></h4>
                                    </div>
                            <h1><span className="bold-text2">Sale Date: October 15, 2020</span></h1>
                            <h1><span className="bold-text2">Total Sold: 2000 REKTR</span></h1>
                            <h1><span className="bold-text2">Sale Price: 1 ETH = 20 REKTR</span></h1>


                        </div>
                    </Col>
                </Row>
               
            </div>
       
        </Container>

    </section>
     
)

export default About;