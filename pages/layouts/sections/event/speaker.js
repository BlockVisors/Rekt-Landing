import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Speaker = () => (
    <section className="event speaker" id="speaker">
        <div className="circle">
        </div>
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3">
                        <div className="main-title">
                            <h2><span>our</span> Team</h2>
                        </div>
                        <div className="sub-title">
                            <p> We are looking to expand the Rekt Redemption Crew. Contact Us to Join the 
                                Team.</p>
                        </div>
                    </div>
                </Col>
                <Col md="3" sm="6"  className="speker-container">
                    <div className="text-center">
                        <div className="team-img">
                            <img alt="" className="img-fluid" src="/assets/images/graphics/dg.jpg" />
                            <div className="overlay"></div>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin center-content"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="employee">
                            <h5 className="e-name text-center">Dameon Green</h5>
                            <h6 className="post text-center ">Co-Founder - Development Lead</h6>
                        </div>
                    </div>
                </Col>
                <Col md="3" sm="6"  className="speker-container">
                    <div className="text-center">
                        <div className="team-img">
                            <img alt="" className="img-fluid" src="/assets/images/graphics/sap.jpeg" />
                            <div className="overlay"></div>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin center-content"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="employee">
                            <h5 className="e-name text-center">Syed Asif Parveez</h5>
                            <h6 className="post text-center ">Co-Founder - Operations Lead</h6>
                        </div>
                    </div>
                </Col>
                <Col md="3" sm="6"  className="speker-container">
                    <div className="text-center">
                        <div className="team-img">
                            <img alt="" className="img-fluid" src="/assets/images/event/l3-4.png" />
                            <div className="overlay"></div>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin center-content"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="employee">
                            <h5 className="e-name text-center">Open slot</h5>
                            <h6 className="post text-center ">UX-UI-Designer</h6>
                        </div>
                    </div>
                </Col>
                <Col md="3" sm="6"  className="speker-container">
                    <div className="text-center">
                        <div className="team-img">
                            <img alt="" className="img-fluid" src="/assets/images/event/l3-4.png" />
                            <div className="overlay"></div>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google center-content"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin center-content"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="employee">
                            <h5 className="e-name text-center">Open Position</h5>
                            <h6 className="post text-center ">Lead Blockchain Developer</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Speaker;