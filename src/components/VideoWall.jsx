import  { useState } from 'react';
import ThumbNailImg from '../assets/images/thumbnails.png';

const VideoWall = () => {
  const [isPlaying, setIsPlaying] = useState(false);


  const posterUrl = ThumbNailImg; 
  

  const videoUrl = "YOUR_VIDEO_FILE_URL_HERE"; 

  return (
    <div className="container mx-auto px-4">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-slate-900 group">
        {!isPlaying ? (
          /* Thumbnail Section with Play Button */
          <div className="relative w-full h-full">
            <img
              src={posterUrl}
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

            {/* Play Button - Bottom Left (Matching Screenshot) */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute bottom-6 left-6 flex items-center gap-2 text-white font-medium text-sm tracking-wider uppercase bg-black/30 hover:bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Play Showreel</span>
            </button>
          </div>
        ) : (
          /* Video Player Section */
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoWall;