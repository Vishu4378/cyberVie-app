import React from "react";
import NavBar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel";
import UploadDetails from "./Components/UploadDetails";

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/admin" element={<AdminPanel />}></Route>
          <Route path="/" element={<UploadDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
