import { useContext } from "react";
import { FormDiv } from "../../Styles/Form";
import CardContext from "../../context/CardContext";

const Form = () => {
  const { name, setName, cardNumber, setCardNumber, dateMonth, setDateMonth, dateYear, setDateYear, cvc, setCvc } = useContext(CardContext)

  const erros = {
    name: {
      required: 'Can\'t be blank',
      minLength: 'Minimum 3 characters',
      maxLength: 'Maximum 28 characters',
      pattern: 'Wrong format, letters only'
    },
    cardNumber: {
      required: 'Can\'t be blank',
      pattern: 'Wrong format, numbers only',
      minLength: 'Minimum 12 characters',
      maxLength: 'Maximum 12 characters'
    },
    dateMonth: {
      required: 'Can\'t be blank',
      pattern: 'Wrong format, numbers only',
      minLength: 'Minimum 1 characters',
      maxLength: 'Maximum 2 characters',
    },
    dateYear: {
      required: 'Can\'t be blank',
      pattern: 'Wrong format, numbers only',
      minLength: 'Minimum 1 characters',
      maxLength: 'Maximum 2 characters'
    },
    cvc: {
      required: 'Can\'t be blank',
      pattern: 'Wrong format, numbers only',
      minLength: 'Minimum 3 characters',
      maxLength: 'Maximum 3 characters'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }


  return (
    <FormDiv>
      <div className="wrapper">
        <div className="input">
          <label htmlFor="name">Cardholder Name</label>
          <input type="text" id="name" placeholder="e.g. Jane Appleseed" value={name} onChange={e => {
            setName(e.target.value)
          }} minLength={3} maxLength={28} pattern="[a-zA-Z]{3,}(\s[a-zA-Z]+)*" required />
          <span>Provide a name</span>
        </div>

        <div className="input">
          <label htmlFor="card">Card Number</label>
          <input type="text" id="card" placeholder="e.g. 1234 5678 9123 0000" value={cardNumber} onChange={e => setCardNumber(e.target.value)} pattern="\d+" maxLength={12} minLength={12} required />
          <span>Wrong format, numbers only</span>
        </div>

        <div className="wrapper--date-cvc">
          <div className="input">
            <label htmlFor="date--month">Exp. Date (MM/YY)</label>
            <div className="input--wrapper">
              <input type="text" id="date--month" placeholder="MM" value={dateMonth} onChange={e => setDateMonth(e.target.value)} pattern="\d+" minLength={1} maxLength={2} required />
              <input type="text" id="date--year" placeholder="YY" value={dateYear} onChange={e => setDateYear(e.target.value)} pattern="\d+" minLength={1} maxLength={2} required />
            </div>
            <span>Informe uma data valida</span>
          </div>

          <div className="input">
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="e.g. 123" value={cvc} onChange={e => setCvc(e.target.value)} pattern="\d+" minLength={3} maxLength={3} required />
            <span>Informe um codigo valido</span>  
          </div>
        </div>

        <button type="submit">Confirm</button>
      </div>
    </FormDiv>
  );
}

export default Form;