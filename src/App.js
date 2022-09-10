import React from "react";
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Detail from "./contact/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
