import React from 'react'

const Options = ({ value, selected }) => {

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <option value={value} selected={selected}>
            {capitalizeFirstLetter(value)}
        </option>
    )
}

export default React.memo(Options)
