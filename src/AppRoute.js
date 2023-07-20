import { Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import BodDirectory from "./component/BodDirectory/BodDirectory";
import Home from "./component/Home/Home";
import JoinUs from "./component/JoinUs/JoinUs";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/join" element={<JoinUs/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/bod" element={<BodDirectory />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoute;
