import React, { useMemo, useState } from 'react'
import ComponentF from './componentF'


const ComponetE = () => {
  const [countA, setCountA] = useState(0)
  const incrementA = () => {
    setCountA(countA + 1)
  }

  const memoComponentF = useMemo(() => {
    return <ComponentF count = {countA}/>
  }, [countA])
  return (
    <div>
      <h1>Here using useMemo</h1>
      <p>App js count A: {countA}</p>
      <p>
        <button onClick={incrementA}>incrementA</button>
      </p>
      {memoComponentF}
    </div>
  )
}

export default ComponetE