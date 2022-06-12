import React from "react";
import { returnTimeToString } from "@/util/time";
import * as S from "@components/SubjectItem/style";

interface ISubjectItem {
  subject: string;
  uid: string;
  time?: number;
}

function SubjectItem({ subject, uid, time = 0 }: ISubjectItem) {
  console.log("item 렌더링");
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
          <S.TimerIcon />
          <S.DotsIcon />
        </S.IconsArea>
      </S.TimeBox>
    </S.Subject>
  );
}

export default React.memo(SubjectItem);
