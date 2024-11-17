"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface DownloadModalProps {
  onClose: () => void;
  onLogin: () => void;
  onCaptcha: () => void;
}

const UserRegisterModal: React.FC<DownloadModalProps> = ({
  onClose,
  onLogin,
  onCaptcha,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 p-5">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 h-screen bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left">
          Register
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

        <form className="gap-5 flex flex-col mt-8 gap-y-5">
          {/* Profile Image File  */}
          <div className="flex justify-center flex-col items-center">
            <div className="relative w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#0F0A1914] cursor-pointer">
              <input
                type="file"
                ref={fileInputRef}
                className="opacity-0 top-8 absolute cursor-pointer"
                onChange={handleImageChange}
              />

              {/* Conditionally render the profile vector or the selected image */}
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <Image
                  src="/assets/profile-vector.svg"
                  alt="profile-vector"
                  width={40}
                  height={44}
                />
              )}

              <div
                className="bg-[#3D2278] w-[30px] h-[30px] rounded-full flex justify-center items-center absolute bottom-0 right-0 cursor-pointer"
                onClick={handleCameraClick}
              >
                <Image
                  src="/assets/camera.svg"
                  alt="camera icon"
                  width={16}
                  height={14}
                />
              </div>
            </div>

            <h2 className="text-base font-semibold text-[#0F0A19] mt-4">
              Upload your profile
            </h2>
          </div>

          <input
            type="text"
            placeholder="@username"
            className="border placeholder:text-base placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="email"
            placeholder="Email address"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="password"
            placeholder="Create password"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <button
            type="button"
            onClick={onCaptcha}
            className="bg-[#3D2278] text-white rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Continue
          </button>

          <p className="text-center text-sm text-[#0F0A19B2]">
            Already have an account?&nbsp;
            <span
              onClick={onLogin}
              className="text-sm cursor-pointer font-semibold text-[#3D2278]"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegisterModal;
