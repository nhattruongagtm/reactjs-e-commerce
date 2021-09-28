import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListProducts from '../../components/ListProducts'
import Navigation from '../../components/Navigation'
import Search from '../../components/Search'

export default function HomePage() {
    return (
        <>
            <Header/>
            <div className="container">
                <Banner/>
                <Search/>
                <div className="main">
                        <Navigation/>
                        <ListProducts/>
                </div>
            </div>
            <Footer/>
            
        </>
    )
}
