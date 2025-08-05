import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Story from './components/Story';
import Order from './components/Order';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Order />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;