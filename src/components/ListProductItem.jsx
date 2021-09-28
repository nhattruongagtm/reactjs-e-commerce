import React from 'react'
import { Link } from 'react-router-dom';
import { Redirect, useHistory, useLocation, useParams, useRouteMatch } from 'react-router';

export default function ListProductItem(props) {
    const {product} = props;
    const history = useHistory();

    const faker = require('faker');

    const handleDetailProduct = () =>{
        // <Redirect to={`/product?id=${product.productID}`}/>

        history.push(`/product?id=${product.productID}`)

        
    }

    return (
        <div className="main__products--item" onClick={handleDetailProduct}>
            <img className="main__products--item--img "src="https://cdn.shopify.com/s/files/1/0456/5070/6581/products/FX7729-1_360x.jpg?v=1616578607" alt=""/>
                <div className="main__products--item--info--before">
                        <i class="fas fa-search"></i>
                        <div>Xem trước</div>
                </div>
            <div className="main__products--item--info">
            
                <div className="main__products--item--info--name">
                   {product.name}
                </div>
                <div className="main__products--item--info--price">
                    <div className="item--info--price">{product.price}.000₫</div>
                    <div className="item--info--sprice">{product.price}.000₫</div>
                </div>
                <div className="main__products--item--info--star">
                
                {
                    Array.from(new Array(product.rate)).map((index)=>{
                        return (<i key={faker.random.uuid()} className="fas fa-star"></i>);
                    })
                }{
                    Array.from(new Array(5-product.rate)).map((index)=>{
                        return (<i key = {faker.random.uuid()} className="far fa-star"></i>);
                    })
                }
            </div>
            </div>
            <div className="main__products--item--label">MỚI</div>
        </div>
   
    )
}
