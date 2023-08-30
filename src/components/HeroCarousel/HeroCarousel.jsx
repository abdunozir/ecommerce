import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import img from "../../assets/Files/hero_carousel_img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

let data = [
  {
    id: 1,
    title: "NEW NAMPHONE RELEASE THIS FALL",
    btn_text: "Buy now",
    img: img,
  },
  {
    id: 2,
    title: "NEW NAMPHONE RELEASE THIS FALL",
    btn_text: "Buy now",
    img: img,
  },
  {
    id: 3,
    title: "NEW NAMPHONE RELEASE THIS FALL",
    btn_text: "Buy now",
    img: img,
  },
  {
    id: 4,
    title: "NEW NAMPHONE RELEASE THIS FALL",
    btn_text: "Buy now",
    img: img,
  },
];

export default function HeroCarousel() {
  return (
    <div className="container hero-carousel-wrapper">
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
        {data.map((el) => {
          return (
            <SwiperSlide>
              <div
                className="hero-carousel"
                style={{
                  backgroundImage: `url(http://localhost:3002/static/media/hero_carousel_img.268baabd5da24a17a8cf.png)`,
                }}
              >
                <div className="hero-carousel-context">
                  <p>{el.title}</p>
                  <button className="hero-carousel-context__herobtn ">
                    {el.btn_text}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
