import React from "react";
import { returnTimeToString } from "@/util/time";
import * as S from "@components/SubjectItem/style";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface ISubjectItem {
  subject: string;
  uid: string;
  time?: number;
}

function SubjectItem({ subject, uid, time = 0 }: ISubjectItem) {
  return (
    <S.Subject>
      <S.TitleBox>
        <S.Title>{subject}</S.Title>
      </S.TitleBox>
      <S.TimeBox>
        <S.TimeArea>
          <S.Time>{returnTimeToString(time)}</S.Time>
        </S.TimeArea>
        <S.IconsArea>
          <Link to="/stopwatch" state={{ subject, uid, time }}>
            <S.TimerIcon />
          </Link>

          <S.DotsIcon />
        </S.IconsArea>
      </S.TimeBox>
    </S.Subject>
  );
}

export default React.memo(SubjectItem);
