import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'
const Faq = () => {
    const DummyContent1 = () => (
        <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
            <div className="card-body">
            It’s a redemption project that will donate tokens to those scammed on choice projects. 
            It is also a governance token where you can help decide the future of the platform
            Your ticket to redemption…
            A small percentage goes to those Rekt on select projects
            </div>
        </div>
    );
    const DummyContent2 = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">
            1 )Stake token on site  2) Provide liquidity and stake LP to Earn more REKTR 3) Stake stable coin DAI, USDT, USDC on our portal
            </div>
        </div>
    );
    const DummyContent3 = () => (
        <div className="collapse show" id="collapseicon2" data-parent="#accordionoc">
            <div className="card-body">
                REKTR will be sold at the price of 10 REKTR = 1 ETH. 
                It will list on Uniswap at 5 REKTR = 1 ETH. 
            </div>
        </div>
    );
    const DummyContent4 = () => (
        <div className="collapse show" id="collapseicon3" data-parent="#accordionoc">
            <div className="card-body">
                The Pre-Sale will be held on October 31, 2020 1600 UTC time
            </div>
        </div>
    );
    const DummyContent5 = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">
                No. The Founders and Team will be transparent. You can follow us..Add us on LinkedIn. We will only add members who wish to be transparent.
            </div>
        </div>
    );
    const DummyContent6 = () => (
        <div className="collapse show" id="collapseicon2" data-parent="#accordionoc">
            <div className="card-body">
                When you stake.....Our smart contract will donate a small amount of REKTR to a current wallet that holds
                the current Rekt Reward for the week. Additionally, a small amount will go to the original Pre-Sale contributors. 
                <br />
            </div>
        </div>
    );
    const DummyContent7 = () => (
        <div className="collapse show" id="collapseicon2" data-parent="#accordionoc">
            <div className="card-body">
                By going to the stake portal at: app.rektredemption.com 
                <br />
                Connect wallet and follow instructions
            </div>
        </div>
    );
    const DummyContent8 = () => (
        <div className="collapse show" id="collapseicon3" data-parent="#accordionoc">
            <div className="card-body">
                We have a shortlist of projects that we are aware of and we will ask that you vote on Telegram
                to add and finalize the list.
            </div>
            </div>
    );
    const DummyContent9 = () => (
        <div className="collapse show" id="collapseicon3" data-parent="#accordionoc">
            <div className="card-body">
                We will verify the holders by address and distribute. 
                The process may be different for rekted projects that didn't distribute Token
            </div>
            </div>
    );

    const DummyContent10 = () => (
        <div className="collapse show" id="collapseicon3" data-parent="#accordionoc">
            <div className="card-body">
                Staking begins with a week after the sale launch...maybe sooner.
            </div>
            </div>
    );
    return (
        <section className="saas1 faq" id="faq">
            <Container>
                <Row>
                    <Col md="10">
                        <div className="faq-block">
                            <div>
                                <h3 id="faq1" className="frequent-text">Frequently Asked Questions</h3>
                                <h6>FAQ about Rekt Redemption and REKTR Token.
                                </h6>
                                <Accordion atomic={true}>
                                    <AccordionItem className="card-header bg-primary" title="What is Rekt Redemption?">
                                        <DummyContent1 className="active" />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="What can I do on Rekt platform?">
                                        <DummyContent2 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="What is value of REKTR?">
                                        <DummyContent3 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="When is the Pre-Sale?">
                                        <DummyContent4 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="Are we getting scammed or rugged?">
                                        <DummyContent5 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="What happens when you stake REKTR?">
                                        <DummyContent6 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="How do i stake REKTR?">
                                        <DummyContent7 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="What Rekt Projects do you honor?">
                                        <DummyContent8 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="How will you verify who has been Rekt?">
                                        <DummyContent9 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="When does staking begin?">
                                        <DummyContent10 />
                                    </AccordionItem>
                                </Accordion>
                                <h6 className="link">For more questions or to request projects? Reach out to us: <a>info@rektredemption.com</a></h6>
                            </div>
                        </div>
                    </Col>
                    {/* <Col md="4">
                        <div className="faq-img-block">
                            <img 
                            height="464"
                            width="290"
                            alt="faq-person" className="img-fluid" src="/assets/images/graphics/faq.png" />
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Faq;