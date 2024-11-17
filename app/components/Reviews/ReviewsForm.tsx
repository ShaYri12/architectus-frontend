"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";

const ReviewsForm: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
  };

  return (
    <div className="bg-[#CEBAFD52] rounded-[14px] h-fit p-2 md:p-5 mt-5">
      <h2 className="text-xl font-medium text-center">Add Rating & Review</h2>

      <div className="flex items-center justify-between gap-2 mt-6">
        <p className="text-base font-medium">Tell Us What You Think</p>

        <div className="flex gap-1 items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <TiStarFullOutline
              key={star}
              className={`text-2xl cursor-pointer hover:text-[#FFBC11] transition-all duration-300 ${
                star <= selectedRating ? "text-[#FFBC11]" : "text-[#25314C33]"
              }`}
              onClick={() => handleStarClick(star)}
            />
          ))}
        </div>
      </div>

      <textarea
        placeholder="Add your review . . ."
        className="bg-white rounded-[14px] h-[112px] p-5 placeholder:text-[#0000005C] w-full mt-5 outline-none"
      ></textarea>

      <button className="bg-gradient text-white rounded-[14px] w-full h-12 mt-2 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
        Submit
        <Image
          src="/assets/icon/arrow-right-small.svg"
          alt="arrow-right-small"
          width={18}
          height={10}
          loading="lazy"
        />
      </button>
    </div>
  );
};

export default ReviewsForm;
