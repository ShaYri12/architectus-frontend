"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import ShareModal from "../Body/ShareModal";
import CreateSendModal from "../Body/CreateSendModal";
import VerificationLoadingModal from "../Body/VerificationLoadingModal";
import ReviewsForm from "../Reviews/ReviewsForm";
import ReviewsList from "../Reviews/ReviewsList";
import FavoriteModal from "../FavoritesModal";

const podcastsdata = [
  {
    id: 0,
    name: "John Doe",
    image: "/assets/coaches-1.png",
    specialties: ["Cross Fit", "Boxing"],
    sportsvideo: "/assets/podcasts-1.mp4",
    sportsvideothumbnail: "/assets/podcats-thumbnail-1.jpg",
    videotitle: "Are You Eating for Performance, Health, or Appearance?",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 1,
    name: "Esthera Jackson",
    image: "/assets/coaches-2.png",
    specialties: ["Circuit", "Cross Fit", "Boxing"],
    sportsvideo: "/assets/podcasts-2.mp4",
    sportsvideothumbnail: "/assets/podcats-thumbnail-2.jpg",
    videotitle: "How to get good at jiu jitsu",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 2,
    name: "Alexa Liras",
    image: "/assets/coaches-3.png",
    specialties: ["Strength", "Boxing"],
    sportsvideo: "/assets/podcasts-3.mp4",
    sportsvideothumbnail: "/assets/podcats-thumbnail-3.jpg",
    videotitle: "How To Get Better at Jiu Jitsu",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 3,
    name: "Laurent Michael",
    image: "/assets/coaches-4.png",
    specialties: ["Strength", "Boxing"],
    sportsvideo: "/assets/podcasts-4.mp4",
    sportsvideothumbnail: "/assets/podcats-thumbnail-3.jpg",
    videotitle: "Sport psychology - inside the mind of champion athletes",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
];

const PodcatsVideos: React.FC = () => {
  const [isShareModalVisible, setIsShareModalVisible] =
    useState<boolean>(false);
  const [isOpenCreateSendModal, setIsOpenCreateSendModal] =
    useState<Boolean>(false);
  const [isOpenVeriicationModal, setIsOpenVeriicationModal] =
    useState<Boolean>(false);
  const [isOpenFavoritesModal, setIsOpenFavoritesModal] =
    useState<Boolean>(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleOpenShareModal = () => {
    setIsShareModalVisible(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalVisible(null);
  };

  const handleOpenCreateSend = () => {
    setIsOpenCreateSendModal(true);
  };

  const handleCloseCreateSend = () => {
    setIsOpenCreateSendModal(false);
  };

  const handleOpenVeriicationModal = () => {
    setIsOpenCreateSendModal(false);
    setIsOpenVeriicationModal(true);
  };

  const handleCloseVeriicationModal = () => {
    setIsOpenVeriicationModal(false);
  };

  // Open Favorites Modal
  const handleOpenFavoritesModal = () => {
    setIsOpenFavoritesModal(true);
  };

  // Clsoe Favorites Modal
  const handleCloseFavoritesModal = () => {
    setIsOpenFavoritesModal(false);
  };

  const handlePlay = (index: any) => {
    setPlayingIndex(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handlePause = (index: any) => {
    setPlayingIndex(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <div className="mx-auto relative z-10">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          10: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {podcastsdata.map((podcast, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5 mb-16">
              {/* header */}
              <div className="flex items-center w-full justify-between gap-3 mb-5">
                {/* Profile & name  */}
                <div className="flex items-center gap-3">
                  <Image
                    src={podcast.image}
                    alt={podcast.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-10 md:w-14 h-10 md:h-14 rounded-full object-cover"
                  />
                  <h2 className="text-lg md:text-2xl font-semibold">
                    @{podcast.name}
                  </h2>
                </div>

                <div className="flex gap-3">
                  {/* Share btn  */}
                  <button
                    onClick={handleOpenShareModal}
                    className="logomenubg bg-[#BACCFD42] rounded-lg md:rounded-[14px] w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
                  >
                    <Image
                      src="/assets/icon/arrow-share.svg"
                      alt="arrow-share"
                      loading="lazy"
                      width={18}
                      height={16}
                    />
                  </button>

                  {/* Favourtes btn  */}
                  <button
                    onClick={handleOpenFavoritesModal}
                    className="logomenubg bg-[#BACCFD42] rounded-lg md:rounded-[14px] w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
                  >
                    <Image
                      src="/assets/icon/favioures-iocn.svg"
                      alt="heart"
                      loading="lazy"
                      width={18}
                      height={16}
                    />
                  </button>
                </div>
              </div>

              {/* Video  */}
              <div className="rounded-2xl overflow-hidden h-[180px] md:h-[280px] mb-4">
                {playingIndex === index ? (
                  <video
                    ref={(el) => {
                      if (el) {
                        videoRefs.current[index] = el;
                      }
                    }}
                    src={podcast.sportsvideo}
                    loop
                    autoPlay
                    muted
                    controls
                    className="w-full h-full object-cover"
                    onPause={() => handlePause(index)}
                  ></video>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={podcast.sportsvideothumbnail}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handlePlay(index)}
                      className="bg-[#3D2278] text-white text-base flex items-center justify-center transition-opacity duration-300 hover:opacity-90 w-12 h-12 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"
                    >
                      <FaPlay />
                    </button>
                  </div>
                )}
              </div>

              {/* Details section */}
              <div className="flex flex-col mt-5">
                <h2 className="text-base md:text-lg font-medium mb-1">
                  {podcast.videotitle}
                </h2>

                <p className="text-xs md:text-sm mb-4">{podcast.disc}</p>

                <div className="flex flex-col md:flex-row gap-5">
                  {/* Training Types */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-gradient">
                      Training Types
                    </h3>

                    <div className="flex flex-wrap gap-[6px] items-center">
                      {podcast.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-[#ECECEC] text-sm rounded-lg px-3 py-1"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* languages  */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-gradient">
                      Languages
                    </h3>

                    <span className="bg-[#ECECEC] text-sm rounded-lg px-3 py-1 flex items-center gap-2">
                      <Image
                        src="/assets/flags/en.png"
                        alt={podcast.language}
                        width={30}
                        height={20}
                        loading="lazy"
                        className="w-[20px] h-[16px] rounded-[2px] overflow-hidden object-cover"
                      />
                      {podcast.language}
                    </span>
                  </div>

                  {/* Social Icon  */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-gradient">
                      Social Media
                    </h3>

                    <div className="flex gap-[6px] items-center">
                      <button className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center bg-[#ECECEC]">
                        <Image
                          src="/assets/icon/globe-earth.svg"
                          alt="globe-earth"
                          width={12}
                          height={12}
                          loading="lazy"
                        />
                      </button>

                      <button
                        onClick={handleOpenCreateSend}
                        className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center bg-[#ECECEC]"
                      >
                        <Image
                          src="/assets/icon/facebook-messenger.svg"
                          alt="facebook-messenger"
                          width={12}
                          height={12}
                          loading="lazy"
                        />
                      </button>

                      <button className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center bg-[#ECECEC]">
                        <Image
                          src="/assets/icon/phone-call-2.svg"
                          alt="phone-call-2"
                          width={12}
                          height={12}
                          loading="lazy"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#CEBAFD52] rounded-[14px] p-3 md:p-5 mt-5">
                  <button className="flex items-center justify-between w-full">
                    <span className="text-xl font-medium">Reviews (40)</span>
                    <Image
                      src="/assets/icon/angle-down-small.svg"
                      alt="angle-down-small"
                      width={14}
                      height={9}
                    />
                  </button>

                  <div>
                    <ReviewsForm />
                    <ReviewsList />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Create & verification Windows  */}
      {isOpenCreateSendModal && (
        <CreateSendModal
          onClose={handleCloseCreateSend}
          onCreate={handleOpenVeriicationModal}
        />
      )}
      {isOpenVeriicationModal && (
        <VerificationLoadingModal onClose={handleCloseVeriicationModal} />
      )}

      {/* Share WIndow  */}
      {isShareModalVisible && <ShareModal onClose={handleCloseShareModal} />}

      {/* Favorute Window  */}
      {isOpenFavoritesModal && (
        <FavoriteModal onClose={handleCloseFavoritesModal} />
      )}
    </div>
  );
};

export default PodcatsVideos;
