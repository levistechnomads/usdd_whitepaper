import React, { useState } from 'react'

const Tokenomics = () => {
    const [copySuccess, setCopySuccess] = useState("")

    // const textAreaRef = useRef(null)

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
                                <h3 className="pt-5 pl-5 pl-xl-5  pt-md-4  pl-md-0  intTitle">
                                    $DRIP Tokenomics

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

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">We at USDD are making sure that we are constructing a utility based NFT economy that produces continuous value for holders. That is why we have opted to develop a DAO which will support the project and will help create and fund all future plans and collections. The token that will fuel the DAO ecosystem will be our native token called ($DRIP). It will be issued to our holders who stake the Dino NFT’s. People who stake their NFT can earn a daily x amount of $DRIP tokens. We will implement additional institutions to our DAO, such as our NFT Marketplace, our Play-to-Earn Game: Nightwatch and the DRIP Liquidity Pool. These will all serve a specific role within our ecosystem and help support the value of $DRIP and keep providing value and utility to our NFT holders.The token's value will continue to be backed by revenue streams consisting of future projects and our Investment funds. Critical to this goal, is that we designed $DRIP with a fixed supply and deflationary mechanics. $DRIP will only be attainable by staking our NFTs, as a reward for providing liquidity to the $DRIP token or of course by purchasing the token itself. All additional information surrounding the tokenomics of the $DRIP token will be shared shortly before the token launch</p>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            </div>
        </>
    )
}

export default Tokenomics