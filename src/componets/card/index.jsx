import { useContext } from "react";
import { CardDiv } from "../../Styles/Card";
import CardContext from "../../context/CardContext";

const Card = () => {
  const { cardNumber, name, dateMonth, dateYear, cvc } = useContext(CardContext)
  return (
    <CardDiv>
      <div className="card front">
        <img src="images/card-logo.svg" alt="logo" />
        
        <span className="card--number">{cardNumber === '' ? '0000000000000000' : cardNumber}</span>
        
        <div>
          <span>{name === '' ? 'Jane Appleseed' : name}</span>
          <span>{dateMonth === '' ? '00' : dateMonth}/{dateYear === '' ? '00' : dateYear}</span>
        </div>
      </div>

      <div className="card back">
        <span>{cvc === '' ? '000' : cvc}</span>
      </div>
    </CardDiv>
  );
}

export default Card;