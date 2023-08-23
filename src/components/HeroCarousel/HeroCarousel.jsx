import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import img from "../../assets/Files/hero_carousel_img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <div className="container hero_carousel_wrapper">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* Autoplay */}
        <SwiperSlide>
          <div
            className="hero_carousel"
            style={{ backgroundImage: `url(${img})` }}
          >
            <p>
              NEW <span>NAMPHONE</span> RELEASE THIS FALL
            </p>
            {/* <button className="hero_btn">save</button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero_carousel"
            style={{ backgroundImage: `url(${img})` }}
          >
            <p>
              NEW <span>NAMPHONE</span> <br /> RELEASE THIS FALL
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero_carousel"
            style={{ backgroundImage: `url(${img})` }}
          >
            <p>
              NEW <span>NAMPHONE</span> <br /> RELEASE THIS FALL
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero_carousel"
            style={{ backgroundImage: `url(${img})` }}
          >
            <p>
              NEW <span>NAMPHONE</span> <br /> RELEASE THIS FALL
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero_carousel"
            style={{ backgroundImage: `url(${img})` }}
          >
            <p>
              NEW <span>NAMPHONE</span> <br /> RELEASE THIS FALL
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero_carousel"
            style={{ backgroundImage: `url(${img})` }}
          >
            <p>
              NEW <span>NAMPHONE</span> <br /> RELEASE THIS FALL
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
