import styled from "styled-components";
import { Div } from "./CommonCss";

/* 問題文エリア */
export const ResultDiv = styled(Div)`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-atems: center;
  justify-content: space-evenly;
  width: 30vw;
  font-size: 1.2rem;

  .result-true{
    color: green; 
  }

  .result-false{
    color: red; 
  }
`;

/* 画面遷移ボタンエリア */
export const PageButtonDiv = styled(Div)`
  width: 70%;
  margin: 15px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;