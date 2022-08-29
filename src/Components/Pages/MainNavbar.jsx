import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Home from "./Intro/Home"

// import { Link, useLocation } from "react-router-dom"
import "./css/MainNav.css"
import Accordion from 'react-bootstrap/Accordion';

import { Link } from "react-router-dom";
import PlaytoEarn from "./Intro/PlaytoEarn";
import Battle from "./Battle";
import Arena from "./Arena";
import Swapping from "./Swapping";
import Gaming from "./Gaming";
import Launchpad from "./Launchpad";
import Marketplace from "./Marketplace";
import Dinos from "./Dinos";
import Tokenomics from "./Tokenomics";
import Funding from "./Funding";
import ESports from "./ESports";
import Brand from "./Brand";
import Roadmap from "./Roadmap";
import { Route, Routes } from 'react-router';
const MainNavbar = () => {

    // const location = useLocation()
    // const { pathname } = location

    return (
        <>



            {/*  */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <div className="container-fluid ">
                    <Row>

                        <Col md={3} xl={2} sm={2} lg={3} className="apptoll_side_nav colBorder slideTab">
                            +
                                <p className="intro text-uppercase"> All branches within the USDD Ecosystem</p>
                                <Accordion defaultActiveKey="0" className="AccText">

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className=""> <Nav.Link eventKey="second" href="#playtpEarn" className="AccText">
                                            WhitePaper (Core) - USDD v1
                                        </Nav.Link></Accordion.Header>
                                        <Accordion.Body >
                                            <div className="accLineSet">

                                                <Nav.Link eventKey="Battle" href="#battlepass" className="AccText ">
                                                    Introduction

                                                </Nav.Link>

                                                <Nav.Link eventKey="Launchpad" href="#Launchpad" className="AccText" >
                                                    Price Stability
                                                </Nav.Link>
                                                <Nav.Link eventKey="Arena’s" href="#arena’s" className="AccText">

                                                Conclusion
                                                </Nav.Link>
                                            </div>


                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

                                <Accordion defaultActiveKey="0">

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><Nav.Link eventKey="Marketplace" href="#marketplace" className="AccText">
                                            USDD MInting & Redeeming
                                        </Nav.Link></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="SwappingLine">
                                                <Nav.Link eventKey="Swapping" href="#Swapping" className="AccText">
                                                Minting
                                                </Nav.Link>
                                                <Nav.Link eventKey="Gaming" href="#Gaming" className="AccText">
                                                Redeeming
                                                </Nav.Link>

                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>


                                <Nav.Item>
                                    <Nav.Link eventKey="Dinos" href="#Dinos" className="AccText">
                                        USDD as a NFT Collective
                                    </Nav.Link>
                                </Nav.Item>

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className="btnBorSet">
                                            <Nav.Link eventKey="Tokenomics" href="#tokenomics" className="AccText">
                                                $USDD Tokenomics
                                            </Nav.Link></Accordion.Header>
                                        <Accordion.Body>

                                            <div className="FundingLine">
                                                <Nav.Link eventKey="Funding" href="#Funding" className="AccText">
                                                    Tokenomics
                                                </Nav.Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                                <Nav.Item>
                                    <Nav.Link eventKey="ESports" href="#eSports" className="AccText">
                                        USDD ESports Team
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Brand" href="#brand" className="AccText">
                                    Collateral Investor
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Roadmap" href="#roadmap" className="AccText">
                                        Roadmap
                                    </Nav.Link>
                                </Nav.Item>
                            
                        </Col>



                        <Col md={7} xl={9} lg={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Home />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <PlaytoEarn />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Battle">
                                    <Battle />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Arena’s">
                                    <Arena />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Marketplace">
                                    <Marketplace />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Swapping">
                                    <Swapping />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Gaming">
                                    <Gaming />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Launchpad">
                                    <Launchpad />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Dinos">
                                    <Dinos />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Tokenomics">
                                    <Tokenomics />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Funding">
                                    <Funding />
                                </Tab.Pane>
                                <Tab.Pane eventKey="ESports">
                                    <ESports />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Brand">
                                    <Brand />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Roadmap">
                                    <Roadmap />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </div>
            </Tab.Container>


        </>
    );
};

export default MainNavbar;
