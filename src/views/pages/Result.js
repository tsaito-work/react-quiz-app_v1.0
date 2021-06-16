import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Button } from "../styles/CommonCss";
import { ResultDiv, PageButtonDiv } from "../styles/ResultCss";

/** 回答結果を表示するコンポーネント */
export default function Result(props) {
    let history = useHistory();
    // 回答履歴、問題リスト
    const { questionResult, questionList } = props.location.state;

    /** replayボタンイベント */
    const replay = () => {
        history.replace("/play");
    }

    return (
        <Container>
            <ResultDiv>
                <span className="result-true">
                    {"正解：" + questionResult.filter((answer, index) => {
                        return (answer + 1) === questionList[index].correct
                    }).length}
                </span>
                <span className="result-false">
                    {"不正解：" + questionResult.filter((answer, index) => {
                        return (answer + 1) !== questionList[index].correct
                    }).length}
                </span>
            </ResultDiv>
            <PageButtonDiv>
                <Button type="button" onClick={replay}>{"REPLAY"}</Button>
            </PageButtonDiv>
        </Container>
    );
}