import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: 1rem;
  padding: 1rem;

  background-color: white;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const LabelStatTitle = styled.label`
  color: #828282;
  font-family: Roboto;
  font-size: 1.2rem;
  line-height: 1.75rem;
`;

export const LabelRegistered = styled.label`
  color: #27ae60;
  font-family: Roboto;
  font-size: 2rem;
  line-height: 2.31rem;
`;

export const LabelActive = styled.label`
  color: #2d9cdb;
  font-family: Roboto;
  font-size: 2rem;
  line-height: 2.31rem;
`;

export const LabelInactive = styled.label`
  color: #eb5757;
  font-family: Roboto;
  font-size: 2rem;
  line-height: 2.31rem;
`;
