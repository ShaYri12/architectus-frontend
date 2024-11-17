import React from "react";
import Image from "next/image";

const VerificationLoadingModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-6 md:p-7 w-full mx-auto max-w-[600px] relative">
        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={18}
          height={18}
          loading="lazy"
          onClick={onClose}
          className="absolute top-5 md:top-[30px] right-[30px] cursor-pointer"
        />

        <div className="flex flex-col items-center py-12 gap-8">
          <Image
            src="/assets/loader.svg"
            alt="loader"
            width={54}
            height={54}
            loading="lazy"
            className="animate-spin"
          />
          <p className="text-base text-[#0F0A19B2] text-center">
            AI is analyzing your documentation
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationLoadingModal;
