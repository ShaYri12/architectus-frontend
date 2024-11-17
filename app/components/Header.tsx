"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageDropdown from "./LanguageDropdown";
import MenuModal from "./MenuModal";

const navLinks = [
  { name: "Body", path: "/" },
  { name: "Sports", path: "/sports" },
  { name: "Nutrition", path: "/nutrition" },
  { name: "Podcasts", path: "/podcasts" },
  { name: "Store", path: "/store" },
];

const Header: React.FC = () => {
  const pathname = usePathname();

  const getTabClassName = (path: string) => {
    return `py-[19px] px-1 rounded-[14px] font-medium text-sm xs:text-base ${
      pathname === path ? "bg-gradient text-white" : "text-black bg-white"
    }`;
  };

  return (
    <header className="relative z-[50]">
      <div className="w-full header rounded-b-[30px] h-[90px] md:h-[100px] flex items-center justify-between py-5 px-4 md:px-[30px]">
        {/* Logo  */}
        <Link href="/" className="flex items-center gap-[10px] flex-1">
          <div className="logomenubg bg-white w-12 md:w-[60px] h-12 md:h-[60px] rounded-[14px] flex items-center justify-center">
            <Image
              src="/assets/icon/menu-logo.svg"
              alt="menu-logo"
              width={28.7}
              height={36.58}
            />
          </div>

          <h2 className="text-xl md:text-[32px] uppercase">
            <span className="font-bold text-gradient">Workout </span>
            <span className="text-black font-medium">Creator</span>
          </h2>
        </Link>

        <div className="flex items-center gap-4">
          {/* Nav Links  */}
          <nav className="logomenubg bg-white rounded-[14px] overflow-hidden w-[492px] hidden lg:grid grid-cols-5 text-center h-[60px]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${getTabClassName(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <LanguageDropdown />

          {/* Menu Icon  */}
          <MenuModal />
        </div>
      </div>

      {/* Nav Links For Mobile  */}
      <div className="px-4 md:px-[30px] flex lg:hidden">
        <nav className="logomenubg bg-white rounded-[14px] overflow-hidden w-full grid grid-cols-5 text-center h-[60px] mt-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${getTabClassName(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
