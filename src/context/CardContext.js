import { createContext, useState } from "react";

const CardContext = createContext();

export const MyProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [dateMonth, setDateMonth] = useState('')
  const [dateYear, setDateYear] = useState('')
  const [cvc, setCvc] = useState('')
  
  return (
    <CardContext.Provider value={{ 
      name, setName,
      cardNumber, setCardNumber,
      dateMonth, setDateMonth,
      dateYear, setDateYear,
      cvc, setCvc
      }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;