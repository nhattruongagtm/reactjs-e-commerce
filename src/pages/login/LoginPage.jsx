import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Auth from '../../components/Auth'

export default function LoginPage() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="main">
                <Auth/>
                </div>
            </div>
            <Footer/>
            
        </>
    )
}
