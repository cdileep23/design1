import React from "react";
import { Building2, Calendar, Clock } from "lucide-react";

const WorkExperience = () => {
  return (
    <div className="-[#fefbfb] rounded-lg w-full shadow-sm">
      <div className="mb-4  bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB]">
        <h2 className="text-gray-800 font-medium  p-4 flex items-center">
          My Work Experience
        </h2>
      </div>

      <div className="mb-4 p-4">
        <div className="uppercase text-green-700 font-bold text-sm mb-4 flex items-center">
          I have been in practice for: 7+ years
        </div>

        <div className="flex items-start mb-4">
          <div className="mr-3 mt-1">
            <Building2 className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <div className="text-gray-800">Midtown Medical Clinic</div>
            <div className="text-gray-500 text-sm">Senior doctor</div>
          </div>
          <div className="ml-auto text-gray-500 text-sm flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-blue-600" />
            2016-PRESENT
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-3 mt-1">
            <Building2 className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <div className="text-gray-800">Midtown Medical Clinic</div>
            <div className="text-gray-500 text-sm">Senior doctor</div>
          </div>
          <div className="ml-auto text-gray-500 text-sm flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-blue-600" />
            2010-2015
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
