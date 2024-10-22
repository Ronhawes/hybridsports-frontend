import styles from "./style";
import { useState } from "react";
import { Ranking, NextEvents, Navbar, Footer, Hero2, Testimonials, Player2Registration, PlayerRegistration } from './components';
import { tour1, tour2, tour3, tour4, tour8, video1 } from "./assets";
import { quotes } from "./assets";

const Mercavi = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [tour1, tour2, tour3, tour4];

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="bg-gray-500 w-full overflow-hidden">
      <img src={tour8} alt="racket3" className="w-full object-cover h-32 md:h-40 lg:h-48" />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar className="mr-4" /><br /><br /><br />
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-left text-black text-3xl font-bold pl-4"></div>
          </div><br />
        </div>
      </div>

      <div className="container mx-auto p-0 pt-6 md:p-6 lg:p-12">
        <div className="flex flex-col md:flex-row">
          {/* Section 1: Welcome Content */}
          <div className="flex-auto w-full md:w-1/4 pr-4 bg-slate-900 rounded-lg shadow-lg p-6 mb-6 md:mb-0 md:mr-6">
            <img src={quotes} alt="double_quotes" className="w-10 h-7 object-contain" /><br />
            <p className="text-lg sm:text-xl leading-relaxed font-bold text-gray-500 factorial__headingFontFamily mr-4">
              At HybridSports, we're revolutionizing the world of sports by bringing together traditional and emerging sports through our cutting-edge platform...
            </p><br />
            <button className="bg-blue-950 text-white py-2 px-4 rounded-lg">Gallery</button><br /><br />

            {/* Gallery Carousel */}
            <div className="relative flex items-center justify-center mt-6">
              <img
                src={images[(currentImage - 1 + images.length) % images.length]}
                alt="Previous"
                className="cursor-pointer opacity-50 rounded-lg w-1/5 h-auto"
                onClick={() => handleImageClick((currentImage - 1 + images.length) % images.length)}
              />
              <img src={images[currentImage]} alt={`Tour ${currentImage + 2}`} className="w-3/5 h-auto rounded-lg" />
              <img
                src={images[(currentImage + 1) % images.length]}
                alt="Next"
                className="cursor-pointer opacity-50 rounded-lg w-1/5 h-auto"
                onClick={() => handleImageClick((currentImage + 1) % images.length)}
              />
            </div>
          </div>

          {/* Section 2: Rankings and Events */}
          <div className="flex-auto w-full md:w-1/4 bg-slate-900 rounded-lg shadow-lg p-6">
            <NextEvents /><br />
          </div>
        </div>

        {/* Additional Components */}
        <div className={`${styles.boxWidth}`}>
          <div className={`bg-primary ${styles.flexStart} text-blue-50 rounded-lg p-6`}>
            <div className={`${styles.boxWidth}`}>
              <Ranking />
              <Hero2 />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials /><br />
        </div>
      </div>
      <div className="bg-black"><Footer /></div>
    </div>
  );
};

export default Mercavi