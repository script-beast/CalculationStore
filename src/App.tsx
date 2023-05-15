// import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
