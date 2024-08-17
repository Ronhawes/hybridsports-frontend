import styles from "./style";
import { Ranking, NextEvents,Results, Navbar, Footer, Hero2, Testimonials} from './components';

const Mercavi = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-green-700 text-3xl font-bold mb-4"> MERCAVI TOUR</h1>
      <h1 className="text-white text-3xl font-bold mb-4">WELCOME TO MERCAVI TOUR</h1>
      <p className="text-white mb-8">
        The Mercavi Tour presented by Mark Mabonga features all players<br></br> in Kenya over a weekend per event.
        a tournament gives you access to friendly matches.<br></br> The schedule, matches, and programming are subject to change. Be sure to consult the match schedule and activities on site before your visit.
      </p>
    <div className={`${styles.boxWidth}`}>
        <Ranking /><br></br>
        <NextEvents /><br></br>
        <Results />
    <div className={`bg-primary ${styles.flexStart} text-blue-50`}>
    <div className={`${styles.boxWidth}`}>
        <Hero2/>    
    </div>
    </div>
    <div className={`bg-blue-900 ${styles.flexStart} text-blue-50`}>
    <div className={`${styles.boxWidth}`}><br></br>
           <p>AN ACCESSIBLE EXPERIENCE<br></br><br></br>
The tournament offers seating, parking, services, and facilities for customers<br></br> with reduced mobility, as well as those with young children and other specific needs.<br></br>

For tickets and on-site support, please contact us at <br></br>+254794906146 or click below.</p>
    </div>
    </div>
    </div>
    </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials/>
        <Footer/>
      </div>
    </div>
    </div>
  );
};

export default Mercavi;