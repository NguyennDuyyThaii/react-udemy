import React from 'react'
import './App.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.avatar} style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                {/* <p>{props.children}</p> */}
                <input type="text" value={props.name} onChange={props.onChangeInput} />
                <p><button className='button button2' onClick={props.onChangeName}>Change your name</button></p>
            </div>
        </div>
    )
}

export default Card