import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  line-height: 3, 6875rem;
  font-weight: 300;
  font-size: 3rem;

  position: absolute;
  top: 3rem;
  right: 15rem;
`;

export const Div = styled.div`
  position: absolute;
  top: 35.79%;
  right: 15rem;

  max-width: 44rem;
  width: 100%;
`;

export const Form = styled.form`
  width: 50%;
  margin-left: 25%;

  text-align: center;
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
  display: block;
  padding: 0.5rem 0 0.5rem 1rem;
  margin-top: 1rem;

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
  padding: 0.5rem 0 0.5rem 1rem;
  margin-top: 1rem;

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
