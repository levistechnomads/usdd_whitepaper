import React, { useState } from 'react'

const Marketplace = () => {
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
                                    USDD NFT Marketplace
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

                            <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-8">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 data">USDD will develop its own Ethereum NFT Marketplace. Our team has made sure that the USDD Marketplace will stand out from the competition and has therefore developed a variety of unique services and features. The Marketplace will offer the standard regular trading of digital assets on the Ethereum chain. The process of buying and selling of NFTs will come with a 2% trading fee. NFT Collections may set their own transactional fee which has to be within a range of minimum 0% to a maximum of 10%. The Beta version of the NFT Marketplace is expected to roll out in Q4 of 2022.</p>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            </div>
        </>
    )
}

export default Marketplace