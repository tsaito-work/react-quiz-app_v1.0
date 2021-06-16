import React, { useState, useEffect } from "react";
import { Data } from "../../data/QuestionData.json";
import { QuestionConst } from "../../data/Const.json";
import { QuestionDiv, AnswerDiv, PageButtonDiv, QuestionForm } from "../styles/QuestionCss";
import { Button } from "../styles/CommonCss";
import { useHistory } from "react-router-dom";

/** クイズ内容を表示するコンポーネント */
export default function Question(props) {
    let history = useHistory();

    // 画面情報取得
    const { questionIndex, questionResult, setViewData } = props;
    // 問題リスト取得
    const questionList = Data.map((data) => { return data; });
    const questionData = questionList[questionIndex];
    // 最終問題かを判定するフラグ
    const isResult = (questionList.length - 1) === questionIndex;

    // 選択した回答を保持するstate
    const [selectAnswer, setSelectAnswer] = useState();
    // 回答の成否を保持するstate
    const [isCorrect, setIsCorrect] = useState(false);
    // 回答を表示しているかを判定するstate
    const [putCorrect, setPutCorrect] = useState(false);

    /** ページ切り替えイベント発生時（questionIndexに変更が発生した場合）にコンポーネントの状態をupdateする */
    useEffect(() => {
        // 回答した問題があれば画面に設定する
        setSelectAnswer(questionResult[questionIndex]);
        setPutCorrect(false);
    }, [questionIndex, questionResult]);

    /** 
     * 回答選択イベント
     * event：チェックした回答
     */
    const checkAnswer = (event) => {
        setSelectAnswer(parseInt(event.target.id));
    };

    /** 回答表示ボタンイベント */
    const displayAnswer = () => {
        setIsCorrect((selectAnswer + 1) === questionData.correct)
        setPutCorrect(true);
    };

    /** 
     * ページ切り替えボタンイベント
     * targetPage：遷移先ページINDEX
     */
    const setPage = (targetPage) => {
        // 回答履歴をコピー
        let copyQuestionResult = [...questionResult];
        // 回答履歴をstateに追加
        copyQuestionResult.splice(questionIndex, 1, selectAnswer);
        setViewData(questionIndex + parseInt(targetPage), copyQuestionResult);
        // 全ての問題を回答した場合
        if (isResult && targetPage === QuestionConst.NEXT_PAGE_INDEX) {
            // 結果ページ遷移
            history.replace({
                pathname : "/result", 
                state : {questionResult: copyQuestionResult, questionList: questionList}
            });
        }
    }

    return (

        <QuestionForm className="question-form">

            {/* Jsonから問題文を表示 */}
            {/* 回答の選択に因って背景色を変更 */}
            <QuestionDiv putCorrect={putCorrect} isCorrect={isCorrect} className="question-div">
                <div>
                    <span>{`問題：${questionData.id}`}</span>
                    <span className="result-text">
                        {putCorrect && (isCorrect ? "正解" : "不正解")}
                    </span>
                </div>
                <div>{questionData.question}</div>
                {putCorrect &&　<div className="question-commentary">{questionData.commentary}</div>}
            </QuestionDiv>

            {/* Jsonから回答を表示 */}
            {questionData.answer.map((answer, index) => (
                <AnswerDiv className="answer-div" key={index}>
                    <label htmlFor={index}>
                        <input
                            id={index}
                            type="radio"
                            name="radio"
                            value={answer}
                            onChange={checkAnswer}
                            checked={selectAnswer === index}
                        />
                        {answer}
                    </label>
                </AnswerDiv>
            ))}

            {/* 画面遷移ボタンを表示 */}
            <PageButtonDiv className="page-button-div">
                {
                    questionIndex !== QuestionConst.INIT_PAGE_INDEX
                    && <Button type="button" className="page-button-prev" onClick={() => setPage(QuestionConst.PREV_PAGE_INDEX)}>{"前の問題"}</Button>
                }
                <Button type="button" className="page-button-correct" onClick={displayAnswer}>{"回答を見る"}</Button>
                <Button disabled={selectAnswer === undefined} type="button" className="page-button-next" onClick={() => setPage(QuestionConst.NEXT_PAGE_INDEX)}>{isResult ? "結果を見る" : "次の問題"}</Button>
            </PageButtonDiv>

        </QuestionForm>
    );
}