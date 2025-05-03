import React from "react";
import About from "./About";
import Appointment from "./Appointment";

const Booking = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-6xl w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
          <div className="order-1 md:order-2">
           <Appointment/>
          </div>

        
          <div className="order-2 md:order-1">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
