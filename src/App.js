import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
