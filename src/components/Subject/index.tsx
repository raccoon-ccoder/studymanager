import { readAllSubjectToStudy, readTodayAllSubjectTime } from "@/api/api";
import SubjectItem from "@/components/SubjectItem";
import { authState } from "@/recoil/authRecoil";
import { returnToday } from "@/util/time";
import * as S from "@components/Subject/style";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";

function Subject() {
  const auth = useRecoilValue(authState);
  const today = returnToday();

  // 아이디는 이메일로 변경해야 함
  const { data: subjects, isSuccess: isSubejctsSuccess } = useQuery(
    ["subjects", "toStudy"],
    () => {
      return readAllSubjectToStudy(auth!.email!.replace("@gmail.com", ""));
    }
  );
  const { data: subjectTimes, isSuccess: isTimesSuccess } = useQuery(
    ["subjects", "todayTime"],
    () => {
      return readTodayAllSubjectTime(
        auth!.email!.replace("@gmail.com", ""),
        today
      );
    }
  );

  return (
    <S.SubjectContainer>
      <S.SubjectBox>
        {isSubejctsSuccess && subjects && isTimesSuccess && subjectTimes ? (
          subjects.map((sub) => {
            const subjectObj = subjectTimes.find(
              (time) => time.uid === sub.uid
            );
            if (subjectObj) {
              return <SubjectItem {...subjectObj} />;
            } else {
              return <SubjectItem {...sub} />;
            }
          })
        ) : (
          <p>Loading...</p>
        )}
      </S.SubjectBox>
      <S.AddIconBox>
        <S.AddIcon />
      </S.AddIconBox>
    </S.SubjectContainer>
  );
}

export default Subject;
