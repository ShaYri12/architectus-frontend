"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import UserLoginModal from "./UserForm/UserLoginModal";
import UserRegisterModal from "./UserForm/UserRegisterModal";
import UserForgotPasswordModal from "./UserForm/UserForgotPasswordModal";
import SupportModal from "./SupportModal";
import CoachLoginModal from "./CoachesWindows/CoachLoginModal";
import CoachRegisterModal from "./CoachesWindows/CoachRegisterModal";
import CoachForgotPasswordModal from "./CoachesWindows/CoachForgotPasswordModal";
import FavoriteModal from "./FavoritesModal";
import VerificationLoadingModal from "./Body/VerificationLoadingModal";
import CaptchaModal from "./CaptchaModal";

const MenuModal = () => {
  const dropdownRef = useRef(null);
  const [isOpenMenuModal, setIsOpenMenuModal] = useState<boolean>(false);
  useState<boolean>(false);
  const [isUserLoginModalOpen, setIsUserLoginModalOpen] =
    useState<boolean>(false);
  const [isUserRegisterModalOpen, setIsUserRegisterModalOpen] =
    useState<boolean>(false);
  const [isUserForgotPasswordModalOpen, setIsUserForgotPasswordModalOpen] =
    useState<boolean>(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState<boolean>(false);
  const [isCoachLoginModalOpen, setIsCoachLoginModalOpen] =
    useState<boolean>(false);
  const [isCoachRegisterModalOpen, setIsCoachRegisterModalOpen] =
    useState<boolean>(false);
  const [isCoachForgotPasswordModalOpen, setIsCoachForgotPasswordModalOpen] =
    useState<boolean>(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] =
    useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [isOpenCaptchaModal, setIsOpenCaptchaModal] = useState<boolean>(false);

  // Open Menu Modal
  const handleOpenMenuModal = () => {
    setIsOpenMenuModal(!isOpenMenuModal);
  };

  //  Open UserLogin Modal
  const handleUserLoginModal = () => {
    setIsUserRegisterModalOpen(false);
    setIsUserLoginModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close UserLogin Modal
  const handleCloseUserLoginModal = () => {
    setIsUserLoginModalOpen(false);
  };

  //  Open UserRegister Modal
  const handleUserRegisterModal = () => {
    setIsUserLoginModalOpen(false);
    setIsUserRegisterModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close UserRegister Modal
  const handleCloseUserRegisterModal = () => {
    setIsUserRegisterModalOpen(false);
  };

  //  Open ForgotPassword Modal
  const handleUserForgotPasswordModal = () => {
    setIsUserRegisterModalOpen(false);
    setIsUserLoginModalOpen(false);
    setIsUserForgotPasswordModalOpen(true);
  };

  //  Close ForgotPassword Modal
  const handleCloseUserForgotPasswordModal = () => {
    setIsUserForgotPasswordModalOpen(false);
  };

  //  Open Support Modal
  const handleSupportModal = () => {
    setIsSupportModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close Support Modal
  const handleCloseSupportModal = () => {
    setIsSupportModalOpen(false);
  };

  //   Coach Login Modal
  const handleCoachLoginModalClick = () => {
    setIsCoachRegisterModalOpen(false);
    setIsCoachLoginModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close Coach Login Modal
  const handleCloseCoachLoginModal = () => {
    setIsCoachLoginModalOpen(false);
  };

  //  Open Coach Register Modal
  const handleCoachRegisterModal = () => {
    setIsCoachLoginModalOpen(false);
    setIsCoachRegisterModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close Coach Register Modal
  const handleCloseCoachRegisterModal = () => {
    setIsCoachRegisterModalOpen(false);
  };

  //  Open Coach Forgot password Modal
  const handleCoachForgotPasswordModal = () => {
    setIsCoachLoginModalOpen(false);
    setIsCoachRegisterModalOpen(false);
    setIsCoachForgotPasswordModalOpen(true);
  };

  //  Close Coach Forgot password  Modal
  const handleCloseCoachForgotPasswordModal = () => {
    setIsCoachForgotPasswordModalOpen(false);
  };

  //  Open Favorites Modal
  const handleFavoritesModal = () => {
    setIsFavoritesModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close Favorites Modal
  const handleCloseFavoritesModal = () => {
    setIsFavoritesModalOpen(false);
  };

  //  Open Verification Modal
  const handleVerificationModal = () => {
    setIsFavoritesModalOpen(false);
    setIsVerificationModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close Verification Modal
  const handleCloseVerificationModal = () => {
    setIsVerificationModalOpen(false);
  };

  //  Open  Captcha Modal
  const handleOpenCaptchaModal = () => {
    setIsCoachRegisterModalOpen(false);
    setIsUserRegisterModalOpen(false);
    setIsOpenCaptchaModal(true);
    setIsOpenMenuModal(false);
  };

  //  Close  Captcha Modal
  const handleCloseCaptchaModal = () => {
    setIsOpenCaptchaModal(false);
  };

  useEffect(() => {
    if (isOpenMenuModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpenMenuModal]);

  return (
    <div>
      <button
        onClick={handleOpenMenuModal}
        className="bg-gradient logomenubg w-12 md:w-[60px] h-12 md:h-[60px] rounded-[14px] flex items-center justify-center relative"
      >
        <Image
          src="/assets/icon/menu-right-alt.svg"
          alt="menu-right-alt-icon"
          width={20}
          height={14}
        />
      </button>

      {isOpenMenuModal && (
        <div
          ref={dropdownRef}
          className="fixed inset-0 w-full h-screen z-50 py-5 px-[30px] flex justify-end"
        >
          {/* Close Window  */}
          <div
            onClick={handleOpenMenuModal}
            className={`absolute inset-0 h-screen windows-bg ${
              isOpenMenuModal ? "" : "no-blur"
            }`}
          ></div>

          <div className="relative flex flex-col items-end z-[999]">
            {/* Close Window btn  */}
            <button
              onClick={handleOpenMenuModal}
              className="closebtn-bg logomenubg min-w-[60px] min-h-[60px] rounded-[14px] flex items-center justify-center float-end mb-5"
            >
              <Image
                src="/assets/icon/times.svg"
                alt="times-logo"
                width={14}
                height={14}
              />
            </button>

            <div className="min-w-[200px] w-full logomenubg bg-white rounded-[20px] px-5 pb-5 flex flex-col min-h-[200px] h-fit overflow-y-scroll tabs-scrollbar">
              <button
                onClick={handleCoachRegisterModal}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/plus-circle.svg"
                  alt="plus-circle"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <span>Create</span>
              </button>

              <button className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium">
                <Image
                  src="/assets/icon/document.svg"
                  alt="document"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <span>Post</span>
              </button>

              <button className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium">
                <Image
                  src="/assets/icon/star-tag.svg"
                  alt="star-tag"
                  width={18}
                  height={20}
                  loading="lazy"
                />
                <span>Review</span>
              </button>

              <button
                onClick={handleFavoritesModal}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/heart.svg"
                  alt="heart"
                  width={18}
                  height={17}
                  loading="lazy"
                />
                <span>Favorites</span>
              </button>

              <button className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium">
                <Image
                  src="/assets/icon/phone-call.svg"
                  alt="phone-call"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <span>Calls</span>
              </button>

              <button className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium">
                <Image
                  src="/assets/icon/chats-text.svg"
                  alt="chats-text"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <span>Messages</span>
              </button>

              <button className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium">
                <Image
                  src="/assets/icon/settings.svg"
                  alt="settings"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <span>Settings</span>
              </button>

              <button
                onClick={handleSupportModal}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/headphones.svg"
                  alt="headphones"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <span>Support</span>
              </button>

              <button
                onClick={handleUserRegisterModal}
                className="py-4 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/user-plus-bottom.svg"
                  alt="user-plus-bottom"
                  width={19}
                  height={20}
                  loading="lazy"
                />
                <span>Register</span>
              </button>

              <button className="closebtn-bg p-4 flex items-center justify-center gap-2 text-base font-medium text-white rounded-[14px] mt-5">
                <Image
                  src="/assets/icon/log-out.svg"
                  alt="log-out"
                  width={19}
                  height={18}
                  loading="lazy"
                />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Coach Login Windows Render  */}
      {isCoachLoginModalOpen && (
        <CoachLoginModal
          onClose={handleCloseCoachLoginModal}
          onSignup={handleCoachRegisterModal}
          onForgotPassword={handleCoachForgotPasswordModal}
        />
      )}

      {/* Coach Register Windows Render  */}
      {isCoachRegisterModalOpen && (
        <CoachRegisterModal
          onClose={handleCloseCoachRegisterModal}
          onLogin={handleCoachLoginModalClick}
          onCaptcha={handleOpenCaptchaModal}
        />
      )}

      {/* Coach Forgot passowr Windows Render  */}
      {isCoachForgotPasswordModalOpen && (
        <CoachForgotPasswordModal
          onClose={handleCloseCoachForgotPasswordModal}
        />
      )}

      {/* User Login Windows Modal  */}
      {isUserLoginModalOpen && (
        <UserLoginModal
          onClose={handleCloseUserLoginModal}
          onSignup={handleUserRegisterModal}
          onForgotPassword={handleUserForgotPasswordModal}
        />
      )}

      {/* User Register Windows Modal  */}
      {isUserRegisterModalOpen && (
        <UserRegisterModal
          onClose={handleCloseUserRegisterModal}
          onLogin={handleUserLoginModal}
          onCaptcha={handleOpenCaptchaModal}
        />
      )}

      {/* User Forgot Password Windos Modal  */}
      {isUserForgotPasswordModalOpen && (
        <UserForgotPasswordModal onClose={handleCloseUserForgotPasswordModal} />
      )}

      {/* Support Windows Modal  */}
      {isSupportModalOpen && <SupportModal onClose={handleCloseSupportModal} />}

      {/* Favorutes Windows Modal  */}
      {isFavoritesModalOpen && (
        <FavoriteModal onClose={handleCloseFavoritesModal} />
      )}

      {/* Verification Windows Modal  */}
      {isVerificationModalOpen && (
        <VerificationLoadingModal onClose={handleCloseVerificationModal} />
      )}

      {isOpenCaptchaModal && <CaptchaModal onClose={handleCloseCaptchaModal} />}
    </div>
  );
};

export default MenuModal;
