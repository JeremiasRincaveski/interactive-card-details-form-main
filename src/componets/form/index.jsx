import { FormDiv } from "../../Styles/Form";

const Form = () => {
  return (
    <FormDiv>
      <div className="wrapper">
        <div className="input">
          <label htmlFor="name">Cardholder Name</label>
          <input type="text" id="name" placeholder="e.g. Jane Appleseed" />
          <span>Provide a name</span>
        </div>

        <div className="input">
          <label htmlFor="card">Card Number</label>
          <input type="text" id="card" placeholder="e.g. 1234 5678 9123 0000" />
          <span>Wrong format, numbers only</span>
        </div>

        <div className="wrapper--date-cvc">
          <div className="input">
            <label htmlFor="date--month">Exp. Date (MM/YY)</label>
            <div className="input--wrapper">
              <input type="text" id="date--month" placeholder="MM" />
              <input type="text" id="date--year" placeholder="YY" />
            </div>
            <span>Informe uma data valida</span>
          </div>

          <div className="input">
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="e.g. 123" />
            <span>Informe um codigo valido</span>  
          </div>
        </div>

        <button>Confirm</button>
      </div>
    </FormDiv>
  );
}

export default Form;