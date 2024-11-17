import React from "react";
import Image from "next/image";

const ModifyProjectModal = ({ onClose, onCreate }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-6 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left mb-4">
          Modify Project?
        </h1>

        <p className="text-sm text-[#0F0A19B2] mb-8">
          Would you like to proceed with the modification to your project?
        </p>

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

        <div className="grid grid-cols-2 gap-5">
          <button
            onClick={onClose}
            className="border-[1.5px] border-[#3D2278] text-[#3D2278] rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-all duration-300 hover:bg-[#3D2278] hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={onCreate}
            className="bg-[#3D2278] text-white rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyProjectModal;
