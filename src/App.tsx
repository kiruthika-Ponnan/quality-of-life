import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIMentor from './pages/AIMentor';
import BookMedic from './pages/BookMedic';
import Lesson from './pages/Lesson';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-mentor" element={<AIMentor />} />
            <Route path="/book-medic" element={<BookMedic />} />
            <Route path="/lesson" element={<Lesson />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
