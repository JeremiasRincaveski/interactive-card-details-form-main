import { useContext, useRef, useState } from "react";
import { FormDiv } from "../../Styles/Form";
import CardContext from "../../context/CardContext";

const Form = ({changeState}) => {
  const { name, setName, cardNumber, setCardNumber, dateMonth, setDateMonth, dateYear, setDateYear, cvc, setCvc } = useContext(CardContext)

  const nameRef = useRef(null)
  const cardRef = useRef(null)
  const dateMonthRef = useRef(null)
  const dateYearRef = useRef(null)
  const cvcRef = useRef(null)
  const inputs = [nameRef, cardRef, dateMonthRef, dateYearRef, cvcRef]
  

  const erros = {
    name: {
      required: 'Can\'t be blank',
      minLength: 'Minimum 3 characters',
      maxLength: 'Maximum 28 characters',
      patternMismatch: 'Wrong format, letters only',
      valueMissing: 'Can\'t be blank'
    },
    card: {
      required: 'Can\'t be blank',
      patternMismatch: 'Wrong format, numbers only',
      minLength: 'Minimum 12 characters',
      maxLength: 'Maximum 12 characters',
      valueMissing: 'Can\'t be blank'
    },
    'date--month': {
      required: 'Can\'t be blank',
      patternMismatch: 'Wrong format, numbers only',
      minLength: 'Minimum 1 characters',
      maxLength: 'Maximum 2 characters',
      valueMissing: 'Can\'t be blank'
    },
    'date--year': {
      required: 'Can\'t be blank',
      patternMismatch: 'Wrong format, numbers only',
      minLength: 'Minimum 1 characters',
      maxLength: 'Maximum 2 characters',
      valueMissing: 'Can\'t be blank'
    },
    cvc: {
      required: 'Can\'t be blank',
      patternMismatch: 'Provide a valid CVC',
      minLength: 'Minimum 3 characters',
      maxLength: 'Maximum 3 characters',
      valueMissing: 'Can\'t be blank'
    }
  }

  const [spans, setSpans] = useState({
    name: '',
    card: '',
    'date--month': '',
    'date--year': '',
    cvc: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const ano = new Date().getFullYear().toString().slice(2)
    const month = new Date().getMonth() + 1
    let valid = true

    inputs.forEach(input => {
      const validity = input.current.validity
      if (validity.valid) {
        setSpans(prev => ({ ...prev, [input.current.id]: '' }))
      } else {
        for (const key in validity) {
          if (validity[key] && erros[input.current.id][key]) {
            setSpans(prev => ({ ...prev, [input.current.id]: erros[input.current.id][key]}))
            valid = false      
            break
          }
        }
      }
    })

    if (dateMonthRef.current.value > 12) {
      setSpans(prev => ({ ...prev, 'date--month': 'Invalid month' }))
      valid = false
    }

    if (ano > dateYearRef.current.value && dateYearRef.current.value !== '') {
      setSpans(prev => ({ ...prev, 'date--year': 'Invalid year' }))
      valid = false
    }

    if (ano === dateYearRef.current.value && month > dateMonthRef.current.value) {
      setSpans(prev => ({ ...prev, 'date--month': 'Invalid month' }))
      valid = false
    }

    if (valid) {
      setCardNumber('')
      setName('')
      setDateMonth('')
      setDateYear('')
      setCvc('')
      changeState()
    }
  }


  return (
    <FormDiv>
      <div className="wrapper">
        <div className="input">
          <label htmlFor="name">Cardholder Name</label>
          <input className={spans['name'] === '' ? '' : 'error'} type="text" id="name" placeholder="e.g. Jane Appleseed" value={name} onChange={e => {
            setName(e.target.value)
          }} minLength={3} maxLength={28} pattern="[a-zA-Z]{3,}(\s[a-zA-Z]+)*" ref={nameRef} required />
          <span>{spans['name']}</span>
        </div>

        <div className="input">
          <label htmlFor="card">Card Number</label>
          <input className={spans['card'] === '' ? '' : 'error'} type="text" id="card" placeholder="e.g. 1234 5678 9123 0000" value={cardNumber} onChange={e => setCardNumber(e.target.value)} pattern="[0-9]{16}" maxLength={16} minLength={16} ref={cardRef} required />
          <span>{spans['card']}</span>
        </div>

        <div className="wrapper--date-cvc">
          <div className="input">
            <label htmlFor="date--month">Exp. Date (MM/YY)</label>
            <div className="input--wrapper">
              <input className={spans['date--month'] === '' ? '' : 'error'} type="text" id="date--month" placeholder="MM" value={dateMonth} onChange={e => setDateMonth(e.target.value)} pattern="\d+" minLength={1} maxLength={2} ref={dateMonthRef} required />
              <input className={spans['date--year'] === '' ? '' : 'error'} type="text" id="date--year" placeholder="YY" value={dateYear} onChange={e => setDateYear(e.target.value)} pattern="\d+" minLength={1} maxLength={2} ref={dateYearRef} required />
            </div>
            <div>
              <span>{spans['date--month']}</span>
              <span>{spans['date--year']}</span>
            </div>
          </div>

          <div className="input">
            <label htmlFor="cvc">CVC</label>
            <input className={spans['cvc'] === '' ? '' : 'error'} type="text" id="cvc" placeholder="e.g. 123" value={cvc} onChange={e => setCvc(e.target.value)} pattern="[0-9]{3}" minLength={3} maxLength={3} ref={cvcRef} required />
            <span>{spans['cvc']}</span>
          </div>
        </div>

        <button onClick={handleSubmit} type="submit">Confirm</button>
      </div>
    </FormDiv>
  );
}

export default Form;