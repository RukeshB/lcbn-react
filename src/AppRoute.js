import { Route, Routes } from "react-router-dom";
import BodDirectory from "./component/BodDirectory/BodDirectory";
import Home from "./component/Home/Home";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/bod" element={<BodDirectory />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoute;
