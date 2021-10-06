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
      <label className="header__menu" htmlFor="header__nav">
        {" "}
        <i class="fas fa-bars"></i>
      </label>
      <input type="checkbox" id="header__nav" hidden />
      <label htmlFor="header__nav" className="header__layer"></label>
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
        <label htmlFor="header__nav" className="header__close">
          <i class="far fa-times-circle"></i>
        </label>
      </div>
      <div className="header__btn--login">
        <div className="header__cart">
          {/* <i className="fas fa-user user--default"></i> */}
          {user === null ? (
            <></>
          ) : (
            <>
              <div className="header__cart--rounded">
                <img
                  className="header__cart--rounded--img"
                  src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/51615188_743283126040607_9211828225620049920_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5Oyu62K1aVQAX_3S_xs&tn=HtdEXTK0HM4CEwO2&_nc_ht=scontent.fsgn8-2.fna&oh=0e66ab58c05b2ba83f9b1ab15670aba2&oe=617FDB38"
                  alt=""
                />
              </div>
            </>
          )}
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
