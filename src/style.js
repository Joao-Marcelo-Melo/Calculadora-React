import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    button {
        border: solid 1px #696969;
        width: 25%;
        height: 5.5rem;
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export const InputContainer = styled.div`
    background-color: #141618;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-end;

    h1{
        color: #fff;
        font-size: 3rem;
        margin-right: 15px;
    }
`

export const Calculator = styled.div`
    width: 400px;
    height: 550px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`

export const FirstLine = styled.div`
    button:first-child {
        width: 75%;
    }

    button:last-Child {
        width: 25%;
    }
`

export const Line = styled.div`

`

export const LastLine = styled.div`
    button:first-child {
        width: 50%;
    }
`
