import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Services from './pages/Services';
import Packages from './pages/Packages'
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
// import AdminDashboard from './pages/Payment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Routes>

    <Route path='/' element={<Homepage />} />
    <Route path='/tour-packages' element={<Packages />} />
    <Route path='/services' element={<Services />} />
    <Route path='/contact-us' element={<ContactUs />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/admin-login' element={<AdminLogin />} />
    <Route path='/admin-dashboard' element={<AdminDashboard />} />
    {/* <Route path='/payment' element={<Payment />} /> */}

  </Routes>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
