import React from 'react'
import './App.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.avatar} style={{ width: '100%' }} alt="gg" />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                <input type="text" onChange={props.onChangeName} value={props.name} />
                <p><button className='button button2' onClick={props.onDelete}>Delete</button></p>
            </div>
        </div>
    )
}

export default Card