import styles from "./style";
import {Hero, Navbar, Footer,Testimonials, Events, Stats,PlayerRegistration} from "./components"
import {SignIn } from "./components"

const App = () => (
  <div className="bg-slate-900 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <PlayerRegistration/>
        <Testimonials/>
        
        <Footer />
        
       
      </div>
    </div>
  </div>
);  

export default App