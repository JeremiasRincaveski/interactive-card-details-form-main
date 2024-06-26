import styled from "styled-components";

export const FormDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 350px;
    max-width: 85vw;
    gap: 1.5rem;

    button {
      margin-top: 1rem;
      background-color: hsl(278, 68%, 11%);
      border: none;
      border-radius: 6px;
      padding: .8rem;
      color: white;
    }

    button:hover {
      cursor: pointer;
      width: 100%;
    }
  }

  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;

    label {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 500;
      color: #333;
    }

    label:hover {
      cursor: pointer;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      font-size: 1rem;
    }

    input::placeholder {
      opacity: 0.3;
      font-weight: 500;
    }

    input:focus {
      outline: none;
      border-color: #333;
    }

    span {
      font-size: 0.75rem;
      color: hsl(0, 100%, 66%);
      display: none;
      position: absolute;
      bottom: -1rem;
    }
  }

  .wrapper--date-cvc {
    width: 100%;
    display: flex;
    gap: 1.5rem;

    .input {
      flex: 1;

      .input--wrapper {
        display: flex;
        gap: 0.5rem;
      }

      input {
        width: 100%;
      }
    }
  }
`