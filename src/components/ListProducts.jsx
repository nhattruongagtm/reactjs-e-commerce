import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsApi } from "../api/productsApi";
import {
  changePage,
  changePageNext,
  changePagePrevious,
} from "../store/loadProductSlice";
import ListProductItem from "./ListProductItem";
import value from "../constants/sortValues";

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const numberOfPage = 50;
  const dispatch = useDispatch();
  const qs = require('query-string');

  const params = useSelector((state) => state.loadProduct);

  console.log(params);

  const [pageNumber, setPageNumber] = useState(0);

  // xem params truyền vào
  const news = qs.stringify(params)

  console.log(news)



  useEffect(() => {
    productsApi.getAllProducts(params).then((res) => {
      setProducts(res.data);




      let pn = 0;

      if (res.pagination._totalRows % res.pagination._limit === 0) {
        pn = res.pagination._totalRows / res.pagination._limit;
      } else {
        pn = Math.floor(res.pagination._totalRows / res.pagination._limit) + 1;
      }

      setPageNumber(pn);
    });
  }, [params]);

  console.log(products.length);

  let ps = Array.from(new Array(pageNumber));

  for (let i = 0; i < ps.length; i++) {
    ps[i] = i + 1;
  }

  return (
    <div className="container__product">
      <div className="main__products">
        {products.length > 0 &&
          products.map((item, index) => {
            return <ListProductItem product={item} key={index} />;
          })}
      </div>
      <div className="pagination">
        {params._page > 1 && (
          <div
            className="pagination__item"
            onClick={() => dispatch(changePagePrevious())}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        )}
        {/* pagination__item--active */}

        {pageNumber > 0 &&
          ps.map((index) => {
            return (
              <div
                key={index}
                className={
                  index !== params._page
                    ? `pagination__item`
                    : `pagination__item pagination__item--active`
                }
                onClick={() => dispatch(changePage(index))}
              >
                {index}
              </div>
            );
          })}

        <div className="pagination__item">...</div>
        {params._page < pageNumber && (
          <div
            className="pagination__item"
            onClick={() => dispatch(changePageNext())}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        )}
      </div>
    </div>
  );
}
