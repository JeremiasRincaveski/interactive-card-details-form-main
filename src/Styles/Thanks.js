import styled from "styled-components";

const ThanksDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 2rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 2.5rem;
  }

  p {
    margin-top: 1rem;
    color: #7d7c7c;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    background-color: hsl(278, 68%, 11%);
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    width: 25rem;
  }
`

export default ThanksDiv