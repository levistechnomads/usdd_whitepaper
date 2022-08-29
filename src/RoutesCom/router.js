// ** Router Components
import { Navigate, Route, Routes } from "react-router-dom";

// ** Routes & Default Routes
import { RoutesPaths } from "./index";

import { useLocation } from "react-router-dom";

const Router = () => {
  const location = useLocation();
  const FinalRoute = (props) => {};

  return (
    <>
      <Routes>
        {RoutesPaths.map((route, index) => {
          return (
            <Route
              exact
              key={index}
              path={route.path}
              element={<FinalRoute route={route} />}
            />
          );
        })}
        {/* <Route exact path="*" element={<Error />} /> */}
      </Routes>
    </>
  );
};

export default Router;
