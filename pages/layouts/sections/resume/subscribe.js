import React from 'react';
import {Container,Row,Col,FormGroup,Input} from 'reactstrap'
const Subscribe = () => (
    <section className="resume subscribe" id="contact">
        <Container>
            <Row>
                <Col lg="8" className="offset-lg-2">
                    <div className="title title2">
                        <h3 className="subscribe-head">Want to add a Rekt Project or Join Our Team?</h3>
                        <p className="subscribe-sub-head font-primary">Provide us with your email and join our list below:</p>
                    </div>
                </Col>
                <Col xl="6"  lg="8"  className="offset-xl-3 offset-lg-2">
                    <div className="subscribe">
                        <div>
                            <FormGroup>
                                <div className="flex">
                                    <Input className="form-control" name="email" placeholder="Enter Email"
                                        type="email" />
                                    <div className="button-primary">
                                        <button className=" btn btn-default text-white primary-btn" type="submit">contact me
                                    </button>
                                    </div>
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Subscribe;