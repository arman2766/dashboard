import React from 'react'
import SideNav from '../components/sidenav/SideNav'
import Main from '../components/main/Main'
import './mainLayout.scss'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='app-layout'>
            <div className='sidebar-nav-container'>
                <SideNav />
            </div>
            <div className='main-container'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout