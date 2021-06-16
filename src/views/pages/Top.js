import React from "react";
import {
  Link,
} from "react-router-dom";
import { Container, Button } from "../styles/CommonCss";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 20px auto;
`

/** トップページを表示するコンポーネント */
export default function Top() {

  return (
    <Container>
      <Title>{"React Quiz App"}</Title>
      <Link to="/play" >
        <Button className="play" name="play">{"PLAY"}</Button>
      </Link>
    </Container>
  );
}