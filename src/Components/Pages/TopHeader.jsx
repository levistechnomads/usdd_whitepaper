import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Pages/css/top.css"
import { Link, Route, Routes } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { ListGroup, Nav } from "react-bootstrap";
import Home from "./Intro/Home";
import PlaytoEarn from "./Intro/PlaytoEarn";

// import usdd from '/Img/USDD.png'
// import {logo} from ""


const TopHeader = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [copySuccess, setCopySuccess] = useState("")



    async function copyToClip() {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess("Copied");
        alert("Copied to clipboard");
    }
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("menu").style.opacity = "0";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("menu").style.opacity = "1";
    }

    return (
        <>

            <div className="container-fluid d-xxl-none d-xl-none d-lg-none d-md-none">
                <div className="d-flex justify-content-between mobileMenu" id="menu" style={{ background: "white", opacity: 1 }}>

                    <div style={{ fontSize: "40px", cursor: "pointer" }} onClick={openNav}>&#9776; </div>

                    <div className="d-flex mobilelogo " style={{ paddingTop: 10 }}>
                        {/* <div className=""> <img src={logo}/>\
                        </div> */}
                        <div className="titleName"> USDD Whitepaper</div>
                        <div className="navbarSlideLine"></div>
                    </div>

                    <Button className="btnmobile " onClick={handleShow}>
                        <i className="fa fa-search " aria-hidden="true"></i>
                    </Button>

                </div>
                <div id="myNav" className="overlay">
                    {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
                    <div className="overlay-content">

                        <p className="intro text-uppercase"> Introduction</p>
                        <a onClick={closeNav} className="target" href="#section1">DRIP. Introduction</a>
                        <p className="intro text-uppercase"> ALL BRANCHES WITHIN THE DRIP. ECOSYSTEM</p>
                        <a onClick={closeNav} href="#section2" > Play-to-Earn Game: Nightwatch</a>
                        <a onClick={closeNav} href="#section3">Battle Pass </a>
                        <a onClick={closeNav} href="#section4">Arena’s </a>
                        <a onClick={closeNav} href="#section5">DRIP. NFT Marketplace </a>
                        <a onClick={closeNav} href="#section6">NFT Swapping function </a>
                        <a onClick={closeNav} href="#section7"> DRIP. Gaming HUB </a>
                        <a onClick={closeNav} href="#section8"> NFT Launchpad </a>
                        <a onClick={closeNav} href="#section9"> Designer Dinos and Dripping Dinos // NFT Collections </a>
                        <a onClick={closeNav} href="#section10"> $DRIP Tokenomics</a>
                        <a onClick={closeNav} href="#section11"> Initial Funding</a>
                        <a onClick={closeNav} href="#section12"> DRIP. ESports Team</a>
                        <a onClick={closeNav} href="#section13"> Clothing Brand</a>
                        <a onClick={closeNav} href="#section14"> Roadmap</a>




                    </div>

                </div>


                <main className="mobileset" >


                    <section id="section1" className="d-lg-none d-md-none  sesctionSet" >
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <img src="./Img/Drp.png" width="100%" height="100px" alt="img"></img>

                                    <div className="row" >
                                        <div className="col-md-9 col-lg-10 col-xl-8  col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-lg-2 pl-md-0 pl-xl-5 pt-md-4 intTitle">
                                                DRIP. Introduction
                                            </h3>
                                            <h6 className="pt-2 pl-5 pl-lg-2 pl-md-0 pl-xl-5 subTitle">DRIP. Ecosystem.</h6>

                                        </div>

                                        <div className="col-md-3 col-lg-2 col-xl-2 col-xxl-3 copyline">
                                            <div className="lineRight" onClick={copyToClip}>

                                                <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                            <div className="SubTilteBorder  pt-2"></div>
                                            <p className=" text-muted mt-5 mt-md-4  data">DRIP. is the core organization which will extend its branches into the utilities and products that it will develop. Such as its two NFT collections called Designer and Dripping Dinos which will be the genesis NFT Collections on Solana and Ethereum. They will be the primary income source that will fund the project’s future plans and development. The team will keep building and expanding the DRIP. ecosystem to make sure that the project generates long term value which will assure its longevity.</p>
                                        </div>


                                    </div>
                                    {/* <button onclick="">Click Me</button> */}

                                </div>


                            </div>

                        </div>
                    </section>

                    <section id="section2" className="d-lg-none d-md-none sesctionSet" style={{ paddingTop: 70 }}>
                        <div className="container-fluid " id='PlaytoEarn'>
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8" >
                                            <h6 className=" playTitle pl-xl-5">
                                                Play-to-Earn Game:
                                                Nightwatch
                                            </h6>


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
                                            <p className=" text-muted mt-5 mt-md-4 data">One of DRIP.’s biggest future endeavors will be creating our Play-to-Earn game called Nightwatch. The development will start in Q4 of 2022 and will take several months of building and testing before the beta version for PC will roll out. Nightwatch will be a free Play-to-Earn survival/shooter/building game, where players can choose between Singleplayer, CO-OP or Multiplayer. It will run on the new Unreal Engine 5 making this one of the first truly immersive blockchain games out there. Players can opt to work together to achieve in-game rewards and better perks, which they can then choose to either trade or swap as NFT's on our Marketplace. Outside Investors can then buy up these digital assets to either flip, or use them in the game themselves. The Items will have different kinds of rarities and perks which will determine their intrinsic value. Within the game, you will have the option to connect your De-Fi wallet, which will function as your in-game inventory. All the in-game items within Nightwatch such as weapons, armor and skins will be stored in your wallet as NFTs. You’ll then be able to either swap or trade these items on our NFT marketplace with other players/investors.</p>
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section3" className="d-lg-none d-md-nonesesctionSet" style={{ paddingTop: 70 }}>
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-lg-2 pt-md-4  pl-md-0  pl-xl-5 intTitle">
                                                Battle Pass

                                            </h3>


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
                                            <p className=" text-muted mt-5 mt-md-4 data">The idea of a Battle Pass is a fairly familiar aspect of every game out there nowadays. We however noticed a trend where a lot of decentralized games have not explored this option for their ecosystems yet. Hence why we at DRIP. looked at ways to make our players earn in-game items from Nightwatch, by having them complete certain challenges and leveling up our Battle Pass. Leveling up can be done through completing certain missions and tasks within the game. There will be free rewards for all players no matter if they acquire the Pass or not, however Battle Pass holders will have access to exclusive skins/cosmetics.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 d-flex">

                                            <p className=" text-muted mt-5 mt-md-4 data">Designer and Dripping Dino holders will have free lifelong access to the Nightwatch Battle Pass. Non-holders can also acquire the Battle Pass by spending 10$ in ETH or spend an X amount of $DRIP tokens. The DRIP alternative will always be 10% lower than the Ethereum option. Incentivizing users to participate in the DRIP ecosystem and rewarding them at same time. Lastly, The Battle Pass will be reset every 3 months, players of Nightwatch who acquired the previous Pass can earn enough $DRIP. tokens by completing certain challenges, to buy the new Pass at the beginning of a new season.</p>
                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section4" className="d-lg-none d-md-none sesctionSet" >
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                                Arena’s
                                            </h3>


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
                                            <p className=" text-muted mt-5 mt-md-4 data">Once you have reached a certain level with the game you will have the option to compete in tournaments with the Nightwatch Arena. Here you'll have the option to wager your NFTs and put your Skins, Weapon or even your Dripping Dinos on the line. An Arena Battle will start when both players have accepted the wager and are ready to fight. Players will need to choose which of their Dino avatars they want to use in the battle. The winner of the Arena will then be rewarded with the rewards that were waged.</p>
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section5" className="d-lg-none d-md-none sesctionSet" >
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                                DRIP. NFT Marketplace
                                            </h3>


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
                                            <p className=" text-muted mt-5 data">DRIP. will develop its own Ethereum NFT Marketplace. Our team has made sure that the DRIP. Marketplace will stand out from the competition and has therefore developed a variety of unique services and features. The Marketplace will offer the standard regular trading of digital assets on the Ethereum chain. The process of buying and selling of NFTs will come with a 2% trading fee. NFT Collections may set their own transactional fee which has to be within a range of minimum 0% to a maximum of 10%. The Beta version of the NFT Marketplace is expected to roll out in Q4 of 2022.</p>
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section6" className="d-lg-none d-md-none sesctionSet" >
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8" >
                                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0  intTitle">
                                                NFT Swapping function
                                            </h3>


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
                                            <p className=" text-muted mt-5 mt-md-4 data">The NFT Swapping function will be one of the core features of our Marketplace. The function will serve as a middle ground where two different parties can exchange their NFTs between each other without selling their assets. Marketplace fees (2%) and Collection fees (up to 10%) usually take a big portion out of the total revenue when an investor gets rid of one of their assets. By eliminating the need for a sell transaction to take place, both the NFT Marketplace and Collection fees would be eliminated from the exchange process, therefore saving costs on both parties.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                            <p className=" text-muted mt-5 mt-md-4  data">DRIP. will open up a completely different market of digital trading, one where investors simply trade freely instead of getting burned down by all-kinds of fees. Making exchanging NFTs a very low-cost efficient process, where only the gas fees would play a role in trading. This feature will unlock and tap into new realms which are now unexplored, for example: trading low value NFT for higher and higher assets (Flipping). But also having digital assets that can be exchanged with different ratios (1:2, 1:5, 1:10), here you can imagine a single NFT being exchanged for multiple X amount of NFTs (this is in order to make sure both parties would get the same value when trading.)</p>
                                        </div>


                                    </div>

                                </div>
                                <div className="tab-content" id="v-pills-tabContent">

                                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div className="row">
                                            <div className="col-md-9 col-xl-8 d-flex" id='Swap'>
                                                <span className=" pl-5 pt-md-4  pl-xl-5 pl-md-0  playTitle ">
                                                    Swap Process
                                                </span>

                                            </div>

                                        </div>
                                        <div className="row">

                                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                                <div className="SubTilteBorder pt-2"></div>
                                                <p className=" text-muted mt-5 mt-md-4 data">The process of setting up these trades is incredibly easy. For this example we will use Party A and Party B. To start off, Party A will set up the trade and put up his own assets up for trading and send them to the smart contract. This is simply done by just connecting his crypto wallet (Metamask, Trust Wallet etc.) to our platform, selecting the NFT assets and then accepting the trade. The system will then automatically take the floor prices of his assets into account and will then show his trade and data onto our NFT Swap explore page.</p>
                                            </div>
                                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                                <p className=" text-muted mt-5 mt-md-4 data">Party B is exploring a variety of trades on our swapping explore pages, and he can put up his assets to any deal that he would like, in this example he chooses to put his assets up for the ones of Party A, this is done through the same process as we describe earlier (Important note, the closer he matches the value of the opposite party, the higher the chances of a successful deal). It's now up to Party A to decide if he thinks the value of Party B is reasonable and to either accept or decline this offer. When he accepts, the assets get swapped automatically by the smart contracts, and both parties get their desired assets from each other. If Party A declines then his assets are still up for trade and Party B will get a notification that the deal has been declined, he can then either go on to look for a different trade or try again to come back to Party A with a better offer.</p>
                                            </div>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </section>
                    <section id="section7" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h6 className=" playTitle pt-md-4 pl-xl-5 pl-md-0 ">
                                                DRIP. Gaming HUB
                                            </h6>


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
                                            <p className=" text-muted mt-5  mt-md-4 data">The DRIP. Marketplace will position itself as the center of all blockchain games, a global decentralized gaming HUB where all creators and project leaders can list their own in-game items/NFT collections. A marketplace where their players and investors can come together and easily join in on new games and WEB3 ecosystems. At DRIP. we noticed a problem with many WEB3 gaming projects, they often only list their decentralized games exclusively on their own website. This could lead to some hurdles where particular WEB3 beginners and gaming enthusiasts can be potentially left out from certain ecosystems, due to the lack of exposure to a certain project. </p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                            <div className=" pt-2"></div>
                                            <p className=" text-muted mt-5 mt-md-4 data">DRIP. will try to close this gap by providing a platform for all these games to be listed at one place. Making browsing a new Play-to-Earn game as easy as scrolling through any regular gaming store. Players/investors can experience a user-friendly environment, and get all the corresponding in-game items/NFTs they need from our platform. The Marketplace will be a place where they can opt to choose if they either want to swap or trade any of their items for other different digital assets on the DRIP. NFT Marketplace. </p>
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section8" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-xl-5 pt-md-4  pl-md-0 intTitle">
                                                NFT Launchpad
                                            </h3>


                                        </div>

                                        <div className="col-md-3 col-lg-2 copyline col-xxl-3">
                                            <div className="lineRight" onClick={copyToClip}>

                                                <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                            </div>
                                            <div className="h-25"> </div>
                                            <div className="lineRight lineRightNone">
                                                <div className="" >
                                                    {/* <i className="fa-solid fa-align-justify"></i> */}
                                                    <span className="IconTitle"><i className="fa-solid fa-align-center"> </i> Outline</span>
                                                    <a className="nav-link" href="#Packages"> Consulting Packages</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                            <div className="SubTilteBorder pt-2"></div>
                                            <p className=" text-muted mt-5 mt-md-4 data">DRIP. is developing a next generation Ethereum Launchpad where projects can launch their newly developed NFT projects with gas optimized smart contracts. Allowing lower mint and transaction costs for their investors, thereby setting the trend of a new wave of projects that won’t be as affected by high ETH gas fees. The launchpad will act as a minting and info page, where investors can easily buy in on New Ethereum projects by simply connecting their wallets to the DRIP. Marketplace and press the mint button.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                            <div className=" pt-2"></div>
                                            <p className=" text-muted mt-5 mt-md-4 data">We will have a strict onboarding procedure where we'll be doing excessive backchecking and have strict requirements for all new projects that want to participate onto our launchpad. This is in order to make sure that no bad actors can potentially harm any investors that use the DRIP. NFT marketplace. The protection of our investors is of the highest importance, hence why we'll also make sure to educate any newcomers to the WEB3 space, with guides on our website and have various pop ups to explain the majority of our features and utilities that we offer. This should ensure that anyone that enters our Marketplace can make their thoroughly based investment decisions on their own.</p>

                                        </div>


                                    </div>

                                </div>
                                <div className="tab-content" id="v-pills-tabContent">

                                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div className="row">
                                            <div className="col-md-9 col-xl-8 col-lg-10 d-flex" id='Packages'>
                                                <span className="pl-5 pl-lg-0 pt-md-4 pl-lg-5 pl-md-0  playTitle ">
                                                    Consulting Packages
                                                </span>

                                            </div>

                                        </div>
                                        <div className="row">

                                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                                <div className="SubTilteBorder pt-2"></div>
                                                <p className=" text-muted mt-md-4  mt-5 data">
                                                    Not only will DRIP. give new projects a platform to get exposure from new investors by being on the exclusive Launchpad page. We'll also help consult new projects with their development, marketing, onboarding support by offering them our consulting packages. New projects often experience growth pains in the early stages of developing their NFT collections, and sometimes struggle to outsource certain key aspects of their project.</p>
                                            </div>
                                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                                <p className=" text-muted mt-5 mt-md-4 data">Hence why DRIP will offer consulting on areas like the Roadmap, Utilities, Smart contract development, Marketing and more. We offer pre- and post mint support where our development team will offer the needed support to make sure the project has a successful Mint/Launch. DRIP. will charge a different price based on the amount of consulting and resources needed, which leads us to the different NFT consulting packages. There will be three packages where new NFT Collections can opt to choose from: Basic, Premium and Elite. The prices of these packages and exact details will be released once the Launchpad development is complete.</p>
                                            </div>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </section>
                    <section id="section9" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <img src="./Img/Drp.png" width="100%" height="300px" alt="img"></img>

                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                                Designer Dinos and Dripping Dinos <br></br>// NFT Collections
                                            </h3>
                                            <div className="row">
                                                <div className="col-md-12 col-lg-12 col-xxl-12">
                                                    <h6 className="pt-2 pt-md-4 pl-xl-5 pl-md-0 pl-5" style={{ fontSize: 16 }}>Designer Dinos: The genesis Solana NFT collection developed by DRIP.
                                                        <br></br> Dripping Dinos: The 2nd Ethereum NFT collection developed by DRIP.</h6>
                                                </div>


                                            </div>

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
                                            <p className=" text-muted mt-5 data">DRIP’s first step will be creating its genesis Solana NFT collection called: Designer Dinos. Starting off by designing 8000 exceptional looking 2D NFTs that will go above and beyond every expectation. We wanted to make sure that each NFT would look unique and stand out in its own way, hence why we have made sure to create over 200+ different types of traits.DRIP. will launch the project using Magiceden's well-known Launchpad system, a place where our investors can easily mint the Designer Dinos NFTs and track them immediately on their Marketplace.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">Holding the NFT will grant you exclusive access and perks to all the products and utilities that DRIP. will develop in the upcoming years. You'll receive guaranteed whitelist spots on our NFT Launchpad, a free lifetime long Battle Pass for our Play-to-Earn game, Designer merchandise, access to IRL events and much more.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">DRIP’s first step will be creating its genesis Solana NFT collection called: Designer Dinos. Starting off by designing 8000 exceptional looking 2D NFTs that will go above and beyond every expectation. We wanted to make sure that each NFT would look unique and stand out in its own way, hence why we have made sure to create over 200+ different types of traits.DRIP. will launch the project using Magiceden's well-known Launchpad system, a place where our investors can easily mint the Designer Dinos NFTs and track them immediately on their Marketplace.</p>
                                        </div>
                                        <div className="col-md-9  col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">After launching the first collection on Solana, DRIP. will then focus its attention to the next step in its Roadmap. The project will launch its second collection on Ethereum in the months following the Solana collection. The genesis Ethereum collection will be called Dripping Dinos and its purpose: to re-image and up the standard by creating the next generation of ETH NFTs. Bringing never seen before utilities to the WEB3 space and giving access to even more exclusive perks to its holders within its DRIP. ecosystem.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">Being a Dripping Dino will of course grant you exclusive access for the variety of products and utilities that the DRIP. provides ecosystem offers (mentioned above). But holding the ETH version will act as a premium membership that will unlock more perks and rewards within each branch of the project.</p>
                                        </div>

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <p className=" text-muted mt-5 data">We know that as with most Ethereum NFT Collections, gas fees withhold the majority of beginner investors to join in on many new projects. At DRIP. We want to make sure that our investors will not waste their capital on unnecessary high gas fees. Hence why will implement a gas optimized smart contract called ERC-721X to combat this hurdle. The contract will reduce mint and transactional fees up to 75% from the standard fees, making sure that everyone can be a part of the DRIP. movement.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7 ">

                                            <h6 className=" text-muted mt-5 data ">DRIP.’s aim with both NFT collections is to create and sustain a loyal driven community, a group of investors that is ready to be on the frontier of a new movement within WEB3.</h6>
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div >

                    </section>
                    <section id="section10" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-xl-5  pt-md-4  pl-md-0  intTitle">
                                                $DRIP Tokenomics

                                            </h3>


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
                                            <p className=" text-muted mt-5 mt-md-4 data">We at DRIP. are making sure that we are constructing a utility based NFT economy that produces continuous value for holders. That is why we have opted to develop a DAO which will support the project and will help create and fund all future plans and collections. The token that will fuel the DAO ecosystem will be our native token called ($DRIP). It will be issued to our holders who stake the Dino NFT’s. People who stake their NFT can earn a daily x amount of $DRIP tokens. We will implement additional institutions to our DAO, such as our NFT Marketplace, our Play-to-Earn Game: Nightwatch and the DRIP Liquidity Pool. These will all serve a specific role within our ecosystem and help support the value of $DRIP and keep providing value and utility to our NFT holders.The token's value will continue to be backed by revenue streams consisting of future projects and our Investment funds. Critical to this goal, is that we designed $DRIP with a fixed supply and deflationary mechanics. $DRIP will only be attainable by staking our NFTs, as a reward for providing liquidity to the $DRIP token or of course by purchasing the token itself. All additional information surrounding the tokenomics of the $DRIP token will be shared shortly before the token launch</p>
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section11" className="d-lg-none d-md-none sesctionSet">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                                Initial Funding

                                            </h3>


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
                                            <p className=" text-muted mt-5 data">The 10,000 Designer Dinos (Solana) NFTs will be sold at a fixed price of 5 SOL,, which is expected to bring in approximately 1,500,000 USD (accounting for a SOL price of $30. The funding will be distributed as follows: 50% will be allocated to the DRIP. Treasury, 25% to the team, 15% to the community DAO and 10% to the $DRIP-USDC liquidity pool. This split fairly compensates the team who are committed to this project for the long-term, while still keeping the majority available to fund all the products and utilities that the DRIP. ecosystem will offer.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                            <p className=" text-muted mt-5 data">In order to build our treasury valuation even further, we will sell 10% of our total supply of $DRIP tokens to private investors at a 10% discount which will be linear vested for 6 months, after an initial unlock of tokens at launch. These sales will generate $250,000 USD that we will be completely allocating to the treasury.</p>
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section12" className="d-lg-none d-md-none">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <div className="pt-5 pl-3  pt-md-4 pl-xl-5 pl-md-0 intTitle">
                                                DRIP. ESports Team
                                            </div>


                                        </div>

                                        <div className="col-md-3 col-lg-2 copyline col-xxl-3">
                                            <div className="lineRight" onClick={copyToClip}>

                                                <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>
                                                {/* <span className="IconTitle h-25"><i className="fa-solid fa-align-center "> </i> Outline</span>
                                                <a className="nav-link" href="#Athletes"> DRIP. Athletes</a>
                                                <a className="nav-link" href="#Ambassadors"> DRIP. Ambassadors</a> */}
                                            </div>


                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7" id='Athletes'>
                                            <div className="SubTilteBorder pt-2"></div>
                                            <p className="text-muted data  RoadTitle">DRIP. Athletes</p>


                                            <p className=" text-muted mt-5 mt-md-4 data">DRIP. will launch its ESports branch in Q4 2022. Aiming to establish multiple top tier teams who can compete and excel at the highest level in Esport games like League of Legends, Valorant, Counter Strike, DOTA 2 and many more. We will be scouting the best up-and-coming gamers who want to be part of one…</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                            <p className=" text-muted mt-5 mt-md-4 data">We will be one of the first gaming organizations that will be a part of the WEB3 movement. In the beginning of 2023 we will open up our DRIP. Facility, where we can guide and train our athletes. Here they can focus on becoming the best version of themselves and dedicate their time to improve team chemistry and coordination.</p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                            <p className=" text-muted mt-5 mt-md-4 data">We want to give everyone that's part of this movement a chance to participate in this opportunity, one where they can achieve their dream of becoming a Professional gamer. DRIP gives hard working and talented people a chance to be at the highest podium.</p>
                                        </div>


                                    </div>

                                </div>
                                <div className="tab-content" id="v-pills-tabContent">

                                    <div className="tab-pane fade  rounded bg-white show active " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div className="row">
                                            <div className="col-md-9 col-lg-10  col-xxl-8 d-flex" id="Ambassadors">
                                                <span className=" playTitle pl-xl-5 ">
                                                    DRIP. Ambassadors
                                                </span>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">
                                                <div className="SubTilteBorder pt-2"></div>
                                                <p className="text-muted data RoadTitle">DRIP. Athletes</p>
                                                <p className=" text-muted mt-5 mt-md-4 data">Gaming and/or Normal content creators may also apply to be a part of DRIP. content team by joining the DRIP. Ambassador program. Their role will be to keep expanding our brand and to keep DRIP. Trending on all social media platforms. DRIP. will heavily focus on content creation and will be onboard Twitch Streamers and other Social media Influencers in They will primarily focus on making content for DRIP. but will not compete in any of the professional tournaments. DRIP. Ambassadors will make sure to keep our brand trending at all times and to further increase our brand awareness.</p>
                                            </div>
                                            <div className="col-md-9 col-xl-8 col-lg-10 col-xxl-7">

                                                <p className=" text-muted mt-5 mt-md-4 data">We will start off with hiring micro/ upcoming Influencers and Twitch streamers.and have them onboard our DRIP. Ambassadors Program. They will primarily focus on making unique entertaining content for DRIP. but will not compete in any of the professional tournaments. Our DRIP. Ambassadors and Esport Teams will make sure to keep our brand trending at all times and to further increase our brand awareness.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </section>
                    <section id="section13" className="d-lg-none d-md-none">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h6 className=" playTitle  pt-md-4  pl-xl-5 pl-md-0">
                                                Clothing Brand
                                            </h6>


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
                                            <p className=" text-muted mt-5 mt-md-4 data">To stand out from the usual merch that NFT projects produce. We at DRIP. had to come up with something truly new and unique. Our project stands for exclusivity and this is something we’re bringing back to you guys by creating our own clothing brand. We will be designing exclusive merch that is seen worn by the Dripping Dino and Designer Dino NFTs. We'll also focus on making exclusive DRIP. Hoodies, T-Shirts, Jackets and Blouses.  </p>
                                        </div>
                                        <div className="col-md-9 col-xl-8 col-lg-10     col-xxl-7">

                                            <p className=" text-muted mt-5 mt-md-4 data">We'll also be producing limited edition collaboration drops between DRIP. and its ESports athletes. Making sure that our community stays dripped out while supporting their favorite streamer/athlete. All clothing pieces will be carefully designed and crafted by stylists and manufacturers who have a ton of experience in the Fashion industry. Our clothing brand will in no way shape focus on being a form of fast fashion.</p>
                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                    <section id="section14" className="d-lg-none d-md-none">
                        <div className="container-fluid ">


                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade  rounded bg-white show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">


                                    <div className="row">
                                        <div className="col-md-9 col-lg-10 col-xl-8 col-xxl-8">
                                            <h3 className="pt-5 pl-5 pl-xl-5 pt-md-4  pl-md-0 intTitle">
                                                Roadmap
                                            </h3>

                                            <hr className='pl-lg-0 col-md-9 col-lg-10 col-xl-8 col-xxl-8 pl-md-0 hrset' ></hr>
                                        </div>

                                        <div className="col-md-3 col-lg-3 copyline ">
                                            <div className="lineRight" o>

                                                <p className="copyLinkName"> <i className="fa-solid fa-copy "></i> Copy link</p>

                                            </div>
                                            <div className="pt-3"> </div>
                                            <div className="lineRight lineRightNone  ">
                                                <div className="" >
                                                    {/* <i className="fa-solid fa-align-justify"></i> */}
                                                    <span className="IconTitle"><i className="fa-solid fa-align-center"> </i> Outline</span>
                                                    <a className="nav-link" href="#Products"> Products and Utilities</a>
                                                </div>
                                            </div>

                                            <div className="lineRight lineRightNone">
                                                <div className="" >
                                                    {/* <i className="fa-solid fa-align-justify"></i> */}

                                                    <a className="nav-link" href="#Sales"> Sales</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row ">


                                        <div className="col-md-9 Roadtileset  " id="Products">
                                            <p className="RoadTitle">Products and Utilities</p>
                                            <div className='roadMap'>Q2 2022
                                                <ListGroup as="ol" numbered>
                                                    <ListGroup.Item as="li">Designing 8000 NFT Artworks</ListGroup.Item>
                                                    <ListGroup.Item as="li">Prototype Website</ListGroup.Item>
                                                    <ListGroup.Item as="li"> Introduction Launchpad</ListGroup.Item>
                                                    <ListGroup.Item as="li"> Launch $DRIP</ListGroup.Item>
                                                </ListGroup>
                                            </div>
                                        </div>
                                        <div className="col-md-9 Roadtileset" >

                                            <div className='roadMap'> Q4 2022
                                                <ListGroup as="ol" numbered>
                                                    <ListGroup.Item as="li">Launch $DRIP token</ListGroup.Item>
                                                    <ListGroup.Item as="li">Setting up Clothing Brand</ListGroup.Item>
                                                    <ListGroup.Item as="li"> Establishing ESports team</ListGroup.Item>
                                                    <ListGroup.Item as="li"> Starting Game development</ListGroup.Item>
                                                </ListGroup>
                                            </div>
                                        </div>
                                        <div className="col-md-9 Roadtileset " id="Sales">
                                            <p className="RoadTitle">Sales</p>

                                            <div className='roadMap'>Q1 2023
                                                <ListGroup as="ol" numbered>
                                                    <ListGroup.Item as="li">Pre-Sale NFTs</ListGroup.Item>
                                                    <ListGroup.Item as="li"> Token private-sale</ListGroup.Item>
                                                    <ListGroup.Item as="li">Token pre-sale</ListGroup.Item>
                                                </ListGroup>
                                            </div>
                                        </div>
                                        <div className="col-md-9 Roadtileset" >
                                            <div className='roadMap'>Q3/4 2022
                                                <ListGroup as="ol" numbered>
                                                    <ListGroup.Item as="li">Launch NFT collection 1: Designer Dinos</ListGroup.Item>
                                                    <ListGroup.Item as="li">Launch NFT collection 2: Dripping Dinos</ListGroup.Item>

                                                </ListGroup>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </section>
                </main>

            </div>

            <nav className="navbar navbar-expand-lg navBtm bg-white setShowNav mobileView">
                <div className="container-fluid">

                    <div className="d-flex ">
                        <a className="navbar-brand" href="#">
                            <div className="logo">
                                <div className="titleIcon"> <img src="/Img/USDD.png" alt="USD" className="imagesSet"/></div>
                                {/* <div className="titleIcon"> 1</div> */}
                                <div className="titleName"> USDD Whitepaper</div>
                                <div className="navbarSlideLine"></div>
                            </div>
                        </a>
                    </div>
                    <div></div>
                    <div>
                        <div className=" navbarSlideLine ">
                            <Button className="btnSearch " onClick={handleShow}>
                                <i className="fa fa-search " aria-hidden="true"></i> Search
                            </Button>
                        </div>

                        {/* </Form> */}
                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>

                            </Modal.Header>
                            <Modal.Body>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 searchBox"
                                    aria-label="Search"
                                />
                            </Modal.Body>

                        </Modal>

                    </div>

                </div>
            </nav >

        </>

    )
}

export default TopHeader