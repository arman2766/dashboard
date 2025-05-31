import React from 'react'
import './statsCard.scss'
const StatsCard = ({ label, icon, count, cardType = 'primary-stats' }) => {
    return (
        <div className={`stats-card ${cardType}`}>
            <h2>{label}</h2>
            <div className='icon-count'>
                <span className='icon'>{icon}</span>
                <h3>{count}</h3>
            </div>
        </div>
    )
}

export default StatsCard