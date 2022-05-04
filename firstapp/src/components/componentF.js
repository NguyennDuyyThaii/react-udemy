import React, { useEffect } from 'react'

let renderCount = 0
const ComponentF = (props) => {

    useEffect(() => {
        renderCount ++
    })

  return (
    <div>
        <h1>
            Component E: render {renderCount} times || counter: {props.count}
        </h1>
    </div>
  )
}

export default ComponentF