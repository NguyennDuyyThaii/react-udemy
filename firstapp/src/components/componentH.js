import React, { useEffect, useRef, useState } from 'react'

const ComponentH = () => {

    const [count, setCount] = useState(0)
    const componentRef = useRef(true)

    useEffect(() => {
        return () => {
            componentRef.current = false
        }
    }, [])


    const fakeFetch = () => {
        setTimeout(() => {
            if(componentRef.current)
            setCount(count + 1)
        }, 2000)
    }

    return (
        <div>
            <h2>Current counter: {count}</h2>
            <button onClick={fakeFetch}> fake fetch</button>
        </div>
    )
}

export default ComponentH
