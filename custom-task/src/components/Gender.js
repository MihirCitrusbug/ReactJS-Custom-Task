import React from 'react'

const Gender = ({ text, onChange, disabled, checked }) => {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="form-check ml-3">
            <input className="form-check-input" disabled={disabled} onChange={onChange} type="radio" name="gender" id={text}
                value={text} checked={checked} />
            <label className="form-check-label" htmlFor={text}>{capitalizeFirstLetter(text)}</label>
        </div>
    )
}

export default React.memo(Gender)
