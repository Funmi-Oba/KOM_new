"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';



export default function AboutCarousel() {
  const imageData = [
    {
      src: "/images/about/about.jpg",
      caption: "Graduation of 2023 set",
    },
    {
      src: "/images/about/about1.jpg",
      caption: "Graduation of 2024 set",
    },
    {
      src: "/images/about/about2.jpg",
      caption: "Graduation of 2025 set",
    },
  ];
  return (
    <div className="relative">
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
          clickable: true,}}
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
  );
}
