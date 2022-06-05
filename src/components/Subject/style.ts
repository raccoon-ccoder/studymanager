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

export const SubjectBox = styled.article``;

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
