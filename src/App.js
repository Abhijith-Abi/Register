import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/screens/Register";
import Create from "./components/screens/Create";
import Form from "./components/screens/Form";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                {/* <Route path="/create" element={<Create />} /> */}
                <Route path="/create" element={<Form />} />
            </Routes>
        </Router>
    );
}
export default App;
