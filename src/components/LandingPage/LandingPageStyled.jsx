import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BoldText = styled.div`
    display: flex;
    flex-direction: column;
    flex: 7; 
    margin-left: 10rem; 
    margin-bottom: 10rem;
`

export const Text1 = styled.div`
    font-weight: 800;
    font-size: 75px;
    text-decoration: underline;
`

export const Text2 = styled.div`
    font-weight: 300;
    font-size: 23px;
`

export const Image = styled.img`
    display: flex;
    flex: 3;
    margin-right: 10rem;
    margin-bottom: 15rem;
    width: 450px;
    height: 342px;
`
