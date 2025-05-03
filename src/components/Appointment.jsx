import React, { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const Appointment = () => {
  const [sessionType, setSessionType] = useState("video");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);


  const dates = [
    { day: "Mon", date: "10 Oct", slots: 10 },
    { day: "Tue", date: "11 Oct", slots: 2 },
    { day: "Wed", date: "12 Oct", slots: 5 },
  ];

  
  const morningSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:15 AM",
    "10:45 AM",
    "11:00 AM",
  ];
  const eveningSlots = [
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:15 PM",
  ];

  return (
    <div className="bg-[#fefbfb] rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-lg font-medium">Appointment Fee</h2>
        <span className="text-[#3A643B] font-bold">₹699.00</span>
      </div>

      <div className="mb-6">
        <h3 className="text-base font-medium mb-3">
          Select your mode of session
        </h3>
        <div className="flex gap-4">
          <button
            className={`flex-1 py-3 px-4 rounded-lg border ${
              sessionType === "clinic"
                ? "border-gray-400 bg-gray-50"
                : "border-gray-200"
            }`}
            onClick={() => setSessionType("clinic")}
          >
            <div className="text-center">
              <p className="font-medium">In-Clinic</p>
              <p className="text-sm text-gray-500">45 Mins</p>
            </div>
          </button>

          <button
            className={`flex-1 py-3 px-4 rounded-lg border relative ${
              sessionType === "video"
                ? "border-[#3A643B] bg-green-50"
                : "border-gray-200"
            }`}
            onClick={() => setSessionType("video")}
          >
            <div className="text-center">
              <p className="font-medium">Video</p>
              <p className="text-sm text-gray-500">45 Mins</p>
            </div>
            {sessionType === "video" && (
              <div className="absolute top-2 right-2 bg-[#3A643B] rounded-full p-1">
                <div className="w-4 h-4 text-white flex items-center justify-center">
                  ✓
                </div>
              </div>
            )}
          </button>

          <button
            className={`flex-1 py-3 px-4 rounded-lg border ${
              sessionType === "chat"
                ? "border-gray-400 bg-gray-50"
                : "border-gray-200"
            }`}
            onClick={() => setSessionType("chat")}
          >
            <div className="text-center">
              <p className="font-medium">Chat</p>
              <p className="text-sm text-gray-500">10 Mins</p>
            </div>
          </button>
        </div>
      </div>

    
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-medium">Pick a time slot</h3>
          <Calendar size={20} className="text-gray-600" />
        </div>

    
        <div className="relative mb-6">
          <div className="flex items-center justify-between border rounded-lg p-1">
            <button className="text-gray-500 p-2">
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2 overflow-x-auto py-2 px-1">
              {dates.map((date, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDate(date.day + " " + date.date)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg ${
                    selectedDate === date.day + " " + date.date
                      ? "bg-green-100 border border-green-300"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="text-center">
                    <p className="text-sm">
                      {date.day}, {date.date}
                    </p>
                    <p
                      className={`text-xs ${
                        date.slots <= 2
                          ? "text-red-500"
                          : date.slots <= 5
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {date.slots} slots
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <button className="text-gray-500 p-2">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        
        <div className="mb-4">
          <h4 className="font-medium mb-3">Morning</h4>
          <div className="flex flex-wrap gap-2">
            {morningSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-4 border rounded-lg ${
                  selectedTime === time
                    ? "bg-[#3A643B] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

      
        <div className="mb-6">
          <h4 className="font-medium mb-3">Evening</h4>
          <div className="flex flex-wrap gap-2">
            {eveningSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-4 border rounded-lg ${
                  selectedTime === time
                    ? "bg-[#3A643B] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

     
      <button className="w-full bg-[#3A643B] text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
        Make An Appointment
      </button>
    </div>
  );
};

export default Appointment;
