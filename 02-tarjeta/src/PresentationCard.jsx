let name = "Alan"
import avatarImage from "./assets/alan.jpg"
import "./PresentationCard.css"
function PresentationCard() {
  return(
    <div className="presentation-card">
      <img src={avatarImage} alt="avatar" className="avatar"/>
      <p>Hola, soy {name} practicando con ejercicios de react </p>
    </div>
  )
}

export default PresentationCard;