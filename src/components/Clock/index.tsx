import { useEffect, useState } from "react";
import * as S from "./style";

function Clock() {
  const currentTime = () => {
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(currentTime());
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <S.Clock>
      <S.ClockIcon />
      <S.Time>{time}</S.Time>
    </S.Clock>
  );
}

export default Clock;
