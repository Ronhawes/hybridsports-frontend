import React, { useState, useEffect } from "react";
import styles from "./style";
import { Navbar, Footer,  CoachesAdmin } from "./components";
import Login from "./components/Login"; // Import the Login component
import jsPDF from "jspdf"; // Import jsPDF
import "jspdf-autotable"; // For better table formatting


const CoachesAdmin1 = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="bg-gray-600 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-col`}>
        
          
        <h1 className="text-4xl font-bold mb-8">Coaches Dashboard</h1>
        <h2 className="text-2xl font-bold mb-4">.</h2>
          
            
          
        <CoachesAdmin/>

        
      </div>
    <Footer  className="bg-black"/>
    </div>
  );
};

export default CoachesAdmin1;