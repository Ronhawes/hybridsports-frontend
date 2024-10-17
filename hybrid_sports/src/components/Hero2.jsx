import React, { useState } from 'react';
import styles from '../style'; // Ensure you have imported your styles
import { tour3, video1 } from '../assets'; // Import the image and video assets
import Player2Registration from './Player2Registration';

function Hero2() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // State to control video playback

  const handleImageClick = () => {
    setIsVideoPlaying(true); // Start playing the video when the image is clicked
  };

  return (
    <div className={`${styles.flexContainer} flex flex-col md:flex-row items-start`}>
      {/* Left Side: Image or Video */}
      <div className="relative flex-1 p-4 w-full md:w-1/2">
        {/* Conditionally render either the image with a play button or the video */}
        {isVideoPlaying ? (
          <video className="w-full h-auto rounded-lg" controls autoPlay>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="relative">
            <img
              src={tour3}
              alt="Tournament"
              className="w-full h-auto rounded-lg"
            />
            {/* Play Button */}
            <button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-3 rounded-full"
              onClick={handleImageClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-4.796 2.848A1 1 0 019 13.118V8.882a1 1 0 011.456-.89l4.796 2.848a1 1 0 010 1.736z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 p-4 w-full md:w-1/2">
        <div className="text-xl sm:text-xl4 leading-xl sm:leading-xl2 font-bold text-gray-500 factorial__headingFontFamily">
          <h1 className="text-blue-950 text-2xl font-bold mb-4">WHAT'S INCLUDED</h1>
          <ul className="list-disc pl-5">
            <li>On-site activities & entertainment</li>
            <li>Access to practice courts and secondary match courts</li>
            <li>A memorable food and beverage experience</li>
            <li>Access the site for each session one hour before the start of play</li>
          </ul>
          <h1 className="text-blue-950 text-2xl font-bold mb-4">AN ACCESSIBLE EXPERIENCE</h1>
          <br /><br />
          <div className="list-disc pl-5">
            The tournament offers seating, parking, services, and facilities for customers with reduced mobility, as well as those with young children and other specific needs.
            <br /><br />
            For tickets and on-site support, please contact us at +254794906146.
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
