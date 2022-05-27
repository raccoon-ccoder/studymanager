import * as S from "@components/Nav/style";
function Nav() {
  // 클릭한 버튼에 대해서 색깔 다르게
  return (
    <S.Container>
      <S.TimeContainer>
        <S.Title>Total Time</S.Title>
        <S.TimeBox>
          <S.Hour></S.Hour>
          <S.Minute></S.Minute>
        </S.TimeBox>
      </S.TimeContainer>
      <S.NavList>
        <S.NavItem>
          <S.Btn>Daily</S.Btn>
        </S.NavItem>
        <S.NavItem>
          <S.Btn>Weekly</S.Btn>
        </S.NavItem>
        <S.NavItem>
          <S.Btn>Monthly</S.Btn>
        </S.NavItem>
      </S.NavList>
    </S.Container>
  );
}

export default Nav;
