import React, { useEffect, useState } from 'react'
import axiosClient from '../api/axiosClient'
import { productsApi } from '../api/productsApi'
import ListProductItem from './ListProductItem'

export default function ListProducts() {

    const [products,setProducts] = useState({
        data: [],
        pagination: {}
    });

    useEffect(()=>{
        productsApi.getAllProducts({
            _page: 1,
            _limit: 5
        }).then((res)=>{
            // console.log(res);

            setProducts({
                ...products,
                data: res.data,
                pagination: res.pagination
            })
        })
    },[]);

    console.log(products)
    
    return (
        <div className="container__product">
            <div className="main__products">
                
                {
                    products.data.map((item,index)=>{
                        return <ListProductItem product={item} key={index}/>
                    })
                }
            </div>
            <div className="pagination">
                <div className="pagination__item">
                <i className="fas fa-chevron-left"></i>
                </div>
                <div className="pagination__item pagination__item--active">
                    1
                </div>
                <div className="pagination__item">
                    2
                </div>
                <div className="pagination__item">
                    ...
                </div>
                <div className="pagination__item">
                <i className="fas fa-chevron-right"></i>
                </div>
            </div>
    
        </div>
        )
}
