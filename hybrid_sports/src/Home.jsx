import styles from "./style";
import {Hero, Navbar, Footer,Testimonials, Events, Stats,PlayerRegistration, } from "./components"

import Content from "./components/content";

const App = () => (
  <div className="bg-gray-600 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
        <Content/>
      </div>
    </div>
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        
        <Testimonials/>
        

        
       
      </div>
    </div>
    <div className='bg-slate-900'><Footer/></div>
  </div>
);  

export default App