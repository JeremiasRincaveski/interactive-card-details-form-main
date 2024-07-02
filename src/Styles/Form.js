import styled from "styled-components";

export const FormDiv = styled.form`
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
      margin-top: 3rem;
      background-color: hsl(278, 68%, 11%);
      border: none;
      border-radius: 6px;
      padding: .8rem;
      color: white;
      font-size: 1.2rem;
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

    label:hover,
    input:hover{
      cursor: pointer;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1rem;
      z-index: 1;
      position: relative;
    }

    input:focus {
      border-color: hsl(249, 99%, 64%);
    }

    input::placeholder {
      opacity: 0.3;
      font-weight: 500;
    }



    input.error {
      border-color: hsl(0, 100%, 66%);
    }

    input.error:focus {
      border-color: hsl(249, 99%, 64%);
    }

    > div:nth-child(3) {
      display: flex;
      gap: 0.5rem;
      position: absolute;
      bottom: 0rem;
      width: 100%;
      height: 0;

      > span {
        position: unset;
        flex: 1;
      }
    }

    span {
      font-size: 0.75rem;
      color: hsl(0, 100%, 66%);
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