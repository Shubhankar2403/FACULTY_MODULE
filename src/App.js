import React from "react";
// import Navbar from './components/layouts/Navbar'
// import Header from './components/layouts/Header'
// import BodyLeft from './components/layouts/BodyLeft'
// import BodyRight from './components/layouts/BodyRight'
//  import Body from './components/layouts/Body'

import HomePage from "./container/HomePage";
import ViewPage from "./container/ViewPage";
import NotFound from "./container/NotFoundPage";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/View" element={<ViewPage />} />
          {/* <Route exact path="/RegisterNewTPO" element={<TPO />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
