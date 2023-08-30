import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBars, FaRandom, FaHeart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi";

import HeaderTop from "./HeaderTop";
import Categories from "./Categories";
import { SelectComponent } from "../";

const Header = () => {
  const searchSelectValues = ["All Values"];

  return (
    <header>
      <HeaderTop />
      <div className="container">
        <div className="inner">
          <div className="title-box">
            <button className="menu-bar">
              <FaBars />
            </button>
            <span className="title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="149"
                height="41"
                viewBox="0 0 149 41"
                fill="none"
              >
                <path
                  d="M7.16695 25.2245C6.09979 24.8599 5.12964 24.4953 4.25651 24.1307C3.38338 23.7418 2.63152 23.28 2.00092 22.7453C1.37033 22.2106 0.873131 21.5787 0.509326 20.8495C0.169775 20.096 0 19.1846 0 18.1152C0 16.0492 0.788243 14.3964 2.36473 13.1569C3.96547 11.9173 6.1968 11.2975 9.05873 11.2975C10.1016 11.2975 11.0718 11.3704 11.9692 11.5163C12.8666 11.6621 13.6305 11.893 14.2611 12.209C14.916 12.5006 15.4253 12.8895 15.7891 13.3756C16.1529 13.8374 16.3348 14.3843 16.3348 15.0162C16.3348 15.6482 16.1893 16.195 15.8983 16.6568C15.6072 17.0943 15.2555 17.4711 14.8432 17.787C14.3096 17.4468 13.5942 17.1551 12.6968 16.912C11.7994 16.6447 10.8171 16.511 9.74996 16.511C8.65855 16.511 7.85818 16.669 7.34885 16.985C6.83952 17.2766 6.58486 17.6534 6.58486 18.1152C6.58486 18.4797 6.74251 18.7835 7.05781 19.0266C7.3731 19.2453 7.84605 19.4519 8.47664 19.6464L10.4048 20.2662C12.6846 20.9953 14.4309 21.9311 15.6436 23.0734C16.8805 24.1915 17.499 25.7227 17.499 27.6671C17.499 29.7331 16.6865 31.4102 15.0615 32.6983C13.4365 33.9622 11.0475 34.5942 7.89456 34.5942C6.77889 34.5942 5.73598 34.4969 4.76584 34.3025C3.81995 34.1324 2.9832 33.8771 2.25559 33.5369C1.55223 33.1723 0.994399 32.7348 0.582087 32.2244C0.194029 31.6897 0 31.082 0 30.4015C0 29.6966 0.206156 29.1012 0.618468 28.615C1.03078 28.1046 1.47947 27.7158 1.96454 27.4484C2.64365 27.9831 3.46827 28.4449 4.43841 28.8338C5.43281 29.2227 6.5121 29.4171 7.67627 29.4171C8.8647 29.4171 9.70145 29.2348 10.1865 28.8703C10.6716 28.5057 10.9141 28.0803 10.9141 27.5942C10.9141 27.1081 10.7201 26.7435 10.332 26.5005C9.94399 26.2331 9.39828 25.9779 8.69493 25.7349L7.16695 25.2245Z"
                  fill="#3B4758"
                />
                <path
                  d="M37.9368 33.9744C37.6943 34.0473 37.3062 34.1202 36.7727 34.1931C36.2633 34.266 35.7298 34.3025 35.1719 34.3025C34.6384 34.3025 34.1533 34.266 33.7167 34.1931C33.3044 34.1202 32.9527 33.9744 32.6617 33.7556C32.3706 33.5369 32.1402 33.2452 31.9704 32.8806C31.8249 32.4917 31.7522 31.9935 31.7522 31.3859V23.2922C31.7522 22.2957 31.4975 21.603 30.9882 21.2141C30.5031 20.8009 29.8968 20.5943 29.1692 20.5943C28.6841 20.5943 28.2233 20.6551 27.7867 20.7766C27.3501 20.8981 26.9985 21.0439 26.7317 21.2141V33.9744C26.4891 34.0473 26.1011 34.1202 25.5675 34.1931C25.0582 34.266 24.5246 34.3025 23.9668 34.3025C23.4332 34.3025 22.9481 34.266 22.5115 34.1931C22.0992 34.1202 21.7475 33.9744 21.4565 33.7556C21.1655 33.5369 20.935 33.2452 20.7653 32.8806C20.6198 32.4917 20.547 31.9935 20.547 31.3859V10.2402C20.8138 10.1916 21.2018 10.1309 21.7112 10.0579C22.2447 9.96072 22.7783 9.91211 23.3119 9.91211C23.8455 9.91211 24.3184 9.94857 24.7307 10.0215C25.1673 10.0944 25.5311 10.2402 25.8222 10.459C26.1132 10.6777 26.3315 10.9815 26.477 11.3704C26.6468 11.735 26.7317 12.2211 26.7317 12.8287V16.4016C27.047 16.2801 27.5199 16.1464 28.1505 16.0006C28.8054 15.8305 29.5208 15.7454 30.2969 15.7454C32.6981 15.7454 34.5656 16.353 35.8995 17.5683C37.2577 18.7592 37.9368 20.5457 37.9368 22.9276V33.9744Z"
                  fill="#3B4758"
                />
                <path
                  d="M60.0547 25.1515C60.0547 26.6585 59.8243 28.0074 59.3635 29.1984C58.9027 30.365 58.2478 31.3494 57.399 32.1515C56.5743 32.9535 55.5799 33.5612 54.4158 33.9744C53.2516 34.3876 51.954 34.5942 50.5231 34.5942C49.0921 34.5942 47.7945 34.3754 46.6303 33.9379C45.4662 33.5004 44.4596 32.8806 43.6108 32.0786C42.7861 31.2522 42.1434 30.2557 41.6826 29.089C41.2218 27.9223 40.9914 26.6099 40.9914 25.1515C40.9914 23.7175 41.2218 22.4172 41.6826 21.2505C42.1434 20.0839 42.7861 19.0995 43.6108 18.2974C44.4596 17.4711 45.4662 16.8391 46.6303 16.4016C47.7945 15.9641 49.0921 15.7454 50.5231 15.7454C51.954 15.7454 53.2516 15.9763 54.4158 16.4381C55.5799 16.8756 56.5743 17.5075 57.399 18.3339C58.2478 19.136 58.9027 20.1203 59.3635 21.287C59.8243 22.4537 60.0547 23.7418 60.0547 25.1515ZM47.3216 25.1515C47.3216 26.6342 47.6005 27.7765 48.1583 28.5786C48.7404 29.3564 49.5408 29.7452 50.5594 29.7452C51.5781 29.7452 52.3542 29.3442 52.8878 28.5421C53.4456 27.7401 53.7245 26.6099 53.7245 25.1515C53.7245 23.6932 53.4456 22.5752 52.8878 21.7974C52.3299 20.9953 51.5417 20.5943 50.5231 20.5943C49.5044 20.5943 48.7162 20.9953 48.1583 21.7974C47.6005 22.5752 47.3216 23.6932 47.3216 25.1515Z"
                  fill="#3B4758"
                />
                <path
                  d="M71.1849 15.7454C72.6401 15.7454 73.9862 15.9398 75.2231 16.3287C76.4843 16.6933 77.5636 17.2645 78.461 18.0422C79.3583 18.82 80.0617 19.8044 80.571 20.9953C81.0804 22.162 81.335 23.5595 81.335 25.188C81.335 26.7435 81.1167 28.1046 80.6802 29.2713C80.2436 30.4379 79.6251 31.4223 78.8248 32.2244C78.0244 33.0022 77.0543 33.5855 75.9143 33.9744C74.7987 34.3633 73.5496 34.5577 72.1671 34.5577C71.1242 34.5577 70.1541 34.3997 69.2567 34.0837V40.1358C69.0142 40.2087 68.6261 40.2816 68.0925 40.3545C67.559 40.4517 67.0132 40.5003 66.4554 40.5003C65.9218 40.5003 65.4368 40.4639 65.0002 40.391C64.5879 40.3181 64.2362 40.1722 63.9452 39.9535C63.6541 39.7347 63.4358 39.4309 63.2903 39.042C63.1448 38.6774 63.072 38.1913 63.072 37.5837V20.0839C63.072 19.4276 63.2054 18.8929 63.4722 18.4797C63.7633 18.0665 64.1513 17.6898 64.6364 17.3495C65.3883 16.8634 66.322 16.4745 67.4377 16.1829C68.5534 15.8912 69.8024 15.7454 71.1849 15.7454ZM71.2576 29.6723C73.7558 29.6723 75.0048 28.1776 75.0048 25.188C75.0048 23.6325 74.6895 22.478 74.0589 21.7245C73.4526 20.971 72.5673 20.5943 71.4032 20.5943C70.9423 20.5943 70.53 20.6551 70.1662 20.7766C69.8024 20.8738 69.4871 20.9953 69.2203 21.1412V29.1619C69.5114 29.3077 69.8267 29.4293 70.1662 29.5265C70.5058 29.6237 70.8696 29.6723 71.2576 29.6723Z"
                  fill="#3B4758"
                />
                <path
                  d="M93.7029 34.5942C92.272 34.5942 90.938 34.3997 89.7011 34.0108C88.4884 33.5976 87.4212 32.99 86.4996 32.1879C85.6022 31.3859 84.8867 30.3772 84.3532 29.1619C83.8438 27.9467 83.5892 26.5248 83.5892 24.8963C83.5892 23.2922 83.8438 21.9189 84.3532 20.7766C84.8867 19.6099 85.578 18.662 86.4268 17.9329C87.2757 17.1794 88.2459 16.6325 89.3373 16.2923C90.4287 15.9277 91.5444 15.7454 92.6843 15.7454C93.9697 15.7454 95.1339 15.9398 96.1768 16.3287C97.244 16.7176 98.1535 17.2523 98.9053 17.9329C99.6815 18.6134 100.276 19.4276 100.688 20.3755C101.125 21.3235 101.343 22.3564 101.343 23.4745C101.343 24.3009 101.112 24.9328 100.652 25.3703C100.191 25.8078 99.5481 26.0873 98.7234 26.2088L89.7375 27.5578C90.0043 28.3598 90.55 28.9675 91.3746 29.3807C92.1992 29.7696 93.1451 29.964 94.2123 29.964C95.2067 29.964 96.1404 29.8425 97.0136 29.5994C97.9109 29.3321 98.6386 29.0282 99.1964 28.688C99.5844 28.931 99.9119 29.2713 100.179 29.7088C100.445 30.1463 100.579 30.6081 100.579 31.0942C100.579 32.1879 100.07 33.0022 99.0509 33.5369C98.2748 33.9501 97.4016 34.2296 96.4315 34.3754C95.4613 34.5212 94.5518 34.5942 93.7029 34.5942ZM92.6843 20.2662C92.1022 20.2662 91.5929 20.3634 91.1563 20.5578C90.744 20.7523 90.4044 21.0075 90.1377 21.3235C89.8709 21.6151 89.6647 21.9554 89.5192 22.3443C89.3979 22.7089 89.3252 23.0856 89.3009 23.4745L95.522 22.4537C95.4492 21.9675 95.1824 21.4814 94.7216 20.9953C94.2608 20.5092 93.5817 20.2662 92.6843 20.2662Z"
                  fill="#3B4758"
                />
                <path
                  d="M110.504 33.9744C110.262 34.0473 109.874 34.1202 109.34 34.1931C108.831 34.266 108.297 34.3025 107.74 34.3025C107.206 34.3025 106.721 34.266 106.284 34.1931C105.872 34.1202 105.52 33.9744 105.229 33.7556C104.938 33.5369 104.708 33.2452 104.538 32.8806C104.393 32.4917 104.32 31.9935 104.32 31.3859V20.4485C104.32 19.8894 104.417 19.4155 104.611 19.0266C104.829 18.6134 105.132 18.2488 105.52 17.9329C105.908 17.6169 106.381 17.3374 106.939 17.0943C107.521 16.827 108.14 16.5961 108.795 16.4016C109.449 16.2072 110.129 16.0614 110.832 15.9641C111.535 15.8426 112.239 15.7818 112.942 15.7818C114.106 15.7818 115.028 16.0127 115.707 16.4745C116.386 16.912 116.726 17.6412 116.726 18.662C116.726 19.0023 116.677 19.3426 116.58 19.6828C116.483 19.9988 116.362 20.2905 116.216 20.5578C115.707 20.5578 115.185 20.5821 114.652 20.6308C114.118 20.6794 113.597 20.7523 113.087 20.8495C112.578 20.9467 112.093 21.0561 111.632 21.1776C111.196 21.2748 110.82 21.3964 110.504 21.5422V33.9744Z"
                  fill="#3B4758"
                />
                <path
                  d="M120.002 34.0108C119.614 33.6706 119.299 33.2695 119.056 32.8077C118.838 32.3459 118.729 31.8233 118.729 31.24C118.729 30.7539 118.838 30.28 119.056 29.8182C119.299 29.3321 119.59 28.8824 119.929 28.4692L126.187 21.1047H119.493C119.347 20.8373 119.202 20.4971 119.056 20.0839C118.935 19.6707 118.874 19.221 118.874 18.7349C118.874 17.8843 119.056 17.2766 119.42 16.912C119.808 16.5232 120.317 16.3287 120.948 16.3287H132.408C132.796 16.669 133.099 17.07 133.317 17.5318C133.56 17.9936 133.681 18.5162 133.681 19.0995C133.681 19.5856 133.56 20.0717 133.317 20.5578C133.099 21.0196 132.82 21.4571 132.481 21.8703L126.369 29.2348H133.499C133.645 29.5022 133.778 29.8425 133.899 30.2557C134.045 30.6688 134.118 31.1185 134.118 31.6046C134.118 32.4553 133.924 33.0751 133.536 33.464C133.172 33.8285 132.675 34.0108 132.044 34.0108H120.002Z"
                  fill="#3B4758"
                />
                <path
                  d="M129.984 2.85294C129.984 1.55345 131.037 0.5 132.337 0.5C133.636 0.5 134.689 1.55345 134.689 2.85294V7.55882C134.689 8.85832 133.636 9.91176 132.337 9.91176C131.037 9.91176 129.984 8.85832 129.984 7.55882V2.85294Z"
                  fill="#FFC045"
                />
                <path
                  d="M120.689 8.65175C119.77 7.73286 119.77 6.24306 120.689 5.32418C121.608 4.4053 123.098 4.4053 124.017 5.32418L127.344 8.65175C128.263 9.57063 128.263 11.0604 127.344 11.9793C126.425 12.8982 124.936 12.8982 124.017 11.9793L120.689 8.65175Z"
                  fill="#FFC045"
                />
                <path
                  d="M137.327 25.2895C136.409 24.3706 136.409 22.8808 137.327 21.9619C138.246 21.0431 139.736 21.0431 140.655 21.9619L143.983 25.2895C144.901 26.2084 144.901 27.6982 143.983 28.6171C143.064 29.5359 141.574 29.5359 140.655 28.6171L137.327 25.2895Z"
                  fill="#FFC045"
                />
                <path
                  d="M141.748 19.3235C140.449 19.3235 139.395 18.2701 139.395 16.9706C139.395 15.6711 140.449 14.6176 141.748 14.6176H146.454C147.754 14.6176 148.807 15.6711 148.807 16.9706C148.807 18.2701 147.754 19.3235 146.454 19.3235H141.748Z"
                  fill="#FFC045"
                />
                <path
                  d="M140.655 11.9793C139.736 12.8982 138.246 12.8982 137.327 11.9793C136.408 11.0604 136.408 9.57063 137.327 8.65175L140.655 5.32419C141.574 4.40531 143.063 4.40531 143.982 5.32419C144.901 6.24307 144.901 7.73287 143.982 8.65175L140.655 11.9793Z"
                  fill="#FFC045"
                />
              </svg>
            </span>
          </div>
          {
            // ===============================================
          }
          <div className="search-box">
            <input type="search" placeholder="Search for products" />
            <div className="select-box">
              <SelectComponent options={searchSelectValues} />
            </div>
            <button className="search-btn">
              <BiSearch />
            </button>
          </div>
          {
            // ===============================================
          }
          <ul className="inner-menu">
            <li className="inner-menu_item">
              <a href="#">
                <BsFillPersonFill />
                <span className="menu-item_tooltip">My Account</span>
              </a>
            </li>
            <li className="inner-menu_item">
              <a href="#">
                <span className="menu-item_tooltip">Compare</span>
                <FaRandom />
              </a>
            </li>
            <li className="inner-menu_item">
              <a href="#">
                <span className="menu-item_tooltip">Wishlist</span>
                <FaHeart />
              </a>
            </li>
            <li className="inner-menu_item">
              <a href="#">
                <span className="menu-item_tooltip">My Cart</span>
                <HiShoppingBag />
                <span>$0.00</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Categories />
    </header>
  );
};

export default Header;
