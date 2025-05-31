import './customButton.scss';

const CustomButton = ({ text, onClick, className, btnType = 'primary' }) => {
    return (
        <button onClick={onClick} className={`${className} ${btnType}`}> {text}</button >
    )
}

export default CustomButton