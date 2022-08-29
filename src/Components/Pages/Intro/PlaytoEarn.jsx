import React, { useState } from 'react'
import "../css/MainNav.css"
// import ".."
const PlaytoEarn = () => {
    const [copySuccess, setCopySuccess] = useState("")



    async function copyToClip() {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess("Copied");
        alert("Copied to clipboard");
    }
    return (
        <div className="container-fluid mobileView d-lg-block d-xl-block d-md-block " id='PlaytoEarn'>
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                    <div className="row">
                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8" >
                            <h6 className=" playTitle pl-xl-5">
                                Play-to-Earn Game:
                                Nightwatch
                            </h6>
                            {/* <h6 className="pt-2 pl-5 subTitle">USDD Ecosystem.</h6> */}
                            {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                        </div>

                        <div className="col-md-3    col-lg-2 col-xxl-3 copyline">
                            <div className="lineRight" onClick={copyToClip}>

                                <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                            </div>
                        </div>

                    </div>
                    <div className="row">

                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-7">
                            <div className="SubTilteBorder pt-2"></div>
                            <p className=" text-muted mt-5 mt-md-4 data">One of USDD’s biggest future endeavors will be creating our Play-to-Earn game called Nightwatch. The development will start in Q4 of 2022 and will take several months of building and testing before the beta version for PC will roll out. Nightwatch will be a free Play-to-Earn survival/shooter/building game, where players can choose between Singleplayer, CO-OP or Multiplayer. It will run on the new Unreal Engine 5 making this one of the first truly immersive blockchain games out there. Players can opt to work together to achieve in-game rewards and better perks, which they can then choose to either trade or swap as NFT's on our Marketplace. Outside Investors can then buy up these digital assets to either flip, or use them in the game themselves. The Items will have different kinds of rarities and perks which will determine their intrinsic value. Within the game, you will have the option to connect your De-Fi wallet, which will function as your in-game inventory. All the in-game items within Nightwatch such as weapons, armor and skins will be stored in your wallet as NFTs. You’ll then be able to either swap or trade these items on our NFT marketplace with other players/investors.</p>
                        </div>


                    </div>
                    {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                </div>


            </div>

        </div>

    )
}

export default PlaytoEarn