import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

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

  console.log(cards, turns)
  return (
  <div className="App">
    <h1>Magic Match</h1>
    <button onClick={shuffleCards}>New Game</button>

    <div className="card-grid">
    {cards.map(card => (
      <SingleCard key={card.id} card={card}/>
      ))}
      </div>
  </div>
  );
}

export default App;
