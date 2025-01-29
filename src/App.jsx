import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/body/login/Login';
import SignUp from './components/body/signup/SignUp';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
