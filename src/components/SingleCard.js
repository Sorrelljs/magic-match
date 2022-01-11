import './SingleCard.css'

const SingleCard = ({card, handleChoice}) => {

    const handleClick = () => {
        handleChoice(card)
    }
    return ( 
       <div className="card">
         <div>
           <img src={card.src} className="front" alt="card font" />
           <img 
           src="/img/cover.png" 
           className="back"
           onClick={handleClick} 
           alt="card back" />
         </div>
       </div>
     );
}
 
export default SingleCard;