import React from 'react';
import './App.css';
//Pages
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import More from './pages/More';
import Books from './pages/Books';
import Other from './pages/Other';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/more" element={<More />} />
        <Route path="/books" element={<Books />} />
        <Route path="/other" element={<Other />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      </Router>
  );
}

export default App;
