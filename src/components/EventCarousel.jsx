"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function EventCarousel() {
  const imageData = [
    {
      src: "/images/about/about.jpg",
    },
    {
      src: "/images/about/about1.jpg",
    },
    {
      src: "/images/about/about2.jpg",
    },
    {
      src: "/images/about/about3.jpg",
    },
    {
      src: "/images/about/about4.jpg",
    },
    {
      src: "/images/about/about5.jpg",
    },
    {
      src: "/images/about/about6.jpg",
    },

    {
      src: "/images/about/about10.png",
    },
    {
      src: "/images/about/about11.png",
    },
  ];
  return (
    <div id="event" className="relative scroll-mt-[50px] py-10 px-6 w-full bg-[#8f8f8f]/20">
      <div className="w-full md:w-3/4 h-full mx-auto mb-10 mt-10">
        <h3 className="text-2xl md:text-3xl text-gray-900 font-bold text-center mt-10 mb-2">
          A Glimpse into Our Past Events
        </h3>
        <p className="text-center text-xl text-[#8f8f8f] mb-6">
          Witness the highlights of how God raised, trained, and released
          ministers through our campus programs. These moments reflect the heart
          of our assignment.
        </p>

        <div className="hidden md:block absolute -left-20 top-1/2 transform -translate-y-1/2 z-20">
          <div className="swiper-button-prev  !scale-100" />
        </div>
        <div className="hidden md:block absolute -right-20 top-1/2 transform -translate-y-1/2 z-20">
          <div className="swiper-button-next  !scale-100" />
        </div>
        <Swiper
          modules={[Navigation, Autoplay, EffectFade, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          effect="flip"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="rounded-lg"
        >
          {imageData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center" />
      </div>
    </div>
  );
}
