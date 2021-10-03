import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { cartApi } from "../api/cartApi";

export default function Header() {
  const history = useHistory();

  const user =
    localStorage.getItem("user") !== null
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
        });
  }, [carts]);

  const handleRedirectLogin = () => {
    if (!user) {
      history.push("/login");
    } else {
      localStorage.setItem("user", null);
      history.push("/login");
    }
  };
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo--item"></div>
      </div>
      <div className="header__items">
        <div className="header__item">
          <NavLink to="/" className="none-link">
            Home
          </NavLink>
        </div>
        <div className="header__item">
          <NavLink to="/products" className="none-link">
            Products
          </NavLink>
        </div>
        <div className="header__item">Contact</div>
        <div className="header__item">About</div>
      </div>
      <div className="header__btn--login">
        <div className="header__cart">
          <div className="header__cart--rounded">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="header__cart">
          {user !== null && (
            <Link to="/cart" className="none-link">
              <div className="header__cart--rounded ">
                <i className="fas fa-shopping-cart"></i>
                <div className="header__cart--number">{carts.length}</div>
              </div>
            </Link>
          )}
        </div>
        <div
          className="header__btn--login--rounded"
          onClick={handleRedirectLogin}
        >
          {!user ? "Login" : "Log out"}
        </div>
      </div>
      <div className="header__cart--detail none">
        <div className="cart--detail--scroll">
          <div className="cart--detail--main">
            <div className="cart--detail--main--item">
              <img
                className="cart--detail--img"
                src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-1_90x.jpg"
                alt=""
              />
              <div className="cart--detail--info">
                <div className="cart--detail--info--name">
                  Giày Chạy Bộ Nam New Balance 860 V11 - E11 / US10
                </div>
                <div className="cart--detail--info--price">
                  <div className="cart--detail--info--p">1.847.500₫</div>
                  <div className="cart--detail--info--s">3.695.000₫</div>
                </div>
                <div className="cart--detail--info--quantity">
                  <div className="cart--detail--quantity--sub btn">-</div>
                  <div className="cart--detail--quantity--num">1</div>
                  <div className="cart--detail--quantity--add btn">+</div>
                </div>
              </div>
              <i class="far fa-trash-alt"></i>
            </div>

            <div className="cart--detail--main--item">
              <img
                className="cart--detail--img"
                src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-1_90x.jpg"
                alt=""
              />
              <div className="cart--detail--info">
                <div className="cart--detail--info--name">
                  Giày Chạy Bộ Nam New Balance 860 V11 - E11 / US10
                </div>
                <div className="cart--detail--info--price">
                  <div className="cart--detail--info--p">1.847.500₫</div>
                  <div className="cart--detail--info--s">3.695.000₫</div>
                </div>
                <div className="cart--detail--info--quantity">
                  <div className="cart--detail--quantity--sub btn">-</div>
                  <div className="cart--detail--quantity--num">1</div>
                  <div className="cart--detail--quantity--add btn">+</div>
                </div>
              </div>
              <i class="far fa-trash-alt"></i>
            </div>
          </div>
        </div>
        <div className="cart--detail--total">
          <p>Tổng tiền: </p>
          <p>3.695.000₫</p>
        </div>
        <div className="cart--detail--checkout">
          <div className="cart--detail--checkout--cart btn">Xem giỏ hàng</div>
          <div className="cart--detail--checkout--check btn">Thanh toán</div>
        </div>
      </div>
    </div>
  );
}
