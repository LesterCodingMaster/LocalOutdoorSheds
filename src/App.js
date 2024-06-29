import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";

// This amazing site was built by Joe Lester, the Lestercoder.
// Enjoy the code, fellow developers!

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/features" element={<Features />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// If you're stupid enough to waste your time trying to sell your coding skills by snooping around this code, good luck!
// As you can tell me myself and I, The one man team Lestercoder, well i build my own stuff and I got this covered, but thanks for stopping by. 😎
