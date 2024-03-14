import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    padding: 16px;
  
`
const Buttons = styled.div`
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: 'Roboto', sans-serif;
    > button {
    }
`


const Style ={
    Container,
    Buttons
}
export default Style;