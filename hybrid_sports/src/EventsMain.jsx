import styles from "./style";
import { Hero, Navbar, Footer, Testimonials, Events, Stats, SignIn, PlayerRegistration } from "./components";
import { tour16, tour17 } from "./assets";
import TicketRegistration from "./components/Button3";
import Button from "./components/Button";

const EventsMain = () => (
  <div className="bg-gray-500 w-full overflow-hidden">
    {/* Navbar Section */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
   <br /> <br />
        <h1 className="text-5xl italic font-bold mb-4 text-center ">EVENTS</h1> <br /> <br />
 
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