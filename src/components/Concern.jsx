import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ConcernsTreat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const concerns = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
    "PCOS",
    "Infertility",
    "Menopause",
    "UTI",
  ];

  const initialDisplay = 6;

  return (
    <div className="bg-[#fefbfb] rounded-lg shadow-sm">
      <div className="w-full bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-lg">
        <h2 className="text-lg font-medium text-[#313131] p-4">
          The Concerns I Treat
        </h2>
      </div>

      <div className="p-6 pt-4">
        <div className="flex flex-wrap gap-2">
          {concerns
            .slice(0, isExpanded ? concerns.length : initialDisplay)
            .map((concern, index) => (
              <button
                key={index}
                className="bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-full border border-gray-200"
              >
                {concern}
              </button>
            ))}

          {concerns.length > initialDisplay && (
            <button
              className="bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-full border border-gray-200 flex items-center"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  <span className="mr-1">Show Less</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span className="mr-1">
                    + {concerns.length - initialDisplay} More
                  </span>
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConcernsTreat;
