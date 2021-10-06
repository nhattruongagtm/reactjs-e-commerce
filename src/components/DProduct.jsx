import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { cartApi } from "../api/cartApi";
import { productsApi } from "../api/productsApi";
import { converPrice } from "../utils/converPrice";

export default function DProduct() {
  const faker = require("faker");
  const location = useLocation();

  const [product, setProduct] = useState({});
  const [sizes,setSizes] = useState([]);
  const [colors,setColors] = useState([]);
  const [desc,setDesc] = useState([]);
  const [images,setImages] = useState([]);
  const [displayImage,setDisplayImage] = useState({
    image: '',
    position: 0
  });

  // thông tin lưu vào giỏ hàng
  const [cartParams,setCartParams] = useState({
    id: '',
    color: '',
    size: '',
    quantity: 1,
  })


  const queryString = require("query-string");

  const qs = queryString.parse(location.search);

  useEffect(() => {
    productsApi
      .getProductById({
        id: qs.id,
      })
      .then((res) => {
        const product = res[0];

        console.log("a", product);

        setProduct(product);  
        setSizes(product.sizes);
        setColors(product.color);
        setDesc(product.desc);
        setImages(product.images);
        product.images && setDisplayImage({
          image: product.images[0],
          position: 0
        })


        // set giá trị mặt định cho cart
        setCartParams(
          {
            id: product.id,
            color: product.color[0],
            size: product.sizes[0],
            quantity: 1,
          }
        )

      })
      .catch((e) => {
        console.log(e);
      });

  }, []);


  const handleChangeImage = (index) =>{
  
      setDisplayImage({
        image : images[index],
        position: index,
      })
  }

  const handleChangePosImage = (value) =>{
    switch(value){
      case 1:
        displayImage.position === 3 ? setDisplayImage({
          image: product.images[0],
          position: 0
        }) : setDisplayImage({
          image: product.images[displayImage.position],
          position: displayImage.position + 1
        })
        break;
      case -1:
        displayImage.position === 0 ? setDisplayImage({
          image: product.images[3],
          position: 3
        }) : setDisplayImage({
          image: product.images[displayImage.position],
          position: displayImage.position - 1
        })
        break;
    }
  }


  // lưu thông tin sp để thêm vào giỏ hàng

  const handleChangeQuantity = (e) => {
    const value = e.target.value;

    setCartParams({
      ...cartParams,
      quantity : Number.parseInt(value)
    })
  }

  const handleQuantityCart = (value) =>{
    let quantity = 200;
    if(value === -1){
      if(cartParams.quantity > 201){
        quantity = 200;
      }
      else if(cartParams.quantity > 1){
        quantity = cartParams.quantity - 1;
      }
      else{
        quantity = 1;
      }
    }
    else{
      if(cartParams.quantity < 199){
        quantity = cartParams.quantity + 1;
      }
      
    }

    setCartParams({
      ...cartParams,
      quantity: quantity
    })
  }
  const handleColorCart = (color) =>{
    setCartParams({
      ...cartParams,
      color : color
    })
  }
  const handleColorSize = (size) =>{
    setCartParams({
      ...cartParams,
      size : size
    })
  }

  const q = require('query-string')

  const handleAddCart = () =>{
    const user = localStorage.getItem('user') !==null ? JSON.parse(localStorage.getItem('user')) : null;
    if (user){

      console.log(cartParams)
      
      const par = {
        customerID: user.id,
        productID: cartParams.id,
        productSize: cartParams.size,
        productColor: cartParams.color,
      }

      console.log(par)

      cartApi.loadProductCart(par).then((value)=>{
        console.log("value",value)
        if(value.length > 0){
          const number = value[0].quantity;

          const pa = {
            quantity: cartParams.quantity + number
          }
          cartApi.updateCart(value[0].id,pa).then((res)=>{
            res && alert('Cập nhật giỏ hàng thành công!');
          });
        }
        else{
          cartApi.addToCart({
            productID: cartParams.id,
            customerID: user.id,
            productSize: cartParams.size,
            productColor: cartParams.color,
            quantity: cartParams.quantity,
            productName: product.name,
            price: product.price,
            priceSale: product.priceSale,
            url: images[0],
    
          }).then((res)=>{
            res && alert('Thêm sản phẩm vào giỏ hàng thành công!');
          })
        }
      })
      
    }else{
      alert('Vui lòng đăng nhập nhé bro!');
    }
    
  }

  
  

  return (
    <div className="detail__container">
      <div className="detail__product">
        <div className="detail__product--imgs">
          <div className="detail__product--imgs--ref">
            {
              images.map((item,index)=>{
                return (
                  <div className="detail__product--imgs--ref--1"  key={index} onClick={()=>handleChangeImage(index)}>
                    <img
                      className={index === displayImage.position ? 'active' : ''}
                      src={item}
                      alt=""
                    />
                  </div>
                )
              })
            }
           </div>
          <div className="detail__product--imgs--main">
            <img
              src={images[displayImage.position]}
              alt=""
            />
            <div className="dots__imgs">
              <i className="fas fa-chevron-left" onClick={()=>handleChangePosImage(-1)}></i>
              <i className="fas fa-chevron-right" onClick={()=>handleChangePosImage(1)}></i>
            </div>
          </div>
        </div>
        <div className="detail__product--info">
          <div className="detail__product--info--status">new balance</div>
          <div className="detail__product--info--star">
            {Number.parseInt(product.rate) > 0 &&
              Array.from(new Array(product.rate)).map((index) => {
                return (
                  <i key={Math.random()*500} className="fas fa-star"></i>
                );
              })}
            {Number.parseInt(product.rate) < 5 &&
              Array.from(new Array(5 - product.rate)).map((index) => {
                return (
                  <i key={Math.random()*500} className="far fa-star"></i>
                );
              })}
          </div>
          <div className="detail__product--info--name">{product.name}</div>
          <div className="detail__product--info--price">
            {product.priceSale > 0 ? (
              <>
                <div className="detail__product--info--price-p">
                  {converPrice(product.priceSale+"")}₫
                </div>
                <div className="detail__product--info--price-s">
                  {converPrice(product.price+"")}₫
                </div>
              </>
            ) : (
              <div className="detail__product--info--price-p">
                {converPrice(product.price+"")}₫ 
              </div>
            )}
          </div>
          <div className="label--detail">Màu sắc</div>
          <div className="detail__product--info--color">
            {
              
              colors.map((item,index)=>{
                return <div key = {index} className={item === cartParams.color ? 'sizes--detail--item active' : 'sizes--detail--item'} onClick={()=> handleColorCart(item)}>{item}</div>
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
                  className={item === cartParams.size ? 'detail__product--info--size--item sizes--detail--item active' : 'detail__product--info--size--item sizes--detail--item'} onClick={()=> handleColorSize(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="label--detail">Số lượng</div>
          <div className="detail__product--info--qc">
            <div className="detail__product--info--qc--quantity">
              <input type="number" className="number--cart" value={cartParams.quantity} onChange={handleChangeQuantity} />
              <div className="update__number">
                <span onClick={() => handleQuantityCart(1)}>+</span>
                <span onClick={() => handleQuantityCart(-1)}>-</span>
              </div>
            </div>
            <div className="detail__product--info--qc--cart" onClick={handleAddCart}>
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
            <div className="info__main--info--name bold">{desc[0]}</div>
            <div className="info__main--info--detail">
              <div className="bold brief--info">
                {desc[1]}
              </div>
              <div className="more--info">
                {desc[2]}
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
