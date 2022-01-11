import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]

function App() {
// Below this state tells us whether or not we need to start a new game
  const [cards, setCards] = useState([])
// below this state will tell us how many turns there have been
  const [turns, setTurns] = useState(0)
// 
const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo] = useState(null)

  //  Create a function called shuffleCards that : 
  // Duplicated cards
  // Shuffle Cards
  // Assign Random ID
  const shuffleCards = () => {
    // Below we spread 2 sets of the cards in the shuffledCards const
    const shuffledCards = [...cardImages, ...cardImages]
    // Below we sort the cards index by assigning a number 0 or 1 
    .sort(() => Math.random() - 0.5)
    // Below we take the sorted cards and assign a ID to the obj
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    // Turns below get set to 0 because you are shuffling the cards to set a new game
    setTurns(0)
  }

  // evaluate card choices, see if they match. Compare using src property 
  // if cards match. log to console. if not. log to console.

  
  
  
  // Handle a choice ( We pass this through to singlecard component )
  const handleChoice = (card) => {
    // if choiceOne has a value, then choiceTwo val :else give value to choiceOne
    // console.log(card.src)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  } 

  // reset choices  & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }
  
  // compare 2 selected cards to see if they match or not
  useEffect(() => {
    // If there are values in both choiceone and choicetwo
    if(choiceOne && choiceTwo) {
      // if the value src matches
      if(choiceOne.src === choiceTwo.src) {
        // change the state of the previous card
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              // return new array with the updated match value
              return {...card, matched: true}
            } else {
              // just return card and cycle through again
              return card
            }
          })
        })
        resetTurn()
      } else {
        resetTurn()
      }
  }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // const choiceComparsion = (card) => { 
  //   console.log(choiceOne.src, choiceTwo.src)
  // }

  

  return (
  <div className="App">
    <h1>Magic Match</h1>
    <button onClick={shuffleCards}>New Game</button>

    <div className="card-grid">
    {cards.map(card => (
      <SingleCard 
      key={card.id} 
      card={card} 
      handleChoice={handleChoice}
      />
      ))}
      </div>
  </div>
  );
}

export default App;
