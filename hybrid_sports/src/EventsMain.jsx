import styles from "./style";
import { Hero, Navbar, Footer, Testimonials, Events, Stats, SignIn, PlayerRegistration } from "./components";

const EventsMain = () => (
  <div className="bg-gray-500 w-full overflow-hidden">
    {/* Navbar Section */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

 


    {/* Events Section */}
  < div className={` container mx-auto p-4 pt-6 md:p-6 lg:p-12 mt-20 w-full`}>
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Get your tickets</h1>
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Life is Better When We Play Together 🎾</h1>
        <h1 className="text-xl3 sm:text-xl4 leading-xl sm:leading-xl2 font-bold text-black  factorial__headingFontFamily">
        At HybridSports, we're revolutionizing the world of sports by bringing together traditional and emerging sports through our cutting-edge platform. As the largest sports booking app and SaaS for venues, we're not just focusing on racket sports—we're bridging the gap between various disciplines, from tennis and padel to new-age hybrid sports that blend the best of both worlds.

With a global footprint in over 49 countries, we've partnered with 4,800 clubs, offering access to 21,000 courts and connecting 3.1 million players. Our community is passionate about exploring new ways to play, blending classic sports with innovative hybrids that challenge the status quo.

Whether you're a fan of traditional racket sports or curious about trying something new, HybridSports is your gateway to a diverse sports experience. Join us as we push the boundaries of sports engagement, connecting players and venues in ways that inspire creativity and competition.

Explore the future of sports with HybridSports—where innovation meets passion, and everyone can find their perfect game.
Our team of experienced coaches and trainers are dedicated to helping you achieve your fitness goals.
        </h1><br></br>
      <p className="text-xl3 sm:text-xl4 leading-xl sm:leading-xl2 font-bold text-gray-500 factorial__headingFontFamily">
        Explore exciting sports events happening near you. Get your tickets now and be part of the action!
      </p>
  </div>
  {/* Additional Sections */}
  <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Events/>
      <Testimonials />
      
    </div>
  </div>
  <div className='bg-slate-900'><Footer/></div>
  </div>
);

export default EventsMain;