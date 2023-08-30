import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img from "../../assets/Files/prodcut_photos.png";

// import required modules
import { Pagination, Navigation, FreeMode, Thumbs } from "swiper/modules";

export default function ProductImageZoom({ data = [img, img, img] }) {
  // Slider active count
  let [sliderCount, setSliderCount] = useState(0);

  //  product image zoom size
  let [zoom, setZoom] = useState(0);

  // Right button click to the product zoom slider
  const handleClickRightbtn = () => {
    // Handle the event here
    if (sliderCount !== data.length) {
      setSliderCount((sliderCount += 1));
    }
  };

  // left button click to the product zoom slider
  const handleClickLeftbtn = () => {
    // Handle the event here
    if (sliderCount !== 0) {
      setSliderCount((sliderCount -= 1));
    }
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    const elementRight = document.querySelector(".swiper-button-next");
    const elementLeft = document.querySelector(".swiper-button-prev");
    elementRight.addEventListener("click", handleClickRightbtn);
    elementLeft.addEventListener("click", handleClickLeftbtn);

    // Clean up the event listener when the component unmounts
    return () => {
      elementRight.removeEventListener("click", handleClickRightbtn);
      elementLeft.removeEventListener("click", handleClickLeftbtn);
    };
  }, []);

  return (
    <div className="container" style={{ padding: 0 }}>
      <div className="productImageZoom" id="productImageZoomid">
        {/* product zoom header */}
        <div className="productImageZoom-header">
          {/* exit from zoom slider page  to last page*/}
          <button className="productImageZoom-header__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M0.349306 1.45302C0.37382 1.67158 0.469114 1.88288 0.636223 2.04999L5.58597 6.99974L0.636223 11.9495C0.433034 12.1527 0.335496 12.4215 0.343264 12.6871C0.351378 12.9332 0.448398 13.1759 0.636223 13.3637C1.02707 13.7545 1.65994 13.7542 2.05044 13.3637L7.00018 8.41395L11.9499 13.3637C12.3408 13.7545 12.9736 13.7542 13.3641 13.3637C13.7546 12.9732 13.755 12.3403 13.3641 11.9495L8.4144 6.99974L13.3641 2.04999C13.7546 1.65949 13.755 1.02662 13.3641 0.635776C12.9733 0.244933 12.3404 0.245279 11.9499 0.635776L7.00018 5.58552L2.05044 0.635776C1.65959 0.244933 1.02672 0.245279 0.636223 0.635776C0.413008 0.858991 0.317369 1.16179 0.349306 1.45302Z"
                fill="#586A84"
              />
            </svg>
          </button>
        </div>
        {/* product zoom body */}
        <div className="productImageZoom-body">
          {/* Slider mini controller slider */}
          <div className="productImageZoom-body-controllers productImageZoom-body-controllers--large">
            {data.map((el, i) => {
              return (
                <div
                  key={i}
                  className={`productImageZoom-body-controller ${
                    sliderCount == i
                      ? "productImageZoom-body-controller--active"
                      : ""
                  }`}
                >
                  <img
                    src={el}
                    alt=""
                    className="productImageZoom-body-controller__img"
                  />
                </div>
              );
            })}
          </div>
          {/* main slider */}
          <div className="productImageZoom-body-slider  productImageZoom-body-slider--large">
            <Swiper
              style={{
                "--swiper-navigation-color": "#586A84",
                "--swiper-pagination-color": "red",
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper2"
            >
              {data.map((el) => {
                return (
                  <SwiperSlide>
                    <div
                      style={{
                        height: `${zoom >= 1 ? "500px" : "100%"}`,
                        overflow: `${zoom >= 1 ? "auto" : "hidden"}`,
                        padding: `${zoom >= 1 ? "2em 0" : "0"} `,
                        alignItems: `${zoom >= 1 ? "baseline" : "center"} `,
                      }}
                      className="mySwiper-image-wrapper"
                    >
                      <img
                        style={{
                          height: `${zoom * 25 + 100}%`,
                        }}
                        src={el}
                        alt="product image"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* a slider for small size  */}
          <div className="productImageZoom-body-small">
            <Swiper
              style={{
                "--swiper-navigation-color": "#586A84",
                "--swiper-pagination-color": "#fff",
                height: "550px",
              }}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper2"
            >
              {data.map((el) => {
                return (
                  <SwiperSlide>
                    <img
                      className="productImageZoom-body-controller__img"
                      src={el}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/*product zoom footer  */}
        <div className="productImageZoom-footer">
          <div className="productImageZoom-footer-zoombtns">
            <button
              onClick={() => {
                if (zoom != 4) {
                  setZoom((zoom += 1));
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 0C8.44775 0 8 0.447266 8 1V8H1C0.447754 8 0 8.44727 0 9C0 9.55273 0.447754 10 1 10H8V17C8 17.5527 8.44775 18 9 18C9.55225 18 10 17.5527 10 17V10H17C17.5522 10 18 9.55273 18 9C18 8.69141 17.8606 8.41602 17.6414 8.23242C17.4678 8.08789 17.2441 8 17 8H10V1C10 0.447266 9.55225 0 9 0Z"
                  fill="#586A84"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                if (zoom != 0) {
                  setZoom((zoom -= 1));
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="2"
                viewBox="0 0 18 2"
                fill="none"
              >
                <path
                  d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1Z"
                  fill="#586A84"
                />
              </svg>
            </button>
          </div>
          <div>
            <button className="productImageZoom-footer__addToCart">
              Add to cart
            </button>
            <button className="productImageZoom-footer__compare">
              Compare
            </button>
            <button className="productImageZoom-footer__wishlist">
              Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
