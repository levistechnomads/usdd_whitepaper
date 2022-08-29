import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import PlaytoEarn from "./Components/Pages/Intro/PlaytoEarn";

import MainNavbar from "./Components/Pages/MainNavbar";
import TopHeader from "./Components/Pages/TopHeader";
import Router from "./RoutesCom/router";

function App() {
  return (
    <>
      <TopHeader />
      <MainNavbar />

      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/PlaytoEarn" element={<PlaytoEarn />} />
      </Routes> */}
      {/* <Router></Router> */}
    </>
  );
}

export default App;
