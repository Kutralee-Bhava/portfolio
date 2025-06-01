import React, { useRef } from 'react'; // Import useRef
import latestProjects from '../data/latestProjects';

const Work = () => {
  // Get the first 5 videos from the latestProjects array
  const workSectionVideos = latestProjects.slice(0, 5);

  // Create a single ref to hold a Map of all video refs
  const videoRefs = useRef(new Map());

  // Function to handle video play on mouse enter
  const handleMouseEnter = (projectId) => {
    const videoElement = videoRefs.current.get(projectId);
    if (videoElement && videoElement.paused) {
      videoElement.play().catch(error => {
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
    if (videoElement && !videoElement.paused) {
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
    <section id="work" className="work-section">
      <div className="work-header-row">
        <h2 className="section-title work-section-title">WORK</h2>
        <a href="#" className="view-all-work-link">VIEW ALL WORK</a>
      </div>

      <div className="work-projects-row">
        {workSectionVideos.map(project => (
          <div
            className="work-project-item"
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)} // Add hover play
            onMouseLeave={() => handleMouseLeave(project.id)} // Add hover pause
          >
            <div className="work-video-wrapper">
              <video
                ref={element => setVideoRef(project.id, element)} // Attach ref
                className="work-video"
                preload="metadata"
                loop
                muted
                playsInline
                // src={project.src} // Src is now handled by the source tag within video
              >
                <source src={project.src} type="video/mp4" /> {/* Use source tag */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;