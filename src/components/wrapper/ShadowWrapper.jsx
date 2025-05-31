import './shadowWrapper.scss'

const ShadowWrapper = ({ children }) => {
    return (
        <div className='shadow-wrapper'>
            {children}
        </div>
    )
}

export default ShadowWrapper