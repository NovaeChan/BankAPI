import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
