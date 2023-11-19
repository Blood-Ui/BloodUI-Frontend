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
    width: 50px;
    height: 200px;
    border-style: solid;

    /* margin-left: 1300px;
    margin-top: 1300px; */
    margin-left: 10rem; 
    margin-bottom: 10rem;
    z-index: 1;
/*  */
`

export const Text1 = styled.div`
    /* font-weight: 800;
    font-size: 75px; */
    text-decoration: underline;
    font-weight: 700;
    font-size: 45px;

`

export const Text2 = styled.div`
    font-weight: 300;
    /* font-size: 23px; */
    font-size: 13px;
`

export const Image = styled.img`
    display: flex;
    flex: 3;
    margin-right: 10rem;
    margin-bottom: 15rem;
    width: 450px;
    height: 342px;
    z-index: -1;
`
