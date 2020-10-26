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
                            <h1><span className="bold-text2">Sale Start Date: October 31, 2020 16:00 UTC</span></h1>
                         <h1><span className="bold-text2">Sale End Date: November 1, 2020 16:00 UTC</span></h1>


                        </div>
                    </Col>
                </Row>
               
            </div>
       
        </Container>
       
    </section>
     
)

export default About;