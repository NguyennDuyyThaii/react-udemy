import React, { useContext } from 'react'
import { NameContext, ColorContext } from '../App'
import { CounterContext } from './componentA'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'reactstrap'
const ComponentC = () => {
    const counterContext = useContext(CounterContext)
    return (
        <div>componentC

            <NameContext.Consumer>
                {name => {
                    return (
                        <ColorContext.Consumer>
                            {color => (
                                <div>name: {name}, color: {color}</div>
                            )}
                        </ColorContext.Consumer>
                    )
                }}
            </NameContext.Consumer>

            <p>use Context here</p>
            <p>{counterContext?.counter}</p>
            <ButtonGroup>
                <Button color='dark' onClick={() => counterContext?.dispatch({ type: 'increment', payload: 1 })}>increment</Button>
                <Button color='dark' onClick={() => counterContext?.dispatch({ type: 'decrement', payload: 1 })}>decrement</Button>
                <Button color='danger' onClick={() => counterContext?.dispatch({ type: 'reset' })}>reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default ComponentC