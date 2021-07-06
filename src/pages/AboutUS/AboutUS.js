import React from 'react';
import CardDeck from '@app/../node_modules/react-bootstrap/esm/CardDeck';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import ListGroup from '@app/../node_modules/react-bootstrap/esm/ListGroup';
//  import Button from '../../components/button/Button';

const AboutUS = () => {
    return (
        <div>
            <CardDeck>
                <Card>
                    <Card.Title className="text-center p-3 mb-1 font-weight-bold">
                        Challenge:
                    </Card.Title>
                    <Card.Body class="p-4 h9 ml-3 mr-3">
                        <p>
                            To conduct an ICT Grand Challenge which bring
                            innovative, modular, and costeffective solution to
                            develop a Smart water supply measurement and
                            monitoring system to be deployed at the village /
                            semi-rural / semi-urban levels. The system would
                            collect and facilitate centralised monitoring of
                            data. ICT Grand Challenge Problem Statement:The ICT
                            grand challenge invites proposal for developing a
                            Smart water supply measurement and monitoring system
                        </p>
                        <h5>Eligibility</h5>
                        <p>
                            i. The Indian Tech start-ups, MSMEs, Companies, LLPs
                            registered in India under Companies Act can apply.
                            The entity must have 51% or more shareholding with
                            Indian citizen or person of Indian origin. The
                            applicants entity should not be a subsidiary company
                            of any foreign corporation.
                        </p>
                        <p>
                            ii. To encourage participation from academia and
                            industry, participating teams are not mandatorily
                            required to be registered Indian Companies/ startups
                            / MSMEs LLPs to apply for the challenge. However,
                            the 10 teams shortlisted at Ideation Stage will be
                            required to apply for registration as Indian
                            Startups/ Company/ MSMEs/ LLPs and submit the proof
                            of having applied at stage of submission of
                            Prototype. It will be expected that by the time of
                            selection at the final stage, necessary registration
                            will be completed.
                        </p>
                        <p>
                            iii. It may be noted that funds will be transferred
                            only in the bank accounts of Startups/Company /
                            MSMEs / LLPs and not in the bank accounts of
                            individuals.
                        </p>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck className="row">
                <Card>
                    <Card.Title class="text-center p-3 mb-1 font-weight-bold">
                        <b>Awards & Recognition</b>
                    </Card.Title>
                    <Card.Body className="row ">
                        <Card classname="col-md-3">
                            <ListGroup>
                                <ListGroup.Item>
                                    <Card.Title class="text-center p-2 font-weight-bold">
                                        <b>Ideation to Prototype</b>
                                    </Card.Title>
                                    <Card.Title class="text-center">
                                        Stage 1
                                    </Card.Title>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p className="text-center">
                                        10 proposalswill be shortlisted and
                                        provided financial support to the tune
                                        of Rs. 7.5 Lakh each to develop a
                                        working prototype of the proposed
                                        solution within two months duration(max)
                                    </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card classname="col-md-3">
                            <ListGroup>
                                <ListGroup.Item>
                                    <Card.Title class="text-center p-2 font-weight-bold">
                                        <b>Prototype to Product</b>
                                    </Card.Title>
                                    <Card.Title class="text-center">
                                        Stage 2
                                    </Card.Title>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p className="text-center">
                                        10 proposalswill be shortlisted and
                                        provided financial support to the tune
                                        of Rs. 7.5 Lakh each to develop a
                                        working prototype of the proposed
                                        solution within two months duration(max)
                                    </p>
                                    <p className="text-center">
                                        • Towards sourcing and installation of
                                        devices/solutions deployment
                                    </p>
                                    <p className="text-center">
                                        • Towards logistics and other
                                        contingency expenses V 0 lakhs each
                                    </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card classname="col-md-3">
                            <ListGroup>
                                <ListGroup.Item>
                                    <Card.Title class="text-center p-2 font-weight-bold">
                                        <b>Product Deployment</b>
                                    </Card.Title>
                                    <Card.Title class="text-center">
                                        Stage 3
                                    </Card.Title>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p className="text-center">
                                        Based on evaluation, one winner and two
                                        runner-ups will be selected and
                                        supported by 50 Lakh (winner) and 20
                                        Lakh each (runner-ups).
                                    </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Card.Body>
                </Card>
            </CardDeck>
            <Card>
                <Card.Title className="text-center p-3 mb-1 font-weight-bold">
                    <b>Contacts</b>
                </Card.Title>
                <Card.Body className="row">
                    <div className="col-md-3 m-4">
                        <h5>MeitY Startup Hub(MSH)</h5>
                        <p>
                            Ministry of Electronics and Information
                            Technology(MeitY)
                        </p>
                        <p>Electronics Niketan, 6 CGO Complex</p>
                        <p>New Delhi 110003</p>
                    </div>
                    <div className="col-md-3 m-4">
                        <p>email:- ictgcw@cdac.in</p>
                        <p>Phone:- 080-25093549</p>
                    </div>
                    <div className="col-md-3 m-4">
                        <p>email:- meity-sthub@gov.in</p>
                        <p>Phone:- 011-24301419</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};
export default AboutUS;
