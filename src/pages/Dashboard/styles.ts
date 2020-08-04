import styled from "styled-components";

export const ContainerDashboard = styled.div`
  padding: 0 3rem;
  margin-top: 1rem;
`;

export const RowTitleDashboard = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
  }

  @media screen and (max-width: 1023px) {
    justify-content: center;
  }
`;

export const DivTitleDashboard = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
  }

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
  }

  width: 100%;
`;

export const TitleDashboard = styled.h1`
  font-family: "Montserrat", sans-serif;
  line-height: 3, 6875rem;
  font-weight: 300;

  margin-right: 1rem;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const ButtonSignOut = styled.button`
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

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const LabelSignOut = styled.label`
  margin-left: 0.5rem;
  margin-bottom: 0;
  cursor: pointer;
`;
