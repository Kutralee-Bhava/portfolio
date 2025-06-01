import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState('8rem'); // Initial large size for KODE logo

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
        setLogoSize('3rem');
      } else {
        setIsScrolled(false);
        setLogoSize('8rem');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="logo" style={{ fontSize: logoSize }} onClick={() => scrollToSection('home')}>KODE</h1>
        <nav className="main-nav">
          <ul>
            <li><a onClick={() => scrollToSection('latest')}>Latest</a></li>
            <li><a onClick={() => scrollToSection('work')}>Work</a></li>
            <li><a onClick={() => scrollToSection('directors')}>Directors</a></li>
            {/* <li><a onClick={() => scrollToSection('culture')}>Culture</a></li> REMOVE THIS LINE */}
            {/* <li><a onClick={() => scrollToSection('blog')}>Blog</a></li> REMOVE THIS LINE */}
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;