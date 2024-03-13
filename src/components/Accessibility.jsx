import React, { useRef, useState } from "react"


export default Accessibility = () => {
    //referece to the button dom element
    const buttonRef = useRef(null)
    const [isFocused, setFocused] = useState(false)

    const handleFocus = () => {
        setFocused(true)
    }

    const handleBlur = () => {
        setFocused(false)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === "") {
            event.preventDefault()
            buttonRef.current.click()
        }
    }
    return (
        <div className="accessibility-btn">
            <button ref={buttonRef} onFocus={handleFocus} onBlur={handleBlur} tabIndex={isFocused ? 1 : 0} onKeyDown={handleKeyDown} onClick={() => { console.log("Button was clicked") }}>Click Me</button>
        </div>
    )
}