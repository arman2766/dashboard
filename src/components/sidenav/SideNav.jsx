import React from 'react'
import './sidenav.scss'
import { DashboardIcon, PaymentIcon, SettingIcon, ShippingIcon } from '../icons';
import ProductIcon from '../icons/ProductIcon';
import OrderIcon from '../icons/OrderIcon';
import { NavLink } from 'react-router-dom';
import { colors } from '../../assets/style/colors'
import CustomButton from '../button/CustomButton';
const navList = [
    {
        label: 'Dashboard',
        icon: (isActive) => <DashboardIcon color={isActive ? colors.darkGray : colors.lightGray} />,
        route: '/dashboard',
    },
    {
        label: 'Order',
        icon: (isActive) => <OrderIcon color={isActive ? colors.darkGray : colors.lightGray} />,
        route: '/order',
    },
    {
        label: 'Products',
        icon: (isActive) => <ProductIcon color={isActive ? colors.darkGray : colors.lightGray} />,
        route: '/product',
    },
    {
        label: 'Shipping',
        icon: (isActive) => <ShippingIcon color={isActive ? colors.darkGray : colors.lightGray} />,
        route: '/shipping',
    },
    {
        label: 'Payment',
        icon: (isActive) => <PaymentIcon color={isActive ? colors.darkGray : colors.lightGray} />,
        route: '/payment',
    },
    {
        label: 'Setting',
        icon: (isActive) => <SettingIcon color={isActive ? colors.darkGray : colors.lightGray} />,
        route: '/setting',
    },
]

const SideNav = () => {

    return (
        <div className='side-nav-container'>
            <ul>
                {navList.map((navItem, i) => (
                    <li key={i}>
                        <NavLink to={navItem.route} className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }>
                            {({ isActive }) => (
                                <>
                                    {navItem.icon(isActive)}
                                    <span>{navItem.label}</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className='customer-support'>
                <h1>Customer Support</h1>
                <p>Ask you query , place
                    requests or important
                    issues. Our support
                    team will contact 24/7
                    to you. </p>
                <CustomButton text='Connect Now' />
            </div>
        </div>
    )
}

export default SideNav