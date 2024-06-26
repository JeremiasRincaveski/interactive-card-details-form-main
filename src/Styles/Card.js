import styled from "styled-components";

export const CardDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('/images/bg-main-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: relative;

  .card {
    width: 447px;
    max-width: 90%;
    height: 245px;
    min-height: 245px;
    padding: 1.5rem;
    color: white;
    letter-spacing: 3px;
    text-transform: uppercase;
    position: absolute;
    border-radius: 15px;

    @media (min-width: 768px) {
      width: 447px;
      height: 245px;
    }
  }

  .front {
    background-image: url('/images/bg-card-front.png');
    display: flex;
    flex-direction: column;
    z-index: 2;
    margin-top: 9rem;
    align-self: flex-start;

    img {
      margin-bottom: auto;
      width: 84px; 
      height: 47px;
    }

    .card--number {
      font-size: 5vw;
      margin-top: 2rem;

      @media (min-width: 550px) {
        font-size: 1.7rem;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      margin-top: auto;
    }

    @media (min-width: 550px) {
      align-self: initial;
      margin-right: 6.5rem;
    }
  }

  .back {
    z-index: 1;
    background-image: url('/images/bg-card-back.png');
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 9rem;
    align-self: flex-end;

    span {
      margin-right: 1.8rem;
    }

    @media (min-width: 550px) {
      align-self: initial;
      margin-left: 6.5rem;
    }
  }

  @media (min-width: 967px) {
    background-image: url('/images/bg-main-desktop.png');
    background-size: 75% 100%;
    gap: 2rem;
    align-items: flex-end;

    .card {
      position: initial;
    }

    .front {
      margin-top: 0;
      margin-right: 4rem;
    }

    .back {
      margin-bottom: 0;
    }
  }
`