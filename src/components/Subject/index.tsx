import { readAllSubjectToStudy, readTodayAllSubjectTime } from "@/api/api";
import Modal from "@/components/Modal";
import SubjectItem from "@/components/SubjectItem";
import { authState } from "@/recoil/authRecoil";
import { returnToday } from "@/util/time";
import * as S from "@components/Subject/style";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";

function Subject() {
  const [viewModal, setViewModal] = useState(false);
  const auth = useRecoilValue(authState);
  const today = returnToday();

  // 아이디는 이메일로 변경해야 함
  const { data: subjects, isLoading: isSubjectsLoading } = useQuery(
    ["subjects", "toStudy"],
    () => readAllSubjectToStudy(auth!.email!.replace("@gmail.com", ""))
  );
  const { data: subjectTimes, isLoading: isTimesLoading } = useQuery(
    ["subjects", "todayTime"],
    () => readTodayAllSubjectTime(auth!.email!.replace("@gmail.com", ""), today)
  );

  return (
    <>
      <S.SubjectContainer>
        <S.SubjectBox>
          {isSubjectsLoading || isTimesLoading ? (
            <div>Loading...</div>
          ) : (
            // subjects?.map((sub) => {
            //   const subjectObj = subjectTimes?.find(
            //     (time) => time.uid === sub.uid
            //   );
            //   if (subjectObj) {
            //     return <SubjectItem key={subjectObj.uid} {...subjectObj} />;
            //   } else {
            //     return <SubjectItem key={sub.uid} {...sub} />;
            //   }
            // }
            subjects?.map((sub) => <SubjectItem key={sub.uid} {...sub} />)
          )}
        </S.SubjectBox>
        <S.AddIconBox>
          <S.AddIcon onClick={() => setViewModal(true)} />
        </S.AddIconBox>
      </S.SubjectContainer>
      {viewModal ? <Modal onClick={() => setViewModal(false)} /> : null}
    </>
  );
}

export default Subject;
