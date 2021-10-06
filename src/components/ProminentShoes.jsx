import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { productsApi } from "../api/productsApi";
import { converPrice } from "../utils/converPrice";

export default function ProminentShoes() {
  const [newProducts, setNewProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    productsApi
      .getNewProducts({
        _page: 1,
        _limit: 4,
        _sort: "rate",
        _order: "desc",
        name_like: "Nike",
      })
      .then((res) => {
        setNewProducts(res.data);
      });
  }, []);
  const handleDetailProduct = (id) => {
    history.push(`/product?id=${id}`);
  };
  return (
    <div className="new__shoes prominent__shoes">
      <div className="new__shoes--title">Nổi bật</div>
      <div className="prominent__shoes--list">
        {newProducts.length > 0 &&
          newProducts.map((item, index) => {
            return (
              <div className="main__products--item item--shoes" key={index}>
                <div
                  className="item--shoes--img"
                  onClick={() => handleDetailProduct(item.id)}
                >
                  <img
                    className="main__products--item--img-n"
                    src={item.images[0]}
                    alt=""
                  />
                </div>
                <div className="main__products--item--info--before">
                  <i class="fas fa-search"></i>
                  <div>Xem trước</div>
                </div>
                <div className="main__products--item--info">
                  <div
                    className="main__products--item--info--name "
                    onClick={() => handleDetailProduct(item.id+"")}
                  >
                    {item.name}
                  </div>
                  <div
                    className="main__products--item--info--price"
                    onClick={() => handleDetailProduct(item.id+"")}
                  >
                    {item.priceSale === 0 ? (
                      <div className="item--info--price">{converPrice(item.price+"")}₫</div>
                    ) : (
                      <>
                        <div className="item--info--price">
                          {converPrice(item.priceSale+"")}₫
                        </div>
                        <div className="item--info--sprice">{converPrice(item.price+"")}₫</div>
                      </>
                    )}
                  </div>
                  <div className="main__products--item--info--star">
                    {Array.from(new Array(item.rate)).map((index) => {
                      return (
                        <i
                          key={Math.random() * 500}
                          className="fas fa-star"
                        ></i>
                      );
                    })}
                    {Array.from(new Array(5 - item.rate)).map((index) => {
                      return (
                        <i
                          key={Math.random() * 500}
                          className="far fa-star"
                        ></i>
                      );
                    })}
                  </div>
                </div>
                <div className="main__products--item--label">MỚI</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
