import styled from "styled-components";
import { Div } from "./CommonCss";

/* 回答選択エリアフォーム */
export const QuestionForm = styled.form`
  width: 100%;
`;

/* 問題文エリア */
export const QuestionDiv = styled(Div)`
  margin-bottom: 10px;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  align-atems: center;
  justify-content: space-evenly;
  background-color: ${props => props.putCorrect === false ? '#ffffff'
                                                          : props.isCorrect
                                                              ? '#02b70869'
                                                              : '#ff15158c'};

  div{
    margin: 5px 0;
    width: 100%;
  }

  .result-text{
    margin-left: 10px;
    color: red; 
  }
`;

/* 回答選択エリア */
export const AnswerDiv = styled(Div)`
  height: 50px;
  margin: 10px 0;
  border: 1px solid #cacaca;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

  label{
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 0.9rem;
    word-break: break-all;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #eaeaea;
      opacity: 0.8;
    }  
  }

  input{
    margin: 2px 8px 0px 8px;
    cursor: pointer;
  }
`;

/* 画面遷移ボタンエリア */
export const PageButtonDiv = styled(Div)`
  width: 80%;
  margin: 15px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .page-button-next{
    background-color: #2ea977;
  }

  .page-button-prev{
    background-color: #d71b46;
  }
`;