import { Routes, Route } from "react-router";
import Home from "../screen/home/Home";
import App from "../App.jsx";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Router;
