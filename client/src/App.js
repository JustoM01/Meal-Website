import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Naviagtion from './Components/Navigation';
import Menu from './Pages/Menu';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
      <Naviagtion></Naviagtion>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Main/>} />
      </Routes>
      
      <Footer />
    </Router>
    </div>
  );
}

export default App;
