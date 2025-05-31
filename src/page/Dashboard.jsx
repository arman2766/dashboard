
import Main from '../components/main/Main'
import SideNav from '../components/sidenav/SideNav'
import StatsCard from '../components/stats/StatsCard'
import { OrderIcon, ProductIcon, ShippingIcon } from '../components/icons'
import './dashboard.scss'
import { TotalSales } from '../components/analytics/TotalSales'
const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='stats-container'>
                <StatsCard cardType='primary-stats' label='Shipped orders' icon={<ShippingIcon height='86px' width='86px' />} count={25} />
                <StatsCard cardType='secondary-stats' label='Pending orders' icon={<OrderIcon height='86px' width='86px' />} count={9} />
                <StatsCard cardType='ternary-stats' label='New orders' icon={<ProductIcon height='86px' width='86px' />} count={35} />

            </div>
            <TotalSales />
        </div>
    )
}

export default Dashboard