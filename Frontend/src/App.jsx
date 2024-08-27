import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Home from './components/HomeImg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Home/>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
