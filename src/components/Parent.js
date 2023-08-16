import { useState } from "react"
import Child from './Child'

const Parent = () => {
    const [showModal,setShowModal] = useState(false);

    function handleClick () {
        setShowModal(!showModal);
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child showModal={showModal} handleClick={handleClick} />
        </div>
    )
}

export default Parent;