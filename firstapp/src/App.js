import './App.css';
import Card from './Card'
import React, { Component, useReducer } from 'react'
import { ThemeProvider } from 'styled-components'
import Button from './element/Button'
import { ComponentA } from './components/componentA';
import  ComponentD  from './components/componentD';
import  ComponentE  from './components/componentE';
import  ComponentG  from './components/componentG';
import Counter from './components/counter'
const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

export const NameContext = React.createContext()
export const ColorContext = React.createContext()


class App extends Component {

  constructor(props) {
    console.log('App js constructor')
    super(props)
    this.state = {
      cards: [
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
      ],
      showCard: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps', props)
    return state
  }
  toggleShowCard = () => this.setState({ showCard: !this.state.showCard })

  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex, 1)
    this.setState({ cards: cards_copy })
  }

  changeNameHandler = (event, id) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id)
    const cards_copy = [...this.state.cards]
    cards_copy[cardIndex].name = event.target.value
    this.setState({ cards: cards_copy })
  }

  // const buttonStyle = {
  //   backgroundColor: null
  // }

  // if(cards.length < 3) buttonStyle.backgroundColor = 'lightpink'
  // if(cards.length < 2) buttonStyle.backgroundColor = 'red'

  componentDidMount() {
    console.log('App js componentdidmount')
  }


  render() {
    if (this.state.showCard === false) {
      return <div>Nothing</div>
    }
    console.log('App js render')
    const classes = ['button']

    if (this.state.cards.length < 3) classes.push('pink')
    if (this.state.cards.length < 2) classes.push('red text')
    const listCard = this.state.cards.map((card, index) => {
      return <Card
        name={card.name}
        title={card.title}
        avatar={card.avatar}
        onDelete={() => this.deleteCardHandler(index)}
        key={card.id}
        onChangeName={(event) => this.changeNameHandler(event, card.id)}
      ></Card>
    })



    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color='primary' length={this.state.cards.length}>Toggle</Button>
          <button className={classes.join(' ')} onClick={this.toggleShowCard}>toggle Show/Hide card</button>
          {this.state.showCard ? listCard : null}
        </div>

        <div>
          <NameContext.Provider value={'smith'}>
            <ColorContext.Provider value={'red'}>
              <ComponentA />
            </ColorContext.Provider>
          </NameContext.Provider>
        </div>


        <div>
          <Counter />
        </div>
        
        <div>
          <h1>This is Component D</h1>
          <ComponentD />
        </div>

        <div>
          <h1>This is Component E - using memo</h1>
          <ComponentE />
        </div>

        <div>
          <h1>This is Component G - using useRef</h1>
          <ComponentG />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;