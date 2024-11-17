import React from "react";
import Image from "next/image";

interface ShareModalProps {
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left">
          Share
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

        <div className="max-w-[440px] w-full mx-auto mt-10">
          <div className="download-bg py-10 mb-8 px-16 rounded-[20px]">
            <Image
              src="/assets/qr-code.svg"
              alt="qr-code"
              width={100}
              height={100}
              loading="lazy"
              className="w-[150px] md:w-[2600px] h-[150px] md:h-[260px] mx-auto"
            />
          </div>

          <div className="bg-[#3D2278] bg-opacity-[8%] items-center flex mb-5 gap-2 rounded-[10px] py-4 px-3 md:px-5 justify-between">
            <span className="text-[#0F0A19] text-xs md:text-base flex-1 text-ellipsis">
              workoutcreator.ai/download/3718
            </span>

            <Image
              src="/assets/icons/copy-icon.svg"
              alt="copy clipboard icon"
              width={21}
              height={26}
              loading="lazy"
              className="cursor-pointer h-[18px] md:h-[26px] w-auto"
            />
          </div>

          <button className="border-[1.5px] border-[#3D2278] text-[#3D2278] rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-all duration-300 hover:bg-[#3D2278] hover:text-white">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
