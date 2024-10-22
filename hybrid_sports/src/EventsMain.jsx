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
        <h1 className="text-3xl font-bold mb-4 text-center ">Empowering Young Champions, Enhancing Your Lifestyle🎾</h1>
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