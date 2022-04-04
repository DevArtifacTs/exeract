import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js/Home';


function App() {

  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='add-activity-form' element={<Form} />     */}
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
