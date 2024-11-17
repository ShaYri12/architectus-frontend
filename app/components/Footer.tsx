import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="w-full footer-blur bg-[#030406] rounded-t-[30px] flex items-center justify-between flex-col md:flex-row py-5 gap-3 px-4 md:px-[30px]">
      {/* Logo  */}
      <Link href="/" className="flex items-center gap-[10px] flex-1">
        <div className="logomenubg bg-white w-[30px] h-[30px] rounded-[7px] flex items-center justify-center">
          <Image
            src="/assets/icon/menu-logo.svg"
            alt="menu-logo"
            width={14}
            height={18}
          />
        </div>

        <h2 className="text-xl md:text-2xl uppercase">
          <span className="font-bold text-gradient">Workout </span>
          <span className="text-white font-medium">Creator</span>
        </h2>
      </Link>

      <p className="text-white text-sm text-center">
        © Innovative AI Solutions for Urban Development. 2024
      </p>
    </div>
  );
};

export default Footer;
