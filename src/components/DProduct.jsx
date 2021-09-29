import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { productsApi } from "../api/productsApi";

export default function DProduct() {
  const faker = require("faker");
  const location = useLocation();

  const [product, setProduct] = useState({});
  const [sizes,setSizes] = useState([]);
  const [colors,setColors] = useState([]);
  const [desc,setDesc] = useState([]);
  const [images,setImages] = useState([]);


  const queryString = require("query-string");

  const qs = queryString.parse(location.search);

  useEffect(() => {
    productsApi
      .getProductById({
        productID: qs.id,
      })
      .then((res) => {
        const product = res[0];

        console.log("a", product);

        setProduct(product);  
        setSizes(product.sizes);
        setColors(product.color);
        setDesc(product.desc);
        setImages(product.images);

      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(sizes)

  return (
    <div className="detail__container">
      <div className="detail__product">
        <div className="detail__product--imgs">
          <div className="detail__product--imgs--ref">
            <div className="detail__product--imgs--ref--1">
              <img
                src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-1_110x110@2x.jpg?v=1612150307"
                alt=""
              />
            </div>
            <div className="detail__product--imgs--ref--1">
              <img
                src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-2_110x110@2x.jpg?v=1612150305"
                alt=""
              />
            </div>
            <div className="detail__product--imgs--ref--1">
              <img
                src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-3_110x110@2x.jpg?v=1612150307"
                alt=""
              />
            </div>
            <div className="detail__product--imgs--ref--1">
              <img
                src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-4_110x110@2x.jpg?v=1612150307"
                alt=""
              />
            </div>
          </div>
          <div className="detail__product--imgs--main">
            <img
              src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-1_1024x1024@2x.jpg?v=1612150307"
              alt=""
            />
            <div className="dots__imgs">
              <i class="fas fa-chevron-left"></i>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="detail__product--info">
          <div className="detail__product--info--status">new balance</div>
          <div className="detail__product--info--star">
            {/* {Number.parseInt(product.rate) > 0 &&
              Array.from(new Array(product.rate)).map((index) => {
                return (
                  <i key={faker.random.uuid()} className="fas fa-star"></i>
                );
              })}
            {Number.parseInt(product.rate) < 5 &&
              Array.from(new Array(5 - product.rate)).map((index) => {
                return (
                  <i key={faker.random.uuid()} className="far fa-star"></i>
                );
              })} */}
          </div>
          <div className="detail__product--info--name">{product.name}</div>
          <div className="detail__product--info--price">
            {product.priceSale > 0 ? (
              <>
                <div className="detail__product--info--price-p">
                  {product.priceSale}.000₫
                </div>
                <div className="detail__product--info--price-s">
                  {product.price}.000₫
                </div>
              </>
            ) : (
              <div className="detail__product--info--price-p">
                {product.price}.000₫
              </div>
            )}
          </div>
          <div className="label--detail">Màu sắc</div>
          <div className="detail__product--info--color">
            {
              
              colors.map((item,index)=>{
                return <div key = {index} className="sizes--detail--item">{item}</div>
              })
              
            }
          </div>
          <div className="label--detail">Kích thước</div>
          <div className="detail__product--info--size">
            {sizes.map((item, index) => {
              return (
                <div
                  key={index}
                  // sizes--detail--item--out
                  className="detail__product--info--size--item sizes--detail--item"
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="label--detail">Số lượng</div>
          <div className="detail__product--info--qc">
            <div className="detail__product--info--qc--quantity">
              <input type="text" value="1" />
              <div className="update__number">
                <span>+</span>
                <span>-</span>
              </div>
            </div>
            <div className="detail__product--info--qc--cart">
              Thêm vào giỏ hàng
            </div>
          </div>
        </div>
      </div>
      <div className="nav__info">
        <div className="nav__main">
          <div className="nav__main--item active">Thông tin sản phẩm</div>
          <div className="nav__main--item">Bình luận </div>
        </div>
        <div className="info__main">
          <div className="info__main--info">
            <div className="info__main--info--name bold">{product.name}</div>
            <div className="info__main--info--detail">
              <div className="bold brief--info">
                {desc[0]}
              </div>
              <div className="more--info">
                {desc[1]}
              </div>
              <div className="bold">Thông số</div>
              <ul className="list--info">
                <li>Primeblue thân thiện với môi trường</li>
                <li>Có dây thắt</li>
                <li>Đế boost</li>
                <li>Adidas Primeknit</li>
                <li>Mã sản phẩm: FX7729</li>
              </ul>
            </div>
          </div>
          <div className="info__main--rate"></div>
        </div>
      </div>
    </div>
  );
}
