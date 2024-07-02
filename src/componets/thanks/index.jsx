import ThanksDiv from "../../Styles/Thanks";

const Thanks = ({ changeState }) => {
  return (
    <ThanksDiv>
      <img src="/images/icon-complete.svg" alt="check symbol" />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <button type="button" onClick={() => changeState()}>Continue</button>
    </ThanksDiv>
  );
}

export default Thanks;