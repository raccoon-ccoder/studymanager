import {
  returnTimeToPercent,
  returnTimeToString,
  returnToday,
} from "@/util/time";
import * as S from "@/pages/StopWatch/style";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "@/recoil/authRecoil";
import { updateSubjectTime } from "@/api/api";

interface ISubjectItem {
  state: {
    subject: string;
    uid: string;
    time: number;
  };
}

function StopWatch() {
  const auth = useRecoilValue(authState);
  const [isDoing, setIsDoing] = useState(true);
  const [time, setTime] = useState(0);
  const { state } = useLocation() as ISubjectItem;
  const tickTime = useRef<NodeJS.Timer | null>(null);
  const date = returnToday();
  const navigate = useNavigate();

  const stoptime = () => {
    if (isDoing) {
      if (tickTime.current) clearInterval(tickTime.current);
    }
    setIsDoing(false);
  };

  const restartTime = () => {
    if (!isDoing) {
      tickTime.current = setInterval(
        () => setTime((prev) => prev + 1),
        1000 * 60
      );
    }
    setIsDoing(true);
  };

  const onEndTime = () => {
    const subjectObj = {
      userId: auth!.email!.replace("@gmail.com", ""),
      date: date,
      time: time,
      uid: state.uid,
      name: state.subject,
    };
    updateSubjectTime(subjectObj);
    navigate("/home");
  };

  useEffect(() => {
    setTime(state.time);
    tickTime.current = setInterval(
      () => setTime((prev) => prev + 1),
      1000 * 60
    );
    return () => {
      if (tickTime.current) clearInterval(tickTime.current);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title>{state.subject}</S.Title>
      </S.TitleContainer>
      <S.ChartContainer>
        <S.Chart percent={returnTimeToPercent(time)}>
          {returnTimeToString(time)}
        </S.Chart>
      </S.ChartContainer>
      <S.IconContainer>
        <S.IconBox>
          {isDoing ? (
            <>
              <S.PauseIcon onClick={stoptime} />
              <S.IconName>Pause</S.IconName>
            </>
          ) : (
            <>
              <S.StartIcon onClick={restartTime} />
              <S.IconName>Restart</S.IconName>
            </>
          )}
        </S.IconBox>
        <S.IconBox>
          <S.StopIcon onClick={onEndTime} />
          <S.IconName>Stop</S.IconName>
        </S.IconBox>
      </S.IconContainer>
    </S.Wrapper>
  );
}

export default StopWatch;
