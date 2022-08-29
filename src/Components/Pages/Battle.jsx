import React, { useState } from 'react'
import "../Pages/css/MainNav.css"
const Battle = () => {
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
                                <h3 className="pt-5 pl-5 pl-lg-2 pt-md-4  pl-md-0  pl-xl-5 intTitle">
                                Introduction (USDD)

                                </h3>
                                {/* <h6 className="pt-2 pl-5 subTitle">USDD Ecosystem.</h6> */}
                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            <div className="col-md-3 col-lg-2 copyline">
                                <div className="lineRight" onClick={copyToClip}>

                                    <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">The USDD Share token (USDD) is the non-stable, utility token in the protocol. It is meant to be volatile and hold rights to governance and all utility of the system. It is important to note that we take a highly governance-minimized approach to designing trustless money in the same ethos as Bitcoin. We eschew DAO-like active management such as MakerDAO. The less parameters for a community to be able to actively manage, the less there is to disagree on. Parameters that are up for governance through USDD include adding/adjusting collateral pools, adjusting various fees (like minting or redeeming), and refreshing the rate of the collateral ratio. No other actions such as active management of collateral or addition of human-modifiable parameters are possible other than a hardfork that would require voluntarily moving to a new implementation entirely. </p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 d-flex">

                                <p className=" text-muted mt-5 mt-md-4 data">The USDD token has the potential of upside utility and downside utility of the system, where the delta changes in value are always stabilized away from the USDD token itself. USDD supply is initially set to 100 million tokens at genesis, but the amount in circulation will likely be deflationary as USDD is minted at higher algorithmic ratios. The design of the protocol is such that USDD would be largely deflationary in supply as long as USDD demand grows.  </p>

                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 d-flex">

                                <p className=" text-muted mt-5 mt-md-4 data">The USDD token’s market capitalization should be calculated as the future expected net value creation from seigniorage of USDD tokens in perpetuity, the cash flow from minting and redemption fees, and utilization of unused collateral. Additionally, as the market cap of USDD increases, so does the system’s ability to keep USDD stable. Thus, the priority in the design is to accrue maximal value to the USDD token while maintaining USDD as a stable currency. As Robert Sam’s described in the original Seigniorage Shares whitepaper: “Share tokens are like the asset side of a central bank’s balance sheet. The market capitalisation of shares at any point in time fixes the upper limit on how much the coin supply can be reduced.” Likewise, the USDD protocol takes inspiration from Sams’ proposal as USDD is a hybrid (fractional) seigniorage shares model.</p>

                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 d-flex">

                                <p className=" text-muted mt-5 mt-md-4 data">In May 2020, the protocol now allows USDD holders to lock up USDD tokens to generate veUSDD and earn special boosts, special governance rights, and AMO profits. Check the in depth veUSDD specs for more information on how all veUSDD features function.</p>
                                
                            </div>

                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            </div>


        </>
    )
}

export default Battle