import React from 'react'

const Gender = ({ gender, onChange, ErrorState, disabled }) => {
    const genderList = ["male", "female", "other"]

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="input-group mb-3">
            {genderList.map(text => {
                return (
                    <div className="form-check ml-3">
                        <input className="form-check-input" disabled={disabled} onChange={onChange} type="radio" name="gender" id={text}
                            value={text} checked={gender === text} />
                        <label className="form-check-label" htmlFor={text}>{capitalizeFirstLetter(text)}</label>
                    </div>)
            })}
            {ErrorState.flag && (<div className="invalid-feedback2">{ErrorState.message}</div>)}
        </div >
    )
}

export default React.memo(Gender)
