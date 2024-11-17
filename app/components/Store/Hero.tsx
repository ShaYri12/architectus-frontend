"use client";
import React, { useState } from "react";
import Image from "next/image";
import CreateModal from "../Body/CreateModal";
import VerificationLoadingModal from "../Body/VerificationLoadingModal";

const Hero: React.FC = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [isOpenVerificationModal, setIsOpenVerificationModal] =
    useState<boolean>(false);

  // Open Create modal
  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  //   Close Create modal
  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  //   Open VisualisationVerification Modal
  const handleOpenVerificationCreateModal = () => {
    setIsOpenCreateModal(false);
    setIsOpenVerificationModal(true);
  };

  //  Close VisualisationVerification Modal
  const handleCloseVerificationModal = () => {
    setIsOpenVerificationModal(false);
    setIsOpenCreateModal(false);
  };

  return (
    <section>
      <div className="px-4 md:px-[30px] mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col md:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Search for workout supplements, vitamins, training equipment,
            sportswear, events and country location.
          </p>

          <button
            onClick={handleOpenCreateModal}
            className="max-w-[204px] w-full rounded-[14px] bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium"
          >
            <Image
              src="/assets/icon/w-plus-circle.svg"
              alt="plus circle icon"
              width={20}
              height={20}
            />
            Create
          </button>
        </div>
      </div>

      {isOpenCreateModal && (
        <CreateModal
          onClose={handleCloseCreateModal}
          onCreate={handleOpenVerificationCreateModal}
        />
      )}

      {isOpenVerificationModal && (
        <VerificationLoadingModal onClose={handleCloseVerificationModal} />
      )}
    </section>
  );
};

export default Hero;
