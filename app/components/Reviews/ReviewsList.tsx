"use client";
import React from "react";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";

const reviewsData = [
  {
    id: 1,
    name: "Rafael Marquez",
    date: "June 28, 2019",
    image: "/assets/user-review-img.png",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafael Marquez",
    date: "June 28, 2019",
    image: "/assets/user-review-img.png",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 5,
  },
  {
    id: 3,
    name: "Rafael Marquez",
    date: "June 28, 2019",
    image: "/assets/user-review-img.png",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 5,
  },
];

const ReviewsList: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 mt-3">
      {reviewsData.map((review) => (
        <div key={review.id} className="bg-white rounded-[14px] p-3 md:p-5">
          <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
            <div className="flex items-center gap-[10px]">
              <Image
                src={review.image}
                alt={review.name}
                width={52}
                height={52}
                loading="lazy"
                className="rounded-full object-cover"
              />

              <div className="flex flex-col md:gap-[6px]">
                <h2 className="text-sm md:text-base font-semibold">{review.name}</h2>

                <p className="text-[#7B3BAC] text-[10px] font-semibold">
                  {review.date}
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <TiStarFullOutline
                  key={index}
                  className={
                    index < review.rating
                      ? "text-[#FFBC11] text-xl"
                      : "text-[#25314C33] text-xl"
                  }
                />
              ))}
            </div>
          </div>

          <p className="text-xs md:text-sm">{review.reviewText}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
