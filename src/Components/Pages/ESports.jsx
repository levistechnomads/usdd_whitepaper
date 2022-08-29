import React, { useState } from 'react'

const ESports = () => {
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
                                <div className="pt-5 pl-3  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                    USDD ESports Team
                                </div>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                            </div>

                            <div className="col-md-3 col-lg-2 copyline col-xxl-3">
                                <div className="lineRight" onClick={copyToClip}>

                                    <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>
                                    {/* <span className="IconTitle h-25 "><i className="fa-solid fa-align-center "> </i> Outline</span>
                                    <a className="nav-link " href="#Athletes"> USDD Athletes</a>
                                    <a className="nav-link " href="#Ambassadors"> USDD Ambassadors</a> */}
                                </div>


                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7" id='Athletes'>
                                <div className="SubTilteBorder pt-2"></div>
                                <p className="text-muted data  RoadTitle">USDD Athletes</p>

                                {/* <hr style={{ marginLeft: 50, marginTop: 30 }}></hr> */}
                                <p className=" text-muted mt-5 mt-md-4 data">USDD will launch its ESports branch in Q4 2022. Aiming to establish multiple top tier teams who can compete and excel at the highest level in Esport games like League of Legends, Valorant, Counter Strike, DOTA 2 and many more. We will be scouting the best up-and-coming gamers who want to be part of one…</p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                <p className=" text-muted mt-5 mt-md-4 data">We will be one of the first gaming organizations that will be a part of the WEB3 movement. In the beginning of 2023 we will open up our USDD Facility, where we can guide and train our athletes. Here they can focus on becoming the best version of themselves and dedicate their time to improve team chemistry and coordination.</p>
                            </div>
                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                <p className=" text-muted mt-5 mt-md-4 data">We want to give everyone that's part of this movement a chance to participate in this opportunity, one where they can achieve their dream of becoming a Professional gamer. DRIP gives hard working and talented people a chance to be at the highest podium.</p>
                            </div>


                        </div>
                        {/* <button onClick={navigate("/play")}>Next Page</button>  */}
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">

                        <div className="tab-pane fade  rounded bg-white show active " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className="row">
                                <div className="col-md-9 col-lg-10  col-xxl-8 d-flex" id="Ambassadors">
                                    <span className=" playTitle pl-xl-5 ">
                                        USDD Ambassadors
                                    </span>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                    <div className="SubTilteBorder pt-2"></div>
                                    <p className="text-muted data RoadTitle">USDD Athletes</p>
                                    <p className=" text-muted mt-5 mt-md-4 data">Gaming and/or Normal content creators may also apply to be a part of USDD content team by joining the USDD Ambassador program. Their role will be to keep expanding our brand and to keep USDD Trending on all social media platforms. USDD will heavily focus on content creation and will be onboard Twitch Streamers and other Social media Influencers in They will primarily focus on making content for USDD but will not compete in any of the professional tournaments. USDD Ambassadors will make sure to keep our brand trending at all times and to further increase our brand awareness.</p>
                                </div>
                                <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                    <p className=" text-muted mt-5 mt-md-4 data">We will start off with hiring micro/ upcoming Influencers and Twitch streamers.and have them onboard our USDD Ambassadors Program. They will primarily focus on making unique entertaining content for USDD but will not compete in any of the professional tournaments. Our USDD Ambassadors and Esport Teams will make sure to keep our brand trending at all times and to further increase our brand awareness.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default ESports