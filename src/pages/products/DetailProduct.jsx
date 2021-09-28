import React from 'react'
import DProduct from '../../components/DProduct'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function DetailProduct() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="main">
                       <DProduct/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
