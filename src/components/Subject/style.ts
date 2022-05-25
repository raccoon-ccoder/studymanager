import styled from "styled-components";
import { AddCircleOutline } from "@material-ui/icons";
import { PlayCircleOutline } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";

export const SubjectContainer = styled.section`
  height: calc(100vh - 27.5rem);
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    width: 45%;
  }
`;

export const SubjectBox = styled.article``; // 있을 이유가 있나?

//
export const Subject = styled.article`
  width: 100%;
  height: 5.4rem;
  margin-bottom: ${(props) => props.theme.size.mobileBaseSpace};
  background-color: ${(props) => props.theme.color.gray};
  border-radius: ${(props) => props.theme.size.card.radius};
  padding: 0.5rem 1.25rem;
  box-sizing: border-box;
`;

export const TitleBox = styled.div``;

export const Title = styled.h3`
  color: ${(props) => props.theme.color.lightGray};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 0 0 0;
  box-sizing: border-box;
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.8rem;
  box-sizing: border-box;
`;

export const TimeArea = styled.div``;

export const Time = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.white};
`;

export const IconsArea = styled.div``;

export const TimerIcon = styled(PlayCircleOutline)`
  color: ${(props) => props.theme.color.yellow};
  cursor: pointer;
`;

export const DotsIcon = styled(MoreVert)`
  color: ${(props) => props.theme.color.lightGray};
  cursor: pointer;
`;
//

export const AddIconBox = styled.article`
  width: 100%;
  height: 5.4rem;
  margin-bottom: ${(props) => props.theme.size.mobileBaseSpace};
  background-color: ${(props) => props.theme.color.gray};
  border-radius: ${(props) => props.theme.size.card.radius};
  padding: 0.5rem 1.25rem;
  box-sizing: border-box;

  border: 3px solid ${(props) => props.theme.color.lightGray};
  text-align: center;
  background-color: transparent;
  line-height: 5.4rem;
  svg {
    font-size: 36px;
  }
`;

export const AddIcon = styled(AddCircleOutline)`
  color: ${(props) => props.theme.color.lightGray};

  cursor: pointer;
`;
