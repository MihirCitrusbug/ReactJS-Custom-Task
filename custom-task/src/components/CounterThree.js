import React, { useState, useEffect } from 'react'

const CounterThree = () => {

    const initialState = {
        operation: '-',
        value: 1,
        interval: 2000,
        flag: false
    }


    const [hideButton, setHideButton] = useState(true)

    const [state, setState] = useState(initialState)
    const [count, setCount] = useState(5)

    const updateCount = () => {
        if (count > 3 && !state.flag && state.value === 1) {
            return setCount(count - state.value)
        }
        else if (count < 6 && state.flag && state.value === 1) {
            return setCount(count + state.value)
        }
        else if (state.value > 1 && count > 0) {
            return setCount(count - state.value)

        }
        else {
            setHideButton(!hideButton)

        }
    }

    const handleOnClick = () => {
        setHideButton(!hideButton)
        setState({
            ...state,
            operation: state.operation === '-' ? '+' : '-',
            value: state.operation === '-' ? state.value : state.value + 1,
            interval: state.interval + 1000,
            flag: !state.flag
        })

    }

    const resetFlag = () => {
        setState(initialState)
        setHideButton(true)
        setCount(5)
    }

    useEffect(() => {
        if (!state.flag) {
            const interval = setInterval(updateCount, state.interval)
            return () => {
                clearInterval(interval)
            }
        }
        else if (state.flag) {
            const interval = setInterval(updateCount, state.interval)
            return () => {
                clearInterval(interval)
            }
        }
    }, [count, state])

    return (
        <div>
            <h1>Counter - {count}</h1>
            <button onClick={handleOnClick} className={hideButton ? 'd-none' : ''}>Start</button>
            <button onClick={resetFlag} className={!hideButton && !state.flag && state.value === 2 ? '' : 'd-none'}>Reset</button>
        </div>
    )
}

export default CounterThree
