import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/common/navbar/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
