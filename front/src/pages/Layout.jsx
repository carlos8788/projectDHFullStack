import React from 'react'
import Header from '../components/Header'
import Home from './Home'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout