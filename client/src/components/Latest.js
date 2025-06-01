import React, { useRef } from 'react';
import latestProjects from '../data/latestProjects';

const Latest = () => {
  const videoRefs = useRef(new Map());

  // Function to handle video play on mouse enter
  const handleMouseEnter = (projectId) => {
    const videoElement = videoRefs.current.get(projectId);
    if (videoElement && videoElement.paused) { // Only play if currently paused
      videoElement.play().catch(error => {
        // Catch and ignore the play() interrupted error, as it's often just a warning
        if (error.name === "AbortError") {
          // console.log("Video play was aborted (often due to rapid hover)");
        } else {
          console.error("Error attempting to play video:", error);
        }
      });
    }
  };

  // Function to handle video pause on mouse leave
  const handleMouseLeave = (projectId) => {
    const videoElement = videoRefs.current.get(projectId);
    if (videoElement && !videoElement.paused) { // Only pause if currently playing
      videoElement.pause();
      videoElement.currentTime = 0; // Rewind to start on pause
    }
  };

  // Function to set a ref for a specific video element
  const setVideoRef = (id, element) => {
    if (element) {
      videoRefs.current.set(id, element);
    } else {
      videoRefs.current.delete(id); // Clean up on unmount
    }
  };

  return (
    <section id="latest" className="latest-section">
      <h2 className="section-title latest-section-title">LATEST</h2>
      <div className="latest-projects-grid">
        {latestProjects.map(project => (
          <div
            className="project-item"
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
          >
            <div className="project-video-wrapper">
              <video
                ref={element => setVideoRef(project.id, element)}
                className="project-video"
                preload="metadata"
                loop
                muted
                playsInline
              >
                <source src={project.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;