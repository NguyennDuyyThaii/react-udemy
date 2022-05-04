import React, { Component } from 'react'
import './App.css'

class Card extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('Card js getDerivedStateFromProps', props)
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('card js shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(nextProps, nextState){
        console.log('Card js getSnapshotBeforeUpdate')
        return {message: 'some snapshot'}
    }
    
    componentDidUpdate(nextProps, nextState, snapshot){
        console.log('card js componentDidUpdate', snapshot)
    }

    componentWillUnmount(){
        console.log('card js component will unmount')
    }
    render() {
        console.log('Card js rendering')
        return (
            <div className="card">
                <img src={this.props.avatar} style={{ width: '100%' }} alt="gg" />
                <div className="container">
                    <h4><b>{this.props.name}</b></h4>
                    <p>{this.props.title}</p>
                    <input type="text" onChange={this.props.onChangeName} value={this.props.name} />
                    <p><button className='button button2' onClick={this.props.onDelete}>Delete</button></p>
                </div>
            </div>
        )
    }
}

export default Card