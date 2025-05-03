import React from "react";
import { Plus, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#fefbfb] rounded-xl px-6 pb-6 shadow-sm">
      <div className=" w-full flex  justify-between items-center mb-6 bg-gradient-to-r from-[#FBFCFB] to-[#F4F7EC] ">
        <h2 className="text-lg font-medium text-gray-800">A Little About me</h2>
        <button className="border border-gray-300 rounded-full px-4 py-1 text-gray-600 flex items-center gap-1 hover:bg-gray-50">
          Follow
          <Plus size={16} />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 mb-6">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the
        </p>

        <div className="text-right">
          <a href="#" className="text-gray-800 font-medium hover:underline">
            Read More
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-gray-700">Language Spoken</span>
          <span className="bg-white px-4 py-1 rounded-full text-gray-600">
            English
          </span>
          <span className="bg-white px-4 py-1 rounded-full text-gray-600">
            Hindi
          </span>
          <span className="bg-white px-4 py-1 rounded-full text-gray-600">
            Telugu
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <a
          href="#"
          className="bg-gray-100 p-2 rounded-full border border-gray-300 hover:bg-gray-200"
        >
          <Facebook size={20} className="text-gray-500" />
        </a>

        <a
          href="#"
          className="bg-gray-100 p-2 rounded-full border border-gray-300 hover:bg-gray-200"
        >
          <Instagram size={20} className="text-gray-500" />
        </a>

        <a
          href="#"
          className="bg-gray-100 p-2 rounded-full border border-gray-300 hover:bg-gray-200"
        >
          <Youtube size={20} className="text-gray-500" />
        </a>

        <a
          href="#"
          className="bg-gray-100 p-2 rounded-full border border-gray-300 hover:bg-gray-200"
        >
          <Twitter size={20} className="text-gray-500" />
        </a>
      </div>
    </div>
  );
};

export default About;
