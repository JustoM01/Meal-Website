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
    <div style={{  minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor:'wheat' , textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)'}} className="App">
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
