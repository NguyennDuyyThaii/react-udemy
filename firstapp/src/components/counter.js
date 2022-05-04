import React, { useReducer } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    counter1: 0,
    counter2: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter1: state.counter1 + action.payload }
        case 'decrement':
            return { ...state, counter1: state.counter1 - action.payload }
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.payload }
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>count1: {count.counter1}</div>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch({ type: 'increment', payload: 1 })}>increment</Button>
                <Button color='dark' onClick={() => dispatch({ type: 'decrement', payload: 1 })}>decrement</Button>
                <Button color='danger' onClick={() => dispatch({ type: 'reset' })}>reset</Button>
            </ButtonGroup>
            <div>count2: {count.counter2}</div>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch({ type: 'increment2', payload: 5 })}>increment2</Button>
                <Button color='dark' onClick={() => dispatch({ type: 'decrement2', payload: 5 })}>decrement2</Button>
                <Button color='danger' onClick={() => dispatch({ type: 'reset' })}>reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter 