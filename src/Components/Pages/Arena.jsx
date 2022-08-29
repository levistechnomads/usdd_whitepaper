import React, { useState } from 'react'

const Arena = () => {
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
                                <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                Conclusion
                                </h3>
                                {/* <h6 className="pt-2 pl-5 subTitle">USDD Ecosystem.</h6> */}
                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            <div className="col-md-3 col-lg-2 copyline col-xxl-3">
                                <div className="lineRight" onClick={copyToClip}>

                                    <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">USDD uses ideas from Uniswap and AMMs to build a novel hybrid stablecoin design never seen before. In a Uniswap pool, the ratio of asset A and B has to be proportional due to the constant product function. The LP token is just a pro rata claim on the pool + fees so it is usually increasing in value (if fees higher than impermanent loss) or loses value (if impermanent loss greater than fees). The LP token is just passive claims on the pool. </p>
                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">USDD takes that idea and turns it over to design a unique stablecoin. The LP token is the stablecoin, USDD. It is the object of stabilization and always mintable/redeemable for $1 worth of collateral and the governance (USDD) token at the collateral ratio. This ratio of the two assets (collateral and USDD) dynamically changes based on the price of the stablecoin. If the stablecoin price is dropping, then the protocol tips the ratio in favor of collateral and less in the USDD token to regain confidence in USDD. An arbitrage opportunity arises for people wanting to put in collateral into the pool at the new ratio for discounted USDD which the protocol mints for this "recollateralization swap." This recollateralizes the protocol to the new, higher collateral ratio.</p>
                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">If USDD is over $1, then the protocol tips the collateral ratio to the USDD token to measure the market's confidence in more USDD supply being stabilized algorithmically. As USDD becomes more algorithmic, the excess collateral can go back to USDD holders through a buyback shares function that anyone can call to burn their USDD tokens for an equal value of excess collateral. The "buyback swap" function always keeps value accruing to the governance token any time there is excess fees/collateral/value in the system. 
</p>
                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">This 'USDD dance' is always happening and uses AMM game theory to test different ratios of collateralization, incentivize recollateralizing through arbitrage swaps, and redistribute excess value back to USDD holders through a buyback swap. The protocol starts at a 100% collateral ratio at genesis and might or might not ever get to purely algorithmic. The novel insight is to use market forces itself to see how much of a stablecoin can be algorithmically stabilized with its own seigniorage token so that it keeps a tight band around $1 like fiatcoins. Purely algorithmic/rebase designs like Basis, ESD, and Seigniorage Shares have wildly fluctuating prices as much as +-40% around $1 that take days/weeks to stabilize before going through another cycle. This is counterproductive and assumes the market actually wants/needs a stablecoin with 0% collateralization. USDD doesn't make this assumption. Instead, it measures the market's preference and finds the actual collateral ratio which holds a stablecoin tightly around $1, periodically testing small differences in the ratio when the price of USDD slightly rises/drops. USDD uses AMM concepts to make a real-time fractional-algorithmic stablecoin that is as fast at price recovery as Uniswap is at keeping trading pools correctly priced. </p>
                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">As this system gets more efficient and the velocity of the system increases, collateral pools can include other assets instead of stablecoins like volatile crypto such as ETH and wrapped BTC. As the price of the volatile asset rises, users will use the buy back shares function to distribute the excess value to USDD holders. When the price of the volatile collateral drops, there is an instant arbitrage opportunity to put in more crypto for discounted USDD to keep the collateral ratio at the target. Just like a Uniswap trading pair keeps its constant product function balanced, the USDD Protocol keeps its target collateral ratio balanced to what the market needs for USDD to be $1.  </p>
                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">The above example uses "collateral" and "USDD" as the two assets within the protocol, but in reality, USDD can have multiple pools of collateral and multiple algorithmic token pools with weights, similar to Balancer. The protocol currently has USDC collateral pools and just 1 algorithmic token: USDD. In v2, we will release a second algorithmic token, the USDD Bond token (FXB) which represents pure debt with an interest rate attached.</p>
                            </div>

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">We believe that the fractional-algorithmic design of USDD is paradigm shifting for stablecoins. It is fast, real-time balancing, algorithmic, governance-minimized, and extremely resilient. We strongly believe the USDD protocol can become a foil to Bitcoin's "hard money" narrative by demonstrating algorithmic monetary policy to create a trustless stablecoin that all of the crypto community can embrace</p>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            </div>


        </>
    )
}

export default Arena