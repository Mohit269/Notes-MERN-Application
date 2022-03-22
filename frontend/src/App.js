import React from "react";
import Footer1 from "./Components/Footer/Footer1";
import Header from "./Components/Header/Header";
import "./bootstrap.min.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/LandingPage/Login";
import Register from "./Components/LandingPage/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer1 />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
