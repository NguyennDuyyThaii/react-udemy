import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';

const initialState = {
    loading: true,
    error: "",
    todos: []
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          loading: false,
          error: "",
          todos: action.payload
        }
  
      case 'SET_ERROR':
        return {
          loading: false,
          error: "There are some errors here",
          todos: []
        }
  
      default:
        return state;
    }
  }

const ComponentD = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res.data)
            dispatch({type: 'SET_DATA', payload: res.data})
        })
        .catch(err => {
            dispatch({type: 'SET_ERROR'})
        })
    }, [])

    const listMark = (
        <ListGroup>
            {state.todos.map(todo => 
            <ListGroupItem key={todo.id}>
                {todo.title} - {todo.completed ? (<Badge color="success">Completed</Badge>) : (<Badge color="primary">Completed</Badge>) }
            </ListGroupItem>)}
        </ListGroup>
            
        
    )

  return (
    <div>
        {state.loading ? 'Loading' : (state.error ? state.error : listMark)}
    </div>
  )
}

export default ComponentD