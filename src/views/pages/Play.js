import React, { useState } from 'react';
import Question from "../components/Question";
import { Container } from "../styles/CommonCss";

/** クイズのページを表示するコンポーネント */
export default function Play() {
  // 表示対象の問題番号
  const [questionIndex, setQuestionIndex] = useState(0);
  // 回答した問題番号の履歴
  const [questionResult, setQuestionResult] = useState([]);

  /** 
   * 問題番号、回答履歴を設定
   * index：表示対象の問題番号
   * result：回答履歴
   */
  const setViewData = (index, reslut) => {
    setQuestionIndex(index);
    setQuestionResult(reslut);
  }

  return (
    <Container>
      {/* 問題数分内容を表示するコンポーネントを呼び出す */}
      <Question
        questionIndex={questionIndex}
        questionResult={questionResult}
        setViewData={setViewData}
      />
    </Container>
  );
}