// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import Menu from './Pages/Menu';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'yellow', minHeight: '100vh', display: 'flex', flexDirection: 'column' }} className="App">
      <Router>
          <Navigation/>
        <  Routes>
          <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Main />} />
        </Routes>
          <Footer />
      </Router>
    </div>
  );}
export default App;
