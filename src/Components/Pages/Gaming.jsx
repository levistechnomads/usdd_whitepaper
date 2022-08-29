import React, { useState } from 'react'

const Gaming = () => {
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
                                <h6 className=" playTitle pt-md-4 pl-xl-5 pl-md-0 ">
                                    Redeeming
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
                                <p className=" text-muted mt-5  mt-md-4 data">Redeeming USDD is done by rearranging the previous system of equations for simplicity, and solving for the units of collateral, , and the units of USDD.
                                </p>
                            </div>

                            {/* <img src='./PriceStability/eq1.png' style={{width:500 ,height:500}} alt=""></img> */}
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className=" pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data"> <b>NOTE: These examples do not account for the minting and redemption fees, which are set between 0.20% and 0.45% </b> </p>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>


                </div>

            </div>

        </>
    )
}

export default Gaming