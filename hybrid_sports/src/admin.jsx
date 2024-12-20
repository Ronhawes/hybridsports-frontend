import React, { useState, useEffect } from "react";
import styles from "./style";
import { Navbar, Footer, Events, Booking1, Juniors, Tickets, Login1 } from "./components";

import "jspdf-autotable"; // For better table formatting


const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login1 onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="bg-gray-600 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-col`}>
        
          
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <h2 className="text-2xl font-bold mb-4">National Junior Circuit Rankings</h2>
          
            
          
        <Booking1/>
        <Juniors/>
        <Tickets/>

        
      </div>
    <Footer  className="bg-black"/>
    </div>
  );
};

export default Admin;