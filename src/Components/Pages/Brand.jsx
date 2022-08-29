import React, { useState } from 'react'

const Brand = () => {
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
                                <h6 className=" playTitle  pt-md-4  pl-xl-5 pl-md-0">
                                Collateral Investor
                                </h6>

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
                                <p className=" text-muted mt-5 mt-md-4 data">To stand out from the usual merch that NFT projects produce. We at USDD had to come up with something truly new and unique. Our project stands for exclusivity and this is something we’re bringing back to you guys by creating our own clothing brand. We will be designing exclusive merch that is seen worn by the Dripping Dino and Designer Dino NFTs. We'll also focus on making exclusive USDD Hoodies, T-Shirts, Jackets and Blouses.  </p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10     col-xxl-7">

                                <p className=" text-muted mt-5 mt-md-4 data">We'll also be producing limited edition collaboration drops between USDD and its ESports athletes. Making sure that our community stays dripped out while supporting their favorite streamer/athlete. All clothing pieces will be carefully designed and crafted by stylists and manufacturers who have a ton of experience in the Fashion industry. Our clothing brand will in no way shape focus on being a form of fast fashion.</p>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            </div>

        </>
    )
}

export default Brand