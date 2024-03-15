import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Roboto", sans-serif;
  padding: 16px;
`;
const Container2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding: 16px;
`;
const Buttons = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  color: white;
  font-family: "Roboto", sans-serif;
  > button {
  }
`;

const Style = {
  Container,
  Container2,
  Buttons,
};
export default Style;
