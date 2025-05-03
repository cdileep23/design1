import React from "react";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alicent Hightower",
      consultedFor: "Skin care",
      date: "20 January 2023",
      rating: 5,
      comment:
        "Might be bit early to confirm but yes I can see noticeable difference in my hair/all, will write again after using it for longer periods.",
    },
    {
      id: 2,
      name: "Alicent Hightower",
      consultedFor: "Pregnancy",
      date: "20 January 2023",
      rating: 5,
      comment:
        "Might be bit early to confirm but yes I can see noticeable difference, will write again after using it for longer periods.",
    },
  ];

  return (
    <div className="bg-[#fefbfb] rounded-xl w-full shadow-sm">
      <div className="mb-4 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB]">
        <h2 className="text-gray-800 font-medium p-4 flex items-center">
          Featured Reviews (102)
        </h2>
      </div>

      <div className="p-4">
        {reviews.map((review) => (
          <div key={review.id} className="mb-6 last:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 mr-3">
                <img
                  src="https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg"
                  alt={review.name}
                  className="rounded-full w-10 h-10 object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-800 font-medium">
                      {review.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      Consulted for {review.consultedFor}
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">{review.date}</div>
                </div>
              </div>
            </div>

            <div className="ml-12">
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="#FFB800"
                    color="#FFB800"
                    size={16}
                    className="mr-0.5"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
