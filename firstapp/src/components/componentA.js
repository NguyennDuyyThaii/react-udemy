import React, { useReducer } from 'react'
import ComponentB from './componentB'
import ComponentC from './componentC'

const initialState = {
    counter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload }
        case 'decrement':
            return { ...state, counter: state.counter - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const CounterContext = React.createContext()

export const ComponentA = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>componentA</div>
            <ComponentB />


            <CounterContext.Provider value={{ counter: state.counter,dispatch:dispatch }}>
                <ComponentC />
            </CounterContext.Provider>
        </div>
    )
}
