import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewItems from './pages/ViewItems';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/view" element={<ViewItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
