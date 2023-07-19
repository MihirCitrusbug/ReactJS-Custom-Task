import React from 'react'

const Hobbies = ({ id, ErrorState, onClick, hobbyList, disabled }) => {
    const hobbies = ["cricket", "reading", "traveling", "movies"]

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="input-group mb-3">
            {hobbies.map((hobby, index) => {
                return (
                    <div className="form-check ml-3" key={index}>
                        <input className="form-check-input" disabled={disabled} onClick={onClick} type="checkbox" name={id}
                            value={hobby} id={hobby + id} defaultChecked={hobbyList && hobbyList.includes(hobby)} />
                        <label className="form-check-label" htmlFor={hobby + id}>{capitalizeFirstLetter(hobby)}</label>
                    </div>
                )
            })}
            {ErrorState.flag && (<div className="invalid-feedback2">{ErrorState.message}</div>)}
        </div>
    )
}

export default React.memo(Hobbies)
