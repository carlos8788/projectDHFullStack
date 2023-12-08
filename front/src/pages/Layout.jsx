import React from 'react'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Home from './Home'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Aside />
            <main>{children}</main>
        </>
    )
}

export default Layout