import { Venus } from 'lucide-react';
import React from 'react'


const Specilaization = () => {
  return (
    <div className="w-full bg-[#fefbfb] rounded-xl shadow-sm">
      <div className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB]">
        <h1 className="p-4 font-semibold text-[#313131] text-lg">
          {" "}
          I Specialize In
        </h1>
      </div>
      <div className="p-4 flex flex-row items-center justify-start gap-4">
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-[#FFFCF2] p-4">
            <div className="bg-[#aecfaf] rounded-full p-2">
              <div className="bg-white rounded-full ">
                <Venus color="#aecfaf" size={60} />
              </div>
            </div>
          </div>
          <h1>Women's health</h1>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-[#FFFCF2] p-4">
            <div className="bg-[#aecfaf] rounded-full p-2">
              <div className="bg-white rounded-full ">
                <Venus color="#aecfaf" size={60} />
              </div>
            </div>
          </div>
          <h1>Women's health</h1>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-[#FFFCF2] p-4">
            <div className="bg-[#aecfaf] rounded-full p-2">
              <div className="bg-white rounded-full ">
                <Venus color="#aecfaf" size={60} />
              </div>
            </div>
          </div>
          <h1>Women's health</h1>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-[#FFFCF2] p-4">
            <div className="bg-[#aecfaf] rounded-full p-2">
              <div className="bg-white rounded-full ">
                <Venus color="#aecfaf" size={60} />
              </div>
            </div>
          </div>
          <h1>Women's health</h1>
        </div>
      </div>
    </div>
  );
}

export default Specilaization
