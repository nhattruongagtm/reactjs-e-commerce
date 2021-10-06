import React, { useEffect, useState } from "react";
import { cartApi } from "../api/cartApi";
import { converPrice } from "../utils/converPrice";
import CartItem from "./CartItem";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    user !== null &&
      cartApi
        .loadProductCart({
          customerID: user.id,
        })
        .then((res) => {
          setCarts(res);
          setIsLoading(false);
        });
  }, [carts]);

  //   console.log(carts);

  // display total price
  let tp = 0;

  const handleGetPrice = (value) => {
    tp += value;
    setTotalPrice(tp);
  };

  return (
    <div className="cart__page">
      <div className="cart__page--title">Giỏ hàng của bạn</div>
      {isLoading && (
        <div className="loading--product">
          {" "}
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_ngt1ne8r.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      )}
      {!isLoading && carts.length > 0 && (
        <>
          <div className="cart__page--main">
            <div className="cart__page--main--title">
              <div className="cart__page--main--title-s"></div>
              <div className="cart__page--main--title-s">Sản phẩm</div>
              <div className="cart__page--main--title-s">Giá</div>
              <div className="cart__page--main--title-s">Số lượng</div>
              <div className="cart__page--main--title-s title--total">Tổng</div>
            </div>
            {user !== null &&
              carts &&
              carts.map((item, index) => {
                return (
                  <CartItem
                    product={item}
                    key={index}
                    sendPrice={handleGetPrice}
                  />
                );
              })}
          </div>
          <div className="cart__page--checkout">
            <div className="cart__page--checkout--note">
              <div>Thêm ghi chú cho đơn hàng</div>
              <textarea cols="55" rows="3" />
            </div>
            <div className="cart__page--checkout--exc">
              <div>Tổng phụ</div>
              <div>{converPrice(totalPrice)}₫</div>
              <div>Thuế và vận chuyển được tính khi thanh toán.</div>
              <div className="btn--checkout">Thanh toán</div>
            </div>
          </div>
        </>
      )}
      {!isLoading && carts.length <= 0 && (
        <div className="no__cart">Không có sản phẩm nào trong giỏ hàng.</div>
      )}
    </div>
  );
}
