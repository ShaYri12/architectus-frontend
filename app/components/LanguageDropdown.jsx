"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const LanguageDropdown = () => {
  const [isOpeLanguageDropdwon, setIsOpenLanguageDropdwon] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "en",
    name: "English",
    flag: "/assets/flags/en.png",
  });
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", name: "English", flag: "/assets/flags/en.png" },
    { code: "in", name: "Indonesia", flag: "/assets/flags/in.png" },
    { code: "ar", name: "Arabic", flag: "/assets/flags/ar.png" },
    { code: "ch", name: "Chinese", flag: "/assets/flags/ch.png" },
    { code: "du", name: "Dutch", flag: "/assets/flags/du.png" },
    { code: "fr", name: "French", flag: "/assets/flags/fr.png" },
    { code: "gr", name: "German", flag: "/assets/flags/gr.png" },
    { code: "ja", name: "Japanese", flag: "/assets/flags/ja.png" },
    { code: "ko", name: "Korean", flag: "/assets/flags/ko.png" },
    { code: "pr", name: "Portuguese", flag: "/assets/flags/pr.png" },
    { code: "sp", name: "Spanish", flag: "/assets/flags/sp.png" },
  ];

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleOpenLanguageDropdwon = () => {
    setIsOpenLanguageDropdwon(!isOpeLanguageDropdwon);
  };

  useEffect(() => {
    if (isOpeLanguageDropdwon) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpeLanguageDropdwon]);

  return (
    <div>
      <div className="logomenubg bg-white px-5 py-[19px] hidden md:flex items-center gap-4 rounded-[14px] h-[60px] relative z-[999]">
        <button
          onClick={handleOpenLanguageDropdwon}
          className="flex items-center gap-1"
        >
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              src={selectedLanguage.flag}
              alt={`${selectedLanguage.name}-flag`}
              width={27}
              height={18}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-base font-semibold mr-[2px] capitalize">
            {selectedLanguage.code}
          </span>

          <Image
            src="/assets/icon/down-arrow.svg"
            alt="down-arrow"
            width={15}
            height={8}
            loading="lazy"
          />
        </button>

        <div className="h-[30px] w-[1px] bg-black bg-opacity-[13%]"></div>

        <Image
          src="/assets/icon/headphones.svg"
          alt="headphones"
          width={20}
          height={20}
          loading="lazy"
          className="cursor-pointer"
        />
      </div>

      {isOpeLanguageDropdwon && (
        <div
          ref={dropdownRef}
          className="fixed inset-0 z-50 w-full h-screen py-5 px-[30px] flex justify-end"
        >
          <div
            onClick={handleOpenLanguageDropdwon}
            className="absolute inset-0 windows-bg w-full h-full"
          ></div>

          <div className="relative flex flex-col items-end z-[999]">
            {/* Close Btn  */}
            <button
              onClick={handleOpenLanguageDropdwon}
              className="closebtn-bg md:hidden flex logomenubg min-w-[60px] min-h-[60px] rounded-[14px] items-center justify-center float-end mb-5"
            >
              <Image
                src="/assets/icon/times.svg"
                alt="times-logo"
                width={14}
                height={14}
              />
            </button>

            <div className="md:hidden flex logomenubg bg-white px-5 py-[15px] items-center justify-between gap-4 rounded-[14px] mb-4 max-w-[200px] w-full">
              <button
                onClick={handleOpenLanguageDropdwon}
                className="flex items-center gap-1"
              >
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                  <img
                    src={selectedLanguage.flag}
                    alt={`${selectedLanguage.name}-flag`}
                    width={27}
                    height={18}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-base font-semibold mr-[2px] capitalize">
                  {selectedLanguage.code}
                </span>

                <Image
                  src="/assets/icon/down-arrow.svg"
                  alt="down-arrow"
                  width={15}
                  height={8}
                  loading="lazy"
                />
              </button>

              <div className="h-[30px] w-[1px] bg-black bg-opacity-[13%]"></div>

              <Image
                src="/assets/icon/headphones.svg"
                alt="headphones"
                width={20}
                height={20}
                loading="lazy"
                className="cursor-pointer"
              />
            </div>

            <div className="max-w-[200px] w-full logomenubg bg-white rounded-[20px] px-5 flex flex-col min-h-[200px] h-fit overflow-y-scroll tabs-scrollbar md:mr-[45px] md:mt-[72px]">
              {languages.map((language) => (
                <button
                  key={language.name}
                  className="py-5 border-b border-opacity-10 flex items-center gap-2"
                  onClick={() => handleSelect(language)}
                >
                  <Image
                    src={language.flag}
                    alt={`${language.name}-flag`}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-[30px] h-5 rounded"
                  />

                  <span className="text-[#222741] text-base font-medium">
                    {language.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
