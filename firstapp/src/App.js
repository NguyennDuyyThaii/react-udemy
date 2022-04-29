import './App.css';
import Card from './Card'
import { faker } from '@faker-js/faker';
import React, { useState } from 'react'

function App() {

  const [name, setName] = useState('Benjamin smith')
  const [showCard, setShowCard] = useState(true)

  const changeNameHandle = (name) => {
    setName(name)
  }

  const changeInputHandler = event => setName(event.target.value)
  const toggleShowCard = () => setShowCard(!showCard)

  return (
    <div className="App">
      <button className="button button2" onClick={toggleShowCard}>toggle Show/Hide card</button>
      {showCard ? <Card name={name} title={faker.name.jobTitle()} avatar={faker.image.avatar()} onChangeName={() => changeNameHandle('carrick')} onChangeInput={changeInputHandler}></Card> : null}
    </div>
  );
}

export default App;