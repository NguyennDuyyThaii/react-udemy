import React, { useRef } from 'react'
import ComponentH from './componentH'

let show = false
const setShow = (show) => {
    return show != show
}

const ComponentG = () => {
    const inputRef = useRef()
  return (
    <div>
        <h2>Focus in input fields</h2>
        <input type="text" ref = {inputRef} />
        <input type="text" />
        <input type="text" />
        <button onClick={() => {
            inputRef.current.focus()
        }}>Focus</button>
        <p></p>

        <button >Toggle component</button>

        <h1>unmount component</h1>
        <ComponentH />
    </div>

  )
}

export default ComponentG
