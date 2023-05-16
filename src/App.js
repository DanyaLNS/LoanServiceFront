import './App.css';
import React, { Component }  from 'react'; 
import Appbar from './components/helpers/Appbar';
import Tariffs from './components/pages/TariffPage';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Container } from '@material-ui/core';
import MainPage from './components/pages/MainPage';
import TariffPage from './components/pages/TariffPage';

const styles = () => {
};

export default function App() {
  return (
      <div className='Application'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/tariffs" element={<TariffPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

