import React from "react";
import Image from "next/image";

interface DownloadModalProps {
  onClose: () => void;
  onLogin: () => void;
}

const SupplierRegisterModal: React.FC<DownloadModalProps> = ({
  onClose,
  onLogin,
}) => {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 px-5 py-3">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 h-screen bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative min-h-full">
        {/* Close Window btn */}
        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={16}
          height={16}
          onClick={onClose}
          loading="lazy"
          className="absolute top-3 right-4 cursor-pointer"
        />

        <form className="flex flex-col gap-y-5 h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
          <div className="relative borderUpload py-5 md:py-10 mt-6">
            <input
              className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
              type="file"
            />
            <div className="text-center">
              <img
                alt="upload"
                loading="lazy"
                width="42"
                height="34"
                decoding="async"
                className="mx-auto"
                src="/assets/icons/upload-icon.svg"
              />
              <h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
                <label
                  htmlFor="file-upload"
                  className="relative"
                >
                  <span>Drag and drop </span>
                  <span className="text-[#3D2278] font-semibold">
                    or browse
                  </span>
                  <input
                    id="file-upload"
                    className="sr-only"
                    type="file"
                    name="file-upload"
                  />
                </label>
              </h3>
            </div>
          </div>

          <p className="text-center font-semibold text-[#0F0A19] mb-3">
            Upload Product, service or event image
          </p>

          <input
            type="text"
            placeholder="Title"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] h-fit"
          />

          <textarea
            placeholder="Write a small description about your product or service such as product/service type, relevant sports categories, and available shipping countries."
            className="border placeholder:text-sm resize-none placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full min-h-[140px] rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="text"
            placeholder="Brand Name"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="text"
            placeholder="Price"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="text"
            placeholder="Discount Price"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="text"
            placeholder="Website link"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <button className="bg-[#3D2278] mt-3 text-white rounded-[10px] w-full min-h-12 md:min-h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
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

export default SupplierRegisterModal;
