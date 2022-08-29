import React, { useState } from 'react'

const Dinos = () => {
    const [copySuccess, setCopySuccess] = useState("")



    async function copyToClip() {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess("Copied");
        alert("Copied to clipboard");
    }
    return (
        <div className="container-fluid d-lg-block d-xl-block d-md-block">


            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <img src="./Img/Drp.png" width="100%" height="300px" alt="img"></img>

                    <div className="row">
                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                USDD use Case 
                            </h3>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-xxl-12">
                                    <h6 className="pt-2 pt-md-4 pl-xl-5 pl-md-0 pl-5" style={{ fontSize: 16 }}>Designer Dinos: The genesis Solana NFT collection developed by USDD
                                        <br></br> Dripping Dinos: The 2nd Ethereum NFT collection developed by USDD</h6>
                                </div>


                            </div>
                            {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                        </div>

                        <div className="col-md-3 col-lg-2 copyline col-xxl-3">
                            <div className="lineRight" onClick={copyToClip}>

                                <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                            </div>
                        </div>

                    </div>
                    <div className="row">


                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7">
                            <div className="SubTilteBorder pt-2"></div>
                            <p className=" text-muted mt-5 data">DRIP’s first step will be creating its genesis Solana NFT collection called: Designer Dinos. Starting off by designing 8000 exceptional looking 2D NFTs that will go above and beyond every expectation. We wanted to make sure that each NFT would look unique and stand out in its own way, hence why we have made sure to create over 200+ different types of traits.USDD will launch the project using Magiceden's well-known Launchpad system, a place where our investors can easily mint the Designer Dinos NFTs and track them immediately on their Marketplace.</p>
                        </div>
                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                            <p className=" text-muted mt-5 data">Holding the NFT will grant you exclusive access and perks to all the products and utilities that USDD will develop in the upcoming years. You'll receive guaranteed whitelist spots on our NFT Launchpad, a free lifetime long Battle Pass for our Play-to-Earn game, Designer merchandise, access to IRL events and much more.</p>
                        </div>
                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                            <p className=" text-muted mt-5 data">DRIP’s first step will be creating its genesis Solana NFT collection called: Designer Dinos. Starting off by designing 8000 exceptional looking 2D NFTs that will go above and beyond every expectation. We wanted to make sure that each NFT would look unique and stand out in its own way, hence why we have made sure to create over 200+ different types of traits.USDD will launch the project using Magiceden's well-known Launchpad system, a place where our investors can easily mint the Designer Dinos NFTs and track them immediately on their Marketplace.</p>
                        </div>
                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7 ">

                            <p className=" text-muted mt-5 data">After launching the first collection on Solana, USDD will then focus its attention to the next step in its Roadmap. The project will launch its second collection on Ethereum in the months following the Solana collection. The genesis Ethereum collection will be called Dripping Dinos and its purpose: to re-image and up the standard by creating the next generation of ETH NFTs. Bringing never seen before utilities to the WEB3 space and giving access to even more exclusive perks to its holders within its USDD ecosystem.</p>
                        </div>
                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                            <p className=" text-muted mt-5 data">Being a Dripping Dino will of course grant you exclusive access for the variety of products and utilities that the USDD provides ecosystem offers (mentioned above). But holding the ETH version will act as a premium membership that will unlock more perks and rewards within each branch of the project.</p>
                        </div>

                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                            <p className=" text-muted mt-5 data">We know that as with most Ethereum NFT Collections, gas fees withhold the majority of beginner investors to join in on many new projects. At USDD We want to make sure that our investors will not waste their capital on unnecessary high gas fees. Hence why will implement a gas optimized smart contract called ERC-721X to combat this hurdle. The contract will reduce mint and transactional fees up to 75% from the standard fees, making sure that everyone can be a part of the USDD movement.</p>
                        </div>
                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                            <h6 className=" text-muted mt-5 data ">USDD’s aim with both NFT collections is to create and sustain a loyal driven community, a group of investors that is ready to be on the frontier of a new movement within WEB3.</h6>
                        </div>


                    </div>
                    {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                </div>


            </div>

        </div >


    )
}

export default Dinos