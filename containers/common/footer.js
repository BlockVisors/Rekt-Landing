import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <>
        <footer className="resume copyright copyright-bg inner-pages-footer">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="link link-horizontal  text-center mb-3">
                            <img height="75px" width="75px"
                            alt="" className="img-fluid title-img" src="/assets/images/graphics/MooIconColor.png" />
                        </div>
                    </Col>
                    <Col xs="12">
                        <div className="link link-horizontal">
                            <ul className="justify-content-center">
                                <li><a className="copyright-text" href="#">REKTR Staking Contract</a></li>
                                <li><a className="copyright-text" href="#">REKTR Token</a></li>
                                <li><a className="copyright-text" href="https://github.com/Rekt-Redemption">Github</a></li>
                                <li><a className="copyright-text" href="https://t.me/rektredemption">Telegram</a></li>
                                <li><a className="copyright-text" href="https://twitter.com/RedemptionRekt">Twitter </a></li>
                                <li><a className="copyright-text" href="https://discord.com">Discord</a></li>
                                <li><a className="copyright-text" href="https://medium.com/rekt-redemption-project">Medium</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12">
                        <div className="text-center">
                            <div className="social-link link-horizontal">
                                <ul className="justify-content-center">
                                    
                                    <li>
                                        <a className="copyright-text" href="https://twitter.com/RedemptionRekt">
                                            <i aria-hidden="true" className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    
                                    <li className="footer-social-list">
                                    <a href="https://github.com/Rekt-Redemption"><i aria-hidden="true" className="fa fa-github"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="https://medium.com/rekt-redemption-project"><i aria-hidden="true" className="fa fa-medium"></i></a>
                                </li>
                                <li className="footer-social-list">
                                <a href="https://t.me/rektredemption"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        <div className="agency copyright inner-page">
            <Container>
                <Row>
                    <Col sm="6">
                        <div className="link-horizontal">
                            <ul>
                                <li><a className="copyright-text" href="#">Privacy Policy</a></li>
                                <li><a className="copyright-text" href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div>
                            <h6 className="copyright-text text-white text-right">Copyright © 2020 Rekt Redemption
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
)

export default Footer
