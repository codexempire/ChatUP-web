import './Container.css';

const Container = ({ children, className }) => {
    return (
        <div className={`flex-container ${className}`}>
            {children}
        </div>
    )
}

export default Container