import './Container.css';

const Container = ({ children }) => {

    console.log("Components gotten for display >>> ", { children });
    return (
        <div className="flex-container">
            {children}
        </div>
    )
}

export default Container