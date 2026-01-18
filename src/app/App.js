import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '../styles/main.css';
import './App.css';

import React, { useEffect } from 'react';
import AOS from 'aos';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Header from '../components/layout/Header';
import Profile from '../components/layout/Profile';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Portfolio from '../components/sections/Portfolio';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <div className="page-content">
          <Profile />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Portfolio />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
