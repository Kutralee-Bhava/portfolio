import React, { useState, useEffect } from 'react';

const Home = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  // Define the video source path
  const videoSrc = "/hero-video.mp4"; // This should point to your file in client/public

  useEffect(() => {
    // Log the video source to the console to verify the path React is using
    console.log("Video source being used:", videoSrc);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.min(scrollPosition / 500, 0.8);
      setOverlayOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videoSrc]); // Add videoSrc to dependency array to re-log if it changes (though it's static here)

  return (
    <section id="home" className="home-section">
      <div className="background-video-container">
        {/* ADDED CONTROLS TEMPORARILY FOR DEBUGGING */}
        <video autoPlay loop muted playsInline controls className="background-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}></div>
      </div>

      <div className="hero-content">
        <h2 className="hero-text">
          WE CREATE <br/>
          STORIES PEOPLE <br/>
          LOVE, SHARE AND <br/>
          REMEMBER.
        </h2>
        <p className="scroll-indicator">SCROLL</p>
        <p className="year-indicator">// ©2025</p>
      </div>
    </section>
  );
};

export default Home;