import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactForm from "./ContactForm";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />

      <section className="workoutbg bg-no-repeat bg-center bg-cover relative px-5 py-10 md:py-20">
        <div className="max-w-[1180px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="order-2 md:order-1">
            <div className="hidden md:flex flex-col gap-6 md:gap-8">
              <h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
                Contact&nbsp;
                <span className="relative">
                  <span className="text-[#3D2278]">Us</span>
                  <img
                    src="/assets/contactline.webp"
                    alt="contactline"
                    className="absolute left-0 top-[50px] md:top-[65px] lg:top-[76px]"
                  />
                </span>
              </h1>

              <p className="text-sm md:text-lg text-[#0F0A19] max-w-[530px] w-full md:mb-20">
                We&apos;re here to help reach out with any questions or feedback and
                we&apos;ll respond promptly!
              </p>
            </div>

            <div className="flex flex-col gap-[30px] md:gap-10">
              <div className="flex gap-[15px]">
                <div className="contactbox w-[50px] h-[50px] rounded-full flex items-center justify-center">
                  <Image
                    src="/assets/icons/phone-icon.svg"
                    alt="phone-icon"
                    width={22}
                    height={24}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-[10px] flex-1">
                  <h2 className="text-base text-[#0F0A19] font-semibold">
                    Get In Touch
                  </h2>
                  <p className="text-[#0F0A19B2] text-sm max-w-[387px] w-full">
                    Need to contact us? We look forward to assisting you. Feel
                    free to give us a call or use the contact form.
                  </p>
                </div>
              </div>

              <div className="flex gap-[15px]">
                <div className="contactbox w-[50px] h-[50px] rounded-full flex items-center justify-center">
                  <Image
                    src="/assets/icons/location-icon.svg"
                    alt="location-icon"
                    width={18}
                    height={24}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-[10px] flex-1">
                  <h2 className="text-base text-[#0F0A19] font-semibold">
                    Address
                  </h2>
                  <p className="text-[#0F0A19B2] text-sm max-w-[387px] w-full">
                    Klijānu iela 16, Apartment No. 97, LV-1013
                  </p>
                </div>
              </div>

              <div className="flex gap-[15px]">
                <div className="contactbox w-[50px] h-[50px] rounded-full flex items-center justify-center">
                  <Image
                    src="/assets/icons/email-icon.svg"
                    alt="email-icon"
                    width={22}
                    height={16}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-[10px] flex-1">
                  <h2 className="text-base text-[#0F0A19] font-semibold">
                    Email
                  </h2>
                  <p className="text-[#0F0A19B2] text-sm max-w-[387px] w-full">
                    workout-creator@proton.me
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col gap-6 md:gap-8">
            <h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
              Contact&nbsp;
              <span className="relative">
                <span className="text-[#3D2278]">Us</span>
                <img
                  src="/assets/contactline.webp"
                  alt="contactline"
                  className="absolute left-0 top-[50px] md:top-[65px] lg:top-[76px]"
                />
              </span>
            </h1>

            <p className="text-sm md:text-lg text-[#0F0A19] max-w-[530px] w-full md:mb-20">
              We&apos;re here to help reach out with any questions or feedback and
              we&apos;ll respond promptly!
            </p>
          </div>

          <div className="order-1 md:order-2">
          <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
