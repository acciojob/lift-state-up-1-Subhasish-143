const Child = ({ showModal, handleClick }) => {
    return (
        <div className="child">
            <h3>Child Component</h3>
            <button onClick={handleClick}>Show Modal</button>
            {showModal && 
                <div>
                    <h6>Modal Content</h6>
                    <p>Show Modal Content</p>
                </div>
            }
        </div>
    )
}

export default Child;