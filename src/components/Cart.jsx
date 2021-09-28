import React from 'react'

export default function Cart() {
    return (
        <div className="cart__page">
            <div className="cart__page--title">
                Giỏ hàng của bạn
            </div>
            <div className="cart__page--main">
                <div className="cart__page--main--title">
                    <div className="cart__page--main--title-s">
                    
                    </div>
                    <div className="cart__page--main--title-s">
                    Sản phẩm
                    </div>
                    <div className="cart__page--main--title-s">
                        Giá
                    </div>
                    <div className="cart__page--main--title-s">
                    Số lượng
                    </div>
                    <div className="cart__page--main--title-s title--total">
                        Tổng
                    </div>
                </div>
                <div className="cart__page--main--item">
                    <div className="cart__page--main--item--img">
                        <img src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-1_x190.jpg?v=1616578631" alt=""/>
                    </div>
                    <div className="cart__page--main--item--name">
                        <div className="name">Giày Chạy Bộ Nam New Balance 860 V11</div>
                        <div className="color">Màu Sắc: <span>E11</span></div>
                        <div className="size">Kích Thước: <span>US10</span></div>
                        <div className="delete">Xóa</div>
                    </div>
                    <div className="cart__page--main--item--price">
                        1.847.500₫
                    </div>
                    <div className="cart__page--main--item--quantity">
                        <div className="btn--sub">-</div>
                        <input type="text" value="2"/>
                        <div className="btn--add">+</div>
                    </div>
                    <div className="cart__page--main--item--total">
                        3.695.000₫
                    </div>
                </div>
                <div className="cart__page--main--item">
                    <div className="cart__page--main--item--img">
                        <img src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/m860e11-1_x190.jpg?v=1616578631" alt=""/>
                    </div>
                    <div className="cart__page--main--item--name">
                        <div className="name">Giày Chạy Bộ Nam New Balance 860 V11</div>
                        <div className="color">Màu Sắc: <span>E11</span></div>
                        <div className="size">Kích Thước: <span>US10</span></div>
                        <div className="delete">Xóa</div>
                    </div>
                    <div className="cart__page--main--item--price">
                        1.847.500₫
                    </div>
                    <div className="cart__page--main--item--quantity">
                        <div className="btn--sub">-</div>
                        <input type="text" value="2"/>
                        <div className="btn--add">+</div>
                    </div>
                    <div className="cart__page--main--item--total">
                        3.695.000₫
                    </div>
                </div>
            </div>
            <div className="cart__page--checkout">
                <div className="cart__page--checkout--note">
                    <div>Thêm ghi chú cho đơn hàng</div>
                    <textarea cols="55" rows="3"/>
                </div>
                <div className="cart__page--checkout--exc">
                    <div>Tổng phụ</div>
                    <div>7.390.000₫</div>
                    <div>Thuế và vận chuyển được tính khi thanh toán.</div>
                    <div className="btn--checkout">
                        Thanh toán
                    </div>
                </div>
            </div>
        </div>
    )
}
