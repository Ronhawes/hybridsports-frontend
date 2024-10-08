import styles from "./style";
import { useState } from "react";
import { Ranking, NextEvents, Navbar, Footer, Hero2, Testimonials, Player2Registration } from './components';
import { tour1, tour2, tour3, tour4 , tour8, video1} from "./assets";
import { quotes } from "./assets";

const Mercavi = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [tour1, tour2, tour3, tour4];

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="bg-gray-500 w-full overflow-hidden">
      <img src={tour8} alt="racket3" className="w-full object-cover" style={{ height: '5cm', width: '35cm' }} />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar className="mr-4" /><br /><br /><br />
          
          
          <div className="relative rounded-lg overflow-hidden">
            
            <div className="absolute inset-0 flex items-center justify-left text-black text-3xl font-bold pl-4">
             
            </div>
          </div><br />
        </div>
      </div>

      <div className="container mx-auto p-0 pt-6 md:p-6 lg:p-12">
        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row">
          
          {/* Section 1: Welcome Content */}
          <div className="flex-auto w-64 md:w-1/4 pr-4  bg-slate-900 rounded-lg shadow-lg p-6 mb-6 md:mb-0 md:mr-6">
            <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /><br />
            <p className="text-xl3 sm:text-xl4 leading-xl sm:leading-xl2 font-bold text-gray-500 factorial__headingFontFamily mr-4">
              At HybridSports, we're revolutionizing the world of sports by bringing together traditional and emerging sports through our cutting-edge platform. As the largest sports booking app and SaaS for venues, 
              we're not just focusing on racket sports—we're bridging the gap between various disciplines, from tennis and padel to new-age hybrid sports that blend the best of both worlds. 
              Explore the future of sports with HybridSports—where innovation meets passion, and everyone can find their perfect game.
              Meet our talented athletes who are excelling in their respective sports.
            </p><br />
            <button className="bg-blue-950 text-white py-2 px-4 rounded-lg">Gallery</button><br /><br />

            {/* Gallery Carousel */}
            <div className="relative flex items-center justify-center mt-6">
              {/* Previous Image Preview (10% visible) */}
              <img
                src={images[(currentImage - 1 + images.length) % images.length]}
                alt="Previous"
                className="cursor-pointer opacity-50 rounded-lg"
                style={{ width: '10%', height: '9cm', objectFit: 'cover', position: 'absolute', left: 0 }}
                onClick={() => handleImageClick((currentImage - 1 + images.length) % images.length)}
              />

              {/* Current Image (Full size) */}
              <img src={images[currentImage]} alt={`Tour ${currentImage + 2}`} className="w-3/4 h-auto rounded-lg" style={{ height: '9cm', zIndex: 10 }} />

              {/* Next Image Preview (10% visible) */}
              <img
                src={images[(currentImage + 1) % images.length]}
                alt="Next"
                className="cursor-pointer opacity-50 rounded-lg"
                style={{ width: '10%', height: '9cm', objectFit: 'cover', position: 'absolute', right: 0 }}
                onClick={() => handleImageClick((currentImage + 1) % images.length)}
              />
            </div>
          </div>

          {/* Section 2: Rankings and Events */}
          <div className="flex-auto w-14 md:w-1/8 bg-slate-900 rounded-lg shadow-lg p-6">
            
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

export default Mercavi;
