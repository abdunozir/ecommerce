import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

function ProductItem({ data }) {
  const [buttonClasses, setButtonClasses] = useState([]); // Classlarni saqlash uchun state
  const handleButtonClick = () => {
    const newClass = `products_wrapper__btn2`;

    // Yangi klassni qo'shish yoki olib tashlash

    if (buttonClasses.includes(newClass)) {
      setButtonClasses(buttonClasses.filter((cls) => cls !== newClass));
    } else {
      setButtonClasses([...buttonClasses, newClass]);
    }
  };

  return (
    <>
      <div className="products">
        <div className="products_body">
          <div>
            <p className="products_title">{data.title}</p>
            <p className="products_disc">{data.description}</p>
          </div>
          <img src={data.img} alt="praduc_img" className="products_img" />
        </div>
        <div className="products_wrapper">
          <p className="products_wrapper__old">
            {data.old_price} <br />
            <span className="products_wrapper__old-new"></span>
          </p>
          <button
            className={`products_wrapper__btn1 ${buttonClasses.join(" ")}`}
            onClick={handleButtonClick}
          >
            <HiOutlineShoppingBag />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
