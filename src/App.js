import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path ="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
