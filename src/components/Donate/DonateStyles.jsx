import styled from "styled-components";

export const Box1 = styled.div`
    padding: 30px;
    width: 100%;
    `
export const Box2 = styled.div`
display: flex;
justify-content: space-between;
    `
export const Box3 = styled.div`
margin: 1rem 0rem;
    `
export const Input1 = styled.input`
border-radius: 2.5rem;
border: 1px solid #9E896A;
background: #FFF;
width: 20rem;
height: 3rem;
margin: 0.5rem 2rem;
padding:0rem 1rem;
`
export const Select1 = styled.select`
border-radius: 2.5rem;
border: 1px solid #9E896A;
background: #FFF;
width: 4rem;
height: 3rem;
margin: 0.5rem 2rem;
padding:0rem 1rem;
outline: none;
&&::-ms-expand {
	display: none;
}
`
export const Input3 = styled.input`
border-radius: 2.5rem;
border: 1px solid #9E896A;
background: #FFF;
width: 15rem;
height: 3rem;
margin: 0.5rem 2rem;
padding:0rem 1rem;
`
export const RedButtondiv = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin-top: 1rem;
`
export const RedButton = styled.input`
border-radius: 2.25rem;
background: #B92727;
padding: 0.7rem 2rem;
color: #FFF;
border: none;
&:hover{
    cursor: pointer;
    background-color: #FFFFFF;
    color:#000000;
    border: 2px solid #B92727;
}
`