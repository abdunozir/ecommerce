import React from "react";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="select-boxes">
          <div className="select-box">
            <select>
              <option value="default">TV & Audio</option>
              <option value="val1">Smart TVs</option>
              <option value="val2">4K TVs</option>
              <option value="val3">Full HD TVs</option>
              <option value="val4">Speakers</option>
              <option value="val5">Home Thetres</option>
              <option value="val6">Projectors</option>
            </select>
          </div>
          <div className="select-box">
            <select>
              <option value="default">Smartphones</option>
              <option value="val1">Batteries</option>
              <option value="val2">Cases</option>
              <option value="val3">Chargers</option>
              <option value="val4">Data Cables</option>
              <option value="val5">Headphones</option>
              <option value="val6">Screen Covers</option>
            </select>
          </div>
          <div className="select-box">
            <select>
              <option value="default">Laptops & PCs</option>
              <option value="default">Laptops</option>
              <option value="default">Desktops</option>
              <option value="default">Monitors</option>
              <option value="default">Keyboards</option>
              <option value="default">Mouses</option>
              <option value="default">Accessories</option>
            </select>
          </div>
          <div className="select-box">
            <select>
              <option value="default">Gadgets</option>
              <option value="default">Smartwatches</option>
              <option value="default">Fitness Bracelets</option>
              <option value="default">VR Glasses</option>
              <option value="default">Gaming</option>
            </select>
          </div>
          <div className="select-box">
            <select>
              <option value="default">Photo & Video</option>
              <option value="default">Mirrorless Cameras</option>
              <option value="default">DSL-R Cameras</option>
              <option value="default">Compact Cameras</option>
              <option value="default">Instant Cameras</option>
              <option value="default">Accessories</option>
            </select>
          </div>
          <div className="select-box">
            <select>
              <option value="default">Gifts</option>
              <option value="default">For Her</option>
              <option value="default">For Him</option>
              <option value="default">For Weddings</option>
              <option value="default">For Anniversary</option>
              <option value="default">For Baptise</option>
              <option value="default">For Teens</option>
            </select>
          </div>
          <div className="select-box">
            <select>
              <option value="default">Books</option>
              <option value="default">Biography</option>
              <option value="default">Beletristic</option>
              <option value="default">Science Fiction</option>
              <option value="default">For Kids</option>
              <option value="default">History</option>
              <option value="default">Business</option>
            </select>
          </div>
          <div className="select-box">
            <select>
              <option value="default">Toys</option>
              <option value="default">For Girls</option>
              <option value="default">For Boys</option>
              <option value="default">Under 3 Years</option>
              <option value="default">Educational</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
