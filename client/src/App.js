import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Latest from './components/Latest';
import Work from './components/Work';
import Directors from './components/Directors';
// import Blog from './components/Blog'; // REMOVE THIS LINE
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Culture from './components/Culture'; // REMOVE THIS LINE

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Latest />
      <Work />
      <Directors />
      {/* <Culture /> REMOVE THIS COMPONENT */}
      {/* <Blog /> REMOVE THIS COMPONENT */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;