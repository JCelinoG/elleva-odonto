import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />
    </div>
  );
}

export default App;