import React from "react";

const YouTubePlayer = () => {
  return (
    <div className="custom-youtube-player">
      <iframe
        className="custom-youtube-player__iframe"
        title="player"
        src="https://www.youtube.com/embed/lt1ualw5npU?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
