import React, { useState, useRef, useEffect } from 'react'; // Import useState, useRef, useEffect
import directors from '../data/directors'; // Import director data

const Directors = () => {
  // State to manage the currently hovered director
  const [hoveredDirector, setHoveredDirector] = useState(directors[0] || null); // Default to first director

  // Ref to control the video playback for the dynamic media
  const mediaVideoRef = useRef(null);

  // Effect to handle video playback when hoveredDirector changes
  useEffect(() => {
    if (mediaVideoRef.current) {
      mediaVideoRef.current.pause(); // Pause current video first
      mediaVideoRef.current.load(); // Load new video source
      mediaVideoRef.current.play().catch(error => {
        if (error.name === "AbortError") {
          // console.log("Video play was aborted (often due to rapid state changes)");
        } else {
          console.error("Error attempting to play director video:", error);
        }
      });
    }
  }, [hoveredDirector]); // Re-run effect when hoveredDirector changes

  // Filter options
  const categories = ['All Directors', ...new Set(directors.map(d => d.category))];
  const [activeCategory, setActiveCategory] = useState('All Directors');

  const filteredDirectors = directors.filter(director =>
    activeCategory === 'All Directors' || director.category === activeCategory
  );

  return (
    <section id="directors" className="directors-section">
      <div className="directors-filters">
        {categories.map(category => (
          <span
            key={category}
            className={`filter-item ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="directors-media-display">
        {hoveredDirector && (
          <video
            ref={mediaVideoRef}
            className="director-media-video"
            autoPlay // Autoplay when source changes
            loop
            muted
            playsInline
            preload="auto" // Preload for smoother transitions
          >
            <source src={hoveredDirector.mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Fallback for image if no video, or for initial render */}
        {hoveredDirector && (hoveredDirector.mediaSrc && hoveredDirector.mediaSrc.endsWith('.mp4') ? null : (
          <img src={hoveredDirector.mediaSrc} alt={hoveredDirector.name} className="director-media-image" />
        ))}
      </div>

      <div className="directors-list-container">
        <h1 className="active-director-name">// {hoveredDirector ? hoveredDirector.name : 'Select a Director'}</h1>
        <ul className="directors-list">
          {filteredDirectors.map(director => (
            <li
              key={director.id}
              className={`director-item ${hoveredDirector && hoveredDirector.id === director.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredDirector(director)}
              // onClick={() => setHoveredDirector(director)} // Could also activate on click
            >
              {director.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Directors;