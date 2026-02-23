import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <Navbar />
            {/* Outlet is a placeholder. Where all components render*/}
            <Outlet />    
            <Footer />
        </div>
    )
}

export default Layout
