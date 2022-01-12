import './SingleCard.css'
import backImage from '../assets/img/cover.png'
export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {

    console.log(card)
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.img} alt="card front" />
        <img className="back" src={backImage} onClick={handleClick} alt="cover" />
      </div>
    </div>
  )
}