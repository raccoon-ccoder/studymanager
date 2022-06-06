import { ITotalTime, readSubjectTotalTime } from "@/api/api";
import { authState } from "@/recoil/authRecoil";
import { returnTimeToString, returnToday } from "@/util/time";
import * as S from "@components/Nav/style";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
function Nav() {
  // 클릭한 버튼에 대해서 색깔 다르게
  const auth = useRecoilValue(authState);
  const today = returnToday();
  const { data, isLoading } = useQuery<ITotalTime>(
    ["subjects", "totalTime"],
    () => readSubjectTotalTime(auth!.email!.replace("@gmail.com", ""), today)
  );

  return (
    <S.Container>
      <S.TimeContainer>
        <S.Title>Total Time</S.Title>
        <S.TimeBox>
          {isLoading ? null : <S.Hour>{returnTimeToString(data?.time)}</S.Hour>}
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
