import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Appbar from './Appbar';
import App from '../../App';
import TariffPage from '../pages/TariffPage';

export default function Router() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/tariffs" element={<TariffPage/>} />
      </Routes>
    </BrowserRouter>
  );
}