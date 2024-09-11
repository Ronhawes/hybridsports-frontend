import { useState, useEffect } from 'react';
import styles from "../style";
import { discount, racket, racket2, racket3 } from "../assets"; // Import racket images
import { Link } from 'react-router-dom';
import PlayerRegistration from './PlayerRegistration';


const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [racket, racket2, racket3];
  const phrases = [  "play padel","swim with","play tennis",];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval); // Clean up interval on unmount
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(textInterval); // Clean up interval on unmount
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">A Full month Event</span> 
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Looking for someone to <br className="sm:block hidden" />{" "}
            <span className="text-gradient ">{phrases[currentPhraseIndex]}</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Join the Action!
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover exciting events, improve your skills, and connect with top coaches in various sports.
        </p>

        <div className={`${styles.paragraph} max-w-[470px] mt-5`}>   
          <div className="flex justify-center mt-50">
            <PlayerRegistration/>
          </div>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img 
          src={images[currentImage]} // Use current image from state
          alt="racket" 
          className={`w-[100%] h-[100%] relative z-[5] opacity-50`} 
        />

        {/* Gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* Gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
