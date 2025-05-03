import React from "react";

const UserProfile = () => {
  return (
    <div className="w-full flex justify-center my-6 px-4">
      <div className="max-w-7xl md:w-full bg-[#FFF7E2] rounded-2xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-center justify-between  gap-6">
     
          <div>
            <img
              src="https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg"
              className="rounded-full w-24 h-24 object-cover border-2 border-white shadow-sm"
              alt="Doctor profile"
            />
          </div>

        
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Dr. Bruce Willis</h2>
              <svg
                className="w-5 h-5 text-blue-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <p className="text-gray-600">Gynecologist</p>
            <div className="flex items-center mt-1">
              <span className="font-medium mr-1">4.2</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:ml-auto mt-4 md:mt-0">
            
            <div className="flex gap-8 text-center">
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Followers</p>
                <p className="font-semibold">850</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Following</p>
                <p className="font-semibold">18K</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Posts</p>
                <p className="font-semibold">250</p>
              </div>
            </div>

            {/* Appointment button */}
            <button className="bg-[#3A643B] text-white py-2 px-6 rounded-md hover:bg-[#2a4b2b] transition-colors font-medium">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
