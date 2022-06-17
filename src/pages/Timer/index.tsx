import * as S from "@pages/Timer/style";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface ISubjectItem {
  state: {
    subject: string;
    uid: string;
    time: number;
  };
}

function Timer() {
  const [isDoing, setIsDoing] = useState(true);
  const onToggleDoing = () => setIsDoing((prev) => !prev);
  const { state } = useLocation() as ISubjectItem;
  console.log(state);
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title></S.Title>
      </S.TitleContainer>
      <S.ChartContainer>
        <S.Chart percent={0} />
      </S.ChartContainer>
      <S.IconContainer>
        <S.IconBox>
          {isDoing ? (
            <>
              <S.PauseIcon onClick={onToggleDoing} />
              <S.IconName>Pause</S.IconName>
            </>
          ) : (
            <>
              <S.StartIcon onClick={onToggleDoing} />
              <S.IconName>Restart</S.IconName>
            </>
          )}
        </S.IconBox>
        <S.IconBox>
          <S.StopIcon />
          <S.IconName>Stop</S.IconName>
        </S.IconBox>
      </S.IconContainer>
    </S.Wrapper>
  );
}

export default Timer;
