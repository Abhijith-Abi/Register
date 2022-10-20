import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/screens/Register";
import Create from "./components/screens/Create";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </Router>
    );
}
export default App;
