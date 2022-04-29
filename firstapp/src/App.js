import './App.css';
import Card from './Card'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Button from './element/Button'

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}


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

  // const buttonStyle = {
  //   backgroundColor: null
  // }

  // if(cards.length < 3) buttonStyle.backgroundColor = 'lightpink'
  // if(cards.length < 2) buttonStyle.backgroundColor = 'red'

  const classes = ['button']

  if (cards.length < 3) classes.push('pink')
  if (cards.length < 2) classes.push('red text')
  const listCard = cards.map((card, index) => {
    return <Card
      name={card.name}
      title={card.title}
      avatar={card.avatar}
      onDelete={() => deleteCardHandler(index)}
      key={card.id}
      onChangeName={(event) => changeNameHandler(event, card.id)}
    ></Card>
  })



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color='primary' length={cards.length}>Toggle</Button>
        <button className={classes.join(' ')} onClick={toggleShowCard}>toggle Show/Hide card</button>
        {showCard ? listCard : null}
      </div>
    </ThemeProvider>
  );
}

export default App;