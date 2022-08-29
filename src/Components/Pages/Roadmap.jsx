import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
const Roadmap = () => {
    const [copySuccess, setCopySuccess] = useState("")



    async function copyToClip() {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess("Copied");
        alert("Copied to clipboard");
    }
    return (
        <>
            <div className="container-fluid d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                <h3 className="pt-5 pl-5 pl-xl-5 pt-md-4  pl-md-0 intTitle">
                                    Roadmap
                                </h3>

                                <hr className='pl-lg-0 col-md-9 col-lg-10 col-xl-8 col-xxl-8 pl-md-0 hrset' ></hr>
                            </div>

                            <div className="col-md-3 col-lg-3 copyline ">
                                <div className="lineRight" onClick={copyToClip}>

                                    <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                </div>
                                <div className="pt-3"> </div>
                                <div className="lineRight lineRightNone  ">
                                    <div className="" >
                                        {/* <i className="fa-solid fa-align-justify"></i> */}
                                        <span className="IconTitle"><i className="fa-solid fa-align-center"> </i> Outline</span>
                                        <a className="nav-link" href="#Products"> Products and Utilities</a>
                                    </div>
                                </div>

                                <div className="lineRight lineRightNone">
                                    <div className="" >
                                        {/* <i className="fa-solid fa-align-justify"></i> */}

                                        <a className="nav-link" href="#Sales"> Sales</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row ">


                            <div className="col-md-9 Roadtileset  " id="Products">
                                <p className="RoadTitle">Products and Utilities</p>
                                <div className='roadMap'>Q2 2022
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li">Writing Whitepaper</ListGroup.Item>
                                        <ListGroup.Item as="li">Prototype Website</ListGroup.Item>
                                        <ListGroup.Item as="li"> Introduction Launchpad</ListGroup.Item>
                                        <ListGroup.Item as="li"> Launch $USDD</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                            <div className="col-md-9 Roadtileset" >

                                <div className='roadMap'> Q4 2022
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li">Launch $USDD token</ListGroup.Item>
                                        <ListGroup.Item as="li">Minting Mechanism</ListGroup.Item>
                                        <ListGroup.Item as="li"> Establishing ESports team</ListGroup.Item>
                                        <ListGroup.Item as="li"> Burning Mechanism </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                            <div className="col-md-9 Roadtileset " id="Sales">
                                <p className="RoadTitle">Final Listing</p>

                                <div className='roadMap'>Q1 2023
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li">Pre-Sale USDD</ListGroup.Item>
                                        <ListGroup.Item as="li"> Token private-sale</ListGroup.Item>
                                        <ListGroup.Item as="li">Token pre-sale</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            </div>

        </>
    )
}

export default Roadmap