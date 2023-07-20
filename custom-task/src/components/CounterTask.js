import React, { useState, useEffect } from 'react'

const CounterTask = () => {
    const [count, setCount] = useState(5)
    const [hideButton, setHideButton] = useState(true)

    const negativeCount = () => {
        setCount(count - 1)
    }

    const positiveCount = () => {
        setCount(count + 1)
    }

    const incrementCount = () => {
        console.log("count =", count)
        if (count < 6) {
            const interval = setInterval(positiveCount, 3000)
            return () => {
                clearInterval(interval)
            }
        }
    }

    useEffect(() => {
        console.log('useEffect')
        if (count > 3) {
            const interval = setInterval(negativeCount, 2000)
            return () => {
                clearInterval(interval)
            }
        }
        else {
            setHideButton(false)
        }
    }, [count])

    return (
        <div className='container'>
            <h1>Counter - {count}</h1>
            <button id="start_btn" onClick={incrementCount} className={hideButton ? 'd-none' : ''}>Start</button>
        </div>
    )
}

export default CounterTask
