import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='*' element={<Navigate replace={true} to='/' />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
