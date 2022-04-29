import './App.css';
import Card from './Card'
import React, { useState } from 'react'

function App() {
  const [showCard, setShowCard] = useState(true)

  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Nguyen duy thai',
      title: 'sky oiiiiiiii',
      avatar: 'https://www.w3schools.com/css/img_chania.jpg'
    },
    {
      id: '2',
      name: 'Nguyen hoang anh',
      title: 'skuu oiiiiiiii',
      avatar: 'https://www.w3schools.com/css/img_chania.jpg'
    },
    {
      id: '3',
      name: 'Nguyen anh dung',
      title: 'skiiiii oiiiiiiii',
      avatar: 'https://www.w3schools.com/css/img_chania.jpg'
    }
  ])



  const toggleShowCard = () => setShowCard(!showCard)

  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    setCards(cards_copy)
  }

  const changeNameHandler = (event, id) => {
    const cardIndex = cards.findIndex(card => card.id === id)
    const cards_copy = [...cards]
    cards_copy[cardIndex].name = event.target.value
    setCards(cards_copy)
    }

  const listCard = cards.map((card, index) => {
    return <Card 
        name={card.name} 
        title={card.title} 
        avatar={card.avatar} 
        onDelete = {() => deleteCardHandler(index)}
        key={card.id}
        onChangeName = {(event) => changeNameHandler(event, card.id)}
        ></Card>
  })

 
  
  return (
    <div className="App">
      <button className="button button2" onClick={toggleShowCard}>toggle Show/Hide card</button>
      {showCard ? listCard : null}
    </div>
  );
}

export default App;