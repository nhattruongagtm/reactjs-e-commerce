import React from 'react';
import { useHistory } from 'react-router';

export default function ListProductItem(props) {
    const {product} = props;
    const history = useHistory();
    

    const faker = require('faker');

    const handleDetailProduct = () =>{
        // <Redirect to={`/product?id=${product.productID}`}/>

        history.push(`/product?id=${product.id}`)

        
    }

    return (
        <div className="main__products--item" onClick={handleDetailProduct}>
            <img className="main__products--item--img "src={product.images[0]} alt=""/>
                <div className="main__products--item--info--before">
                        <i class="fas fa-search"></i>
                        <div>Xem trước</div>
                </div>
            <div className="main__products--item--info">
            
                <div className="main__products--item--info--name">
                   {product.name}
                </div>
                <div className="main__products--item--info--price">
                   {
                       product.priceSale > 0 ? (
                            <>
                                <div className="item--info--price">{product.priceSale}₫</div>
                                <div className="item--info--sprice">{product.price}₫</div>
                            </>
                       ): <div className="item--info--price">{product.price}₫</div>

                   }
                </div>
                <div className="main__products--item--info--star">
                
                {
                    Array.from(new Array(product.rate)).map((index)=>{
                        return (<i key={Math.random()*500} className="fas fa-star"></i>);
                    })
                }{
                    Array.from(new Array(5-product.rate)).map((index)=>{
                        return (<i key = {Math.random()*500} className="far fa-star"></i>);
                    })
                }
            </div>
            </div>
            <div className="main__products--item--label">MỚI</div>
        </div>
   
    )
}
