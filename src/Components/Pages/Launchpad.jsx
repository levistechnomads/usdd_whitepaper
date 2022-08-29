import React, { useState } from 'react'

const Launchpad = () => {
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
                                   Price Stability
                                </h3>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            <div className="col-md-3 col-lg-2 copyline col-xxl-3">
                                <div className="lineRight" onClick={copyToClip}>

                                    <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                </div>
                                <div className="h-25"> </div>
                                <div className="lineRight lineRightNone">
                                    <div className="" >
                                        {/* <i className="fa-solid fa-align-justify"></i> */}
                                        <span className="IconTitle"><i className="fa-solid fa-align-center"> </i> Outline</span>
                                        <a className="nav-link" href="#Packages"> Consulting Packages</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">

                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder  pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4  data">Many stablecoin protocols have entirely embraced one spectrum of design (entirely collateralized) or the other extreme (entirely algorithmic with no backing). Collateralized stablecoins either have custodial risk or require on-chain overcollateralization. These designs provide a stablecoin with a fairly tight peg with higher confidence than purely algorithmic designs. Purely algorithmic designs such as Basis, Empty Set Dollar, and Seigniorage Shares provide a highly trustless and scalable model that captures the early Bitcoin vision of decentralized money but with useful stability. The issue with algorithmic designs is that they are difficult to bootstrap, slow to grow (as of Q4 2020 none have significant traction), and exhibit extreme periods of volatility which erodes confidence in their usefulness as actual stablecoins. They are mainly seen as a game/experiment than a serious alternative to collateralized stablecoins.</p>

                                <p className=" text-muted mt-5 mt-md-4  data">USDD attempts to be the first stablecoin protocol to implement design principles of both to create a highly scalable, trustless, extremely stable, and ideologically pure on-chain money. The USDD protocol is a two token system encompassing a stablecoin, USDD (USDD), and a governance token, USDD Shares (USDD). The protocol also has a pool contract which holds USDC collateral. Pools can be added or removed with governance.  </p>

                                <p className=" text-muted mt-5 mt-md-4  data">USDD stablecoins can be minted by placing the appropriate amount of its constituent parts into the system. At genesis, USDD is 100% collateralized, meaning that minting USDD only requires placing collateral into the minting contract. During the fractional phase, minting USDD requires placing the appropriate ratio of collateral and burning the ratio of USDD Shares (USDD). While the protocol is designed to accept any type of cryptocurrency as collateral, this implementation of the USDD Protocol will mainly accept on-chain stablecoins as collateral to smoothen out volatility in the collateral so that USDD can transition to more algorithmic ratios smoothly. As the velocity of the system increases, it becomes easier and safer to include volatile cryptocurrency such as ETH and wrapped BTC into future pools with governance.   </p>

                                <img src="./PriceStability/graph1.png" alt="123"></img>
                                <p className=" text-muted mt-5 mt-md-4  data">The supply/demand curve illustrates how minting and redeeming USDD stabilizes the price ( is quantity,  is price). At  the USDD's price is at . If there is more demand for USDD, the curve shifts right to  and a new price, , for the same quantity . In order to recover the price to $1, new USDD must be minted until  is reached and the  price is recovered. Since market capitalization is calculated as price times quantity, the market cap of USDD at  is the blue square. The market cap of USDD at  is the sum of the areas of the blue square and green square. For instance, in this example the new market cap of USDD would have been the same if the quantity did not increase because the increase in demand is simply reflected in the price, . Given a demand increase, market cap increases either by an increase in quantity (at a stable price) or through an increase in price. The green square and red square have the same area and thus would have added the same amount of value in market cap. On a side note, the half-shaded portion in the green square indicates the total value of USDD shares that would be burned if the new quantity of USDD was generated at a hypothetical collateral ratio of 66%. This is important to visualize because USDD market cap is intrinsically linked to USDD demand.    </p>
 

                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>
                </div>

            </div>




        </>
    )
}

export default Launchpad