import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes'

import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
