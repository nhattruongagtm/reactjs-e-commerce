import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { cartApi } from "../api/cartApi";

export default function CartItem(props) {
  const history = useHistory();
  const { product } = props;

  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(0);

  useEffect(()=>{
    product.priceSale === 0 ? setPrice(product.price) : setPrice(product.priceSale);

    
  },[]);

  useEffect(()=>{
    product && props.sendPrice(price*quantity);
  });

  const handleChangeQuantity = (e) => {
    const value = e.target.value;
    if(value){
        setQuantity(Number.parseInt(value));
    }
  
  };

  const handleUpdateQuantity = (value) => {
    let number = 200;
    if (value === -1) {
      if (quantity > 201) {
        number = 200;
      } else if (quantity > 1) {
        number = quantity - 1;

      } else {
        number = 1;
      }
    } else {
      if (quantity < 199) {
        number = quantity + 1;
      }
    }

    cartApi.updateCart(product.id,{
      quantity: number
    }).then(()=>{
      setQuantity(number);
    });
    
  };

  const handleDeleteCart = () =>{
    cartApi.deleteCart(product.id).then(()=>{
      console.log("xóa sản phẩm thành công!");
    })
  }
  const handleDetailProduct = () =>{
    history.push(`/product?id=${product.productID}`)
  }

  return (
    <div className="cart__page--main--item">
      <div className="cart__page--main--item--img">
        <img
          src={product.url}
          alt=""
          onClick={handleDetailProduct}
        />
      </div>
      <div className="cart__page--main--item--name">
        <div className="name" onClick={handleDetailProduct}>{product.productName}</div>
        <div className="color" onClick={handleDetailProduct}>
          Màu Sắc: <span>{product.productColor}</span>
        </div>
        <div className="size" onClick={handleDetailProduct}>
          Kích Thước: <span>{product.productSize}</span>
        </div>
        <div className="delete"onClick={handleDeleteCart}>Xóa</div>
      </div>
      <div className="cart__page--main--item--price">{price}₫</div> 
      <div className="cart__page--main--item--quantity">
        <div className="btn--sub" onClick={() => handleUpdateQuantity(-1)}>
          -
        </div>
        <input
          type="number"
          className="number--cart"
          value={quantity}
          onChange={handleChangeQuantity}
        />
        <div className="btn--add" onClick={() => handleUpdateQuantity(1)}>
          +
        </div>
      </div>
      <div className="cart__page--main--item--total">{price*quantity}₫</div>  
    </div>
  );
}
