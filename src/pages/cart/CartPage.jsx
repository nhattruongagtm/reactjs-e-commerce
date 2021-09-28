import React from 'react'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function CartPage() {
    return (
        <>
            <Header/>
                <div className="container">
                    <div className="main">
                            <Cart/>
                    </div>
                </div>
            <Footer/>
        </>
    )
}
