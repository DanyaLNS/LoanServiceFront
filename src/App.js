import './App.css';
import React  from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import TariffPage from './components/pages/TariffPage';
import CreateOrderPage from './components/pages/CreateOrderPage';
import CheckStatusPage from './components/pages/StatusCheckPage';
import DeleteOrderPage from './components/pages/DeleteOrderPage';


export default function App() {
  return (
      <div className='Application'>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/tariffs" element={<TariffPage/>}/>
              <Route path="createOrder" element={<CreateOrderPage/>} />
              <Route path="orderStatus" element={<CheckStatusPage/>} />
              <Route path="deleteOrder" element={<DeleteOrderPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

