import React, { useState } from 'react'

const Swapping = () => {
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
                            <div className="col-md-9 col-lg-10 col-xl-8" >
                                <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  intTitle">
                                Minting
                                </h3>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            <div className="col-md-3 col-lg-2 copyline">
                                <div className="lineRight" onClick={copyToClip}>

                                    <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                </div>
                                <div className="h-25"> </div>
                                <div className="lineRight lineRightNone">
                                    <div className="" >
                                        {/* <i className="fa-solid fa-align-justify"></i> */}
                                        <span className="IconTitle"><i className="fa-solid fa-align-center"> </i> Outline</span>
                                        <a className="nav-link" href="#Swap">  Swap Process</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                <div className="SubTilteBorder pt-2"></div>
                                <p className=" text-muted mt-5 mt-md-4 data">All USDD tokens are fungible with one another and entitled to the same proportion of collateral no matter what collateral ratio they were minted at. This system of equations describes the minting function of the USDD Protocol:</p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                <p className=" text-muted mt-5 mt-md-4  data">437.78 USDD are minted in this scenario. Proportionally, half of the newly minted USDD are backed by the value of USDC as collateral while the remaining 50% of USDD are not backed by anything. 62.54 USDD is burned and removed from circulation, half the value of the newly minted USDD. Notice that the price of the collateral affects how many USDD can be minted – USDD is pegged to 1 USD, not 1 unit of USDC. If not enough USDD is put into the minting function alongside the collateral, the transaction will fail with a subtraction underflow error.</p>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>
                </div>

            </div>



        </>
    )
}

export default Swapping