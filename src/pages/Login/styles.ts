import styled from "styled-components";

// For Desktop
// @media screen and (min-width: 1024px)

// For Tablet
// @media screen and (min-width: 768px) and (max-width: 1023px)

// For Mobile
// @media screen and (max-width: 767px)

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  line-height: 3, 6875rem;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const RowForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 100%;
  width: 100%;

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const Form = styled.form`
  text-align: center;

  @media screen and (min-width: 1440px) {
    margin-right: 10rem;
    width: 45rem;
  }

  @media screen and (min-width: 1101px) and (max-width: 1439px) {
    margin-right: 10rem;
    width: 32rem;
  }

  @media screen and (min-width: 1024px) and (max-width: 1100px) {
    margin-right: 2rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1100px) {
    width: 36rem;
  }

  @media screen and (max-width: 767px) {
    width: 18rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 1.75rem;
  font-weight: normal;
  line-height: 2rem;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  background: #ffffff;
  padding: 0.5rem 0 0.5rem 2.5rem;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 8px;

  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 1rem;

  width: 100%;
`;

export const Select = styled.select`
  background: #ffffff;
  display: block;
  padding: 0.5rem 0 0.5rem 2.5rem;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 8px;

  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 1rem;

  width: 100%;
`;

export const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 1rem;

  background: linear-gradient(
    90deg,
    #f2994a -2.86%,
    #f54c8b 52.73%,
    #9b51e0 108.33%
  );

  border-radius: 8px;
  border-width: 0;
  color: #ffffff;

  width: 50%;
  margin-top: 1rem;
  padding: 0.75rem;
`;

export const DivIcon = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

export const SpanIcon = styled.span`
  position: absolute;
  margin-left: 1rem;
`;
