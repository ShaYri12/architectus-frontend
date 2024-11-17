"use client";
import React, { useState } from "react";
import Image from "next/image";

interface DownloadModalProps {
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<DownloadModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 px-5">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 h-screen bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left">
          Forgot Password
        </h1>

        {/* Close Window btn */}
        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={18}
          height={18}
          onClick={onClose}
          loading="lazy"
          className="absolute top-5 md:top-[30px] right-[30px] cursor-pointer"
        />

        <p className="mt-4 text-[#6D6D6D] text-left text-sm">
          Please enter your email to reset the password
        </p>

        <form className="gap-5 flex flex-col mt-8 gap-y-5">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmailChange}
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <button
            type="submit"
            className={`bg-[#3D2278] text-white rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 ${
              email ? "opacity-100" : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!email}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
