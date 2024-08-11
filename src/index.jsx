import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app';
import SobreNos from './pages/sobre';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/sobre-nos' element= {<SobreNos/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

