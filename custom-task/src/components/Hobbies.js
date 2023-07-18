import React from 'react'

const Hobbies = ({ text, onClick, disabled, checked123 }) => {
    const capitalizeFirstLetter = (str) => {

        // converting first letter to uppercase
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className="form-check ml-3">
            <input className="form-check-input" checked={checked123} disabled={disabled} onClick={onClick} type="checkbox" name="hobby"
                value={text} id={text} />
            <label className="form-check-label" htmlFor={text}>{capitalizeFirstLetter(text)}</label>
        </div>
    )
}

export default React.memo(Hobbies)
