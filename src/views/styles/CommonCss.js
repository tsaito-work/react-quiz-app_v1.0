import styled from "styled-components";

export const Container = styled.div`
    min-width: 600px;
    max-width: 600px;
    height: 100vh;
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Div = styled.div`
    margin: 5px 0;
    width: 100%;
`;

export const Button = styled.button`
    background-color : #1e90ff;
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 8px 16px;
    min-width: 120px;
    min-height: 40px;
    font-size: 1rem;
    font-weight: bold;
    &:active {
        position: relative;
        top: 1px;
        left: 1px;
    }
    &:hover {
        opacity: 0.9;
    }
    &:disabled{
        opacity: 0.6;
    }
`;

