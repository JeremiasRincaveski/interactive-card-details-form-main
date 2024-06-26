import { CardDiv } from "../../Styles/Card";

const Card = () => {
  return (
    <CardDiv>
      <div className="card front">
        <img src="images/card-logo.svg" alt="logo" />
        
        <span className="card--number">0000 0000 0000 0000</span>
        
        <div>
          <span>Jane Appleseed</span>
          <span>00/00</span>
        </div>
      </div>

      <div className="card back">
        <span>000</span>
      </div>
    </CardDiv>
  );
}

export default Card;