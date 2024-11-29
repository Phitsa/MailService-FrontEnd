import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Access from './access';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/access" element={<Access />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;