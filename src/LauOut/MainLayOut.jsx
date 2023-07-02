import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayOut = () => {
    return (
        <div className='container'>
            <Header />
            <Outlet />
        </div>
    )
}

export default MainLayOut