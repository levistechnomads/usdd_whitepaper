import React, { useState } from 'react'

const Funding = () => {
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
                                <h3 className="pt-5 pl-5  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                    Tokenomics

                                </h3>

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
                                <p className=" text-muted mt-5 data">Cryptocurrencies like Bitcoin (BTC) and Ethereum (ETH) offer a solution to this issue by being more decentralized than fiat currency and more liquid than gold; however, cryptocurrencies still experience price volatility that is counterproductive to their use as a stable medium of exchange. Cryptocurrencies have been on a rollercoaster ride for the past few years with highs and lows. A stablecoin is a cryptocurrency that has low volatility against the US dollar or other major world currencies.</p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                <p className=" text-muted mt-5 data">Crypto-collateralised use crypto instead of fiat assts as collateral. These projects usually follow under the umbrella of Decentralised Finance (DeFi). A great example is DAI, which has been created by MakerDAO. To create DAI, you need to provide some other crypto as collateral. This provides the necessary liquidity to the system. There is also one more token called MKR. The MKR token provides backstop liquidity in case the system accumulates bad debt, and holding MKR also entitles you to vote on how the Maker protocol is run.</p>

                                <p className=" text-muted mt-5 data">The protocol ensures that Frax equivalent to a US dollar is always backed by at least $1 in reserves. The interesting part is that Frax is partially collateralised using both ETH but also its native FXS token to provide collateral for the FRAX stablecoin. The algorithms expand or contract supply in order to keep the peg stable.</p>


                                <p className=" text-muted mt-5 data">Another great example of an algorithmic stablecoin is Terra. Much like in Frax, there are two tokens, Terra and Luna, that help stabilise each other, like the Earth and the Moon. Terra, however, aspires to create an ecosystem, whereas Frax is only aiming at being a stablecoin. Also, Terra is a pure algorithmic stablecoin, whereas Frax is also using ETH as a collateral.</p>


                                <p className=" text-muted mt-5 data">Based on those factors we can start our research into some popular stablecoins. Below you can see a table summarising peg stability. The maximum deviation was calculated over the whole history of a project and describes the maximum deviation from a peg ever recorded (up or down). The standard deviation was calculated, in a similar manner, over the lifetime of the project.</p>

                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            </div>
           
        </>
    )
}

export default Funding