import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaptchaModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 px-5">
      <div
        onClick={onClose}
        className="absolute inset-0 h-screen bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-6 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left mb-4">
          CAPTCHA
        </h1>

        <p className="text-sm text-[#0F0A19B2]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Vivamus.
        </p>

        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={18}
          height={18}
          onClick={onClose}
          loading="lazy"
          className="absolute top-5 md:top-[30px] right-[30px] cursor-pointer"
        />

        <div className="mt-6 md:mt-8">
          <h2 className="font-medium text-base mb-4">I&apos;M Not a Robot</h2>

          <div className="border border-[#D3D3D3] px-3 py-4 flex-1 flex justify-between items-center w-full rounded-[10px] bg-[#F9F9F9] cursor-pointer">
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                className="border border-[#C1C1C1] w-6 md:w-8 h-6 md:h-8 cursor-pointer"
              />
              <h2 className="font-medium text-sm md:text-base">
                I&apos;M Not a Robot
              </h2>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                src="/assets/reCAPTCHA-symbol.svg"
                alt="reCAPTCHA-symbol"
                className="mb-2 h-5"
              />
              <span className="text-[#555555] text-xs md:text-sm">reCAPTCHA</span>
              <div className="flex items-center gap-1 text-[#555555] text-[8px] md:text-[10px]">
                <Link href="#">Privacy </Link> -<Link href="#">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptchaModal;
