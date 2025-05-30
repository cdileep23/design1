import React from "react";
import About from "./About";
import Appointment from "./Appointment";

import WorkExperience from "./WorkExperience";
import Reviews from "./Reviews";
import ConcernsTreat from "./Concern.jsx";
import Specilaization from "./Specilaization.jsx";

const Booking = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-6xl w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:px-3 mb-6">
          <div className="order-1 md:order-2">
            <Appointment />
          </div>

          <div className="order-2 md:order-1 space-y-5">
          
              <About />
              <Specilaization/>
              <ConcernsTreat />
              <WorkExperience />
              <Reviews />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
