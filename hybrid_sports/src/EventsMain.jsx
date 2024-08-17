import styles from "./style";
import { Hero, Navbar, Footer, Testimonials, Events, Stats, SignIn } from "./components";

const EventsMain = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar Section */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Events Section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <h1 className="text-3xl font-bold mb-4 text-green-500">Ongoing Events</h1>
        <p className="text-lg mb-8 text-green-500">
          Explore exciting sports events happening near you. Get your tickets now and be part of the action!
        </p>
        <Events />
      </div>
    </div>

    {/* Additional Sections */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <SignIn />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default EventsMain;
