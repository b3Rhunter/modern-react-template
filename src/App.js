import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import background from './images/bg.png';
import LoadingSpinner from './LoadingSpinner';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  }

  return (
    <Router>
      <div className="card glass">
        <div className="image-row">
            { isConnected ? (
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </Suspense>
              ) : (
                <img src={background} alt="placeholder"/>
              )
            }
        </div>
        <div className="title-row">
            <h1>Template</h1>
        </div>
        <div className="button-row">
            { isConnected ? (
              <>
                <button className="navBtn">
                  <Link to="/">Home</Link>
                </button>
                <button className="navBtn">
                  <Link to="/about">About</Link>
                </button>
                <button className="navBtn">
                  <Link to="/contact">Contact</Link>
                </button>
              </>
            ) : (
              <button className="connectBtn" onClick={handleConnect}>Connect</button>
            )}
        </div>
      </div>
    </Router>
  );
}

export default App;
