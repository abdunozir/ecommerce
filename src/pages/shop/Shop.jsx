import React, { useState } from "react";
import products from "../../constants/products";
import ProductItem from "../../components/product_card/ProductItem";
import ReactPaginate from "react-paginate";
import { GrPrevious, GrNext } from "react-icons/gr";

function Shop() {

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, index) => (
            <ProductItem data={item} key={index} />
          ))}
      </>
    );
  }
  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(20);
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      setItemOffset(newOffset);
      window.scrollTo(0, 0);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel={<GrNext />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<GrPrevious />}
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <>
      <section className="shop-section">
        <div className="container">
          <div className="productsBox">
            <PaginatedItems itemsPerPage={20} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
