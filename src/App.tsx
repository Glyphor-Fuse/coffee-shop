import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to My App</h1>
        <Link to="/contact">Contact Us</Link>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;