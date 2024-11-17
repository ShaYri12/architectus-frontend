import React from "react";
import Image from "next/image";

interface SupplierPlanModalProps {
  onClose: () => void;
}
const SupplierPlan: React.FC<SupplierPlanModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 px-5">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 h-screen bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-4 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left">
          Supplier Plan
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

        <p className="mt-4 text-sm text-[#0F0A19B2]">
          Don&apos;t miss out grab our exclusive discount before the official
          launch!
        </p>

        <div className="supplierPayment p-5 md:p-[30px] rounded-2xl md:rounded-[20px] mt-5 md:mt-8 mb-5">
          <h2 className="text-[#0F0A19] text-xl md:text-2xl font-semibold">
            Premium Supplier Plan
          </h2>

          <ul className="mt-[30px] flex flex-col gap-5">
            <li className="flex items-center justify-between gap-1">
              <p className="text-sm md:text-base text-[#0F0A19]">
                Original Price:
              </p>
              <span className="text-base md:text-lg text-[#FF3A5E] line-through font-medium">
                €19,90
              </span>
            </li>
            <li className="flex items-center justify-between gap-1">
              <p className="text-sm md:text-base text-[#0F0A19]">
                Pre Launch Discount:
              </p>
              <span className="text-base md:text-lg text-[#0F0A19] font-medium">
                50% Off
              </span>
            </li>
            <li className="flex items-center justify-between gap-1">
              <p className="text-sm md:text-base text-[#0F0A19]">
                Final Price:
              </p>
              <span className="text-2xl md:text-3xl text-[#3D2278] font-bold">
                €9,95
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <button className="bg-[#3D2278] text-white rounded-[10px] w-full min-h-12 md:min-h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
            Pay Now
          </button>

          <button className="border-[1.5px] border-[#3D2278] text-[#3D2278] rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-all duration-300 hover:bg-[#3D2278] hover:text-white">
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierPlan;
