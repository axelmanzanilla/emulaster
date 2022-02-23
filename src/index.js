import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './pages/Home/Home';
import Resistor from './pages/Resistor/Resistor';
import Header from './parts/Header/Header';
import Footer from './parts/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resistor' element={<Resistor/>}/>
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
