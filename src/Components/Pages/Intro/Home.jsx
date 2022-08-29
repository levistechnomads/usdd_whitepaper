import React, { useState } from "react";

// import { Link, useNavigate } from "react-router-dom";



const Home = () => {

    const [copySuccess, setCopySuccess] = useState("")



    async function copyToClip() {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess("Copied");
        alert("Copied to clipboard");
    }
    return (
        <>



            <div className="container-fluid mobileView  d-lg-block d-xl-block d-md-block">


                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <img src="./Img/Drp.png" width="100%" height="300px" alt="img"></img>

                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-8  col-xxl-8">
                                <h3 className="pt-5 pl-5 pl-lg-2 pl-md-0 pl-xl-5 pt-md-4 intTitle">
                                USDD : USD DebtCoin Protocol
                                </h3>
                                <h6 className="pt-2 pl-5 pl-lg-2 pl-md-0 pl-xl-5 subTitle">A new category of decentralized stablecoin with a novel mechanism </h6>
                                {/* <hr className="ml-lg-1" style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 col-xxl-3 copyline">
                                <div className="lineRight" onClick={copyToClip}>

                                    <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder  pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4  data">USDD is the first fractional-algorithmic stablecoin protocol. USDD is open-source, permissionless, and entirely on-chain – currently implemented on Ethereum and 12 other chains. The end goal of the USDD protocol is to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply digital assets like BTC.</p>

                                <p className=" text-muted mt-5 mt-md-4  data">The USDD ecosystem has 2 stablecoins: USDD (pegged to the US dollar) & FPI (pegged to the US Consumer Price Index). The USDD Finance economy is composed primarily of the two stablecoins, a native AMM (USDDswap), and a lending facility.</p>

                                <p className=" text-muted mt-5 mt-md-4  data">Core concepts to understand the unified USDD Finance ecosystem include: </p>

                                <p className=" text-muted mt-5 mt-md-4  data"><b>Fractional-Algorithmic </b>– USDD is the first and only stablecoin with parts of its supply backed by collateral and parts of the supply algorithmic. The stablecoin (USDD) is named after the "fractional-algorithmic" stability mechanism.</p>

                                <p className=" text-muted mt-5 mt-md-4  data"><b>USDDswap, a native AMM </b>– USDDswap is the first AMM with time weighted average market maker orders used by the USDD Protocol for rebalancing collateral, mints/redemptions, expanding/contracting USDD supply, and deploying protocol owned liquidity onchain.</p>


                                <p className=" text-muted mt-5 mt-md-4  data"><b>USDDlend, permissionless lending markets </b>–  USDDlend is the lending facility for the USDD & FPI stablecoins allowing debt origination, customized non-custodial loans, and onboarding collateral assets to the USDD Finance economy.</p>


                                <p className=" text-muted mt-5 mt-md-4  data"><b>Crypto Native CPI Stablecoin</b>– USDD's end vision is to build the most important decentralized stablecoins in the world. The USDD Price Index (FPI) stablecoin is the first stablecoin pegged to a basket of consumer goods creating its own unit of account separate from any nation state denominated money.</p>


                                <p className=" text-muted mt-5 mt-md-4  data"><b>Four Tokens </b>– USDD is the stablecoin targeting a tight band around $1/coin. USDD Share (FXS) is the governance token of the entire USDD ecosystem of smart contracts which accrues fees, seigniorage revenue, and excess collateral value. FPI is the inflation resistant, CPI pegged stablecoin. FPIS is the governance token of the USDD Price Index and splits its value capture with FXS holders.</p>

 

                            </div>


                        </div>
                        {/* <button onclick="">Click Me</button> */}

                    </div>


                </div>

            </div>

        </>
    );
};

export default Home;
