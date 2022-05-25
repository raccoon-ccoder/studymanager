import * as S from "./style";

function Subject() {
  return (
    <S.SubjectContainer>
      <S.SubjectBox>
        <S.Subject>
          <S.TitleBox>
            <S.Title>영어 공부</S.Title>
          </S.TitleBox>
          <S.TimeBox>
            <S.TimeArea>
              <S.Time>1h 15m</S.Time>
            </S.TimeArea>
            <S.IconsArea>
              <S.TimerIcon />
              <S.DotsIcon />
            </S.IconsArea>
          </S.TimeBox>
        </S.Subject>
      </S.SubjectBox>
      <S.AddIconBox>
        <S.AddIcon />
      </S.AddIconBox>
    </S.SubjectContainer>
  );
}

export default Subject;
