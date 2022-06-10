import React from 'react';
import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';
import { Navbar } from './components/Navbar/Navbar';
import { Recommended } from './components/Recommended/Recommended';
import { Review } from './components/Review/Review';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Recommended />} />
          <Route path="/search" element={<Recommended />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/hospital/:id' element={<Review />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App