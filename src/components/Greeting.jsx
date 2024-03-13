import { useState } from "react";

const Greeting = ({children}) => {
    const [changedText, setChangedText] = useState(false)

    const changeTextHandler = () => {
        setChangedText(!changedText)
    }

    return (
        <>
        <h2>Hello World</h2>
        {!changedText && <p>It is great to see you!</p>}
        {changedText && <p>Welcome to React</p>}
        <button data-testid="greeting-btn" onClick={changeTextHandler}>Change Text</button>
        </>
    
    )

}

export default  Greeting