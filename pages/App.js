import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Access from './access';
import Dashboard from './dashboard';
import Contacts from './contacts';
import Home from './index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<Access />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;