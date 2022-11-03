import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import NavbarComponent from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import Sidebar from "../components/SideBar/SideBar";

const IndexRoute = () => {
  return (
    <div>
      <Router>
        <NavbarComponent />
        {/* <Sidebar /> */}
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default IndexRoute;
