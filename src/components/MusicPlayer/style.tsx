import styled from "styled-components";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";

export const Footer = styled.footer`
  width: 100%;
`;

export const MusicSection = styled.section``;

export const MusicPlayer = styled.audio``;

export const MusicIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

export const PreviousBtn = styled(SkipPreviousOutlinedIcon)`
  background-color: ${(props) => props.theme.color.lightYellow};
  border-radius: 5px;
  color: ${(props) => props.theme.color.black};
  cursor: pointer;
`;

export const PlayBtn = styled(PlayArrowOutlinedIcon)`
  background-color: ${(props) => props.theme.color.lightYellow};
  border-radius: 5px;
  color: ${(props) => props.theme.color.black};
  cursor: pointer;
`;

export const NextBtn = styled(SkipNextOutlinedIcon)`
  background-color: ${(props) => props.theme.color.lightYellow};
  border-radius: 5px;
  color: ${(props) => props.theme.color.black};
  cursor: pointer;
`;

export const Volume = styled.input`
  -webkit-appearance: none;
  width: 3.75rem;
  height: 1.25rem;
  background: linear-gradient(to right, #383c43, #7f8693);
  outline: none;
  border-radius: 8px;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0.625rem;
    height: 1.5rem;
    background: ${(props) => props.theme.color.lightYellow};
    cursor: pointer;
    border-radius: 4px;
  }
  ::-moz-range-thumb {
    width: 0.625rem;
    height: 1.5rem;
    background: #000;
    cursor: pointer;
    border-radius: 4px;
  }
  :focus {
    padding: 1rem 0 0 0;
    box-sizing: border-box;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    height: 1.4rem;
    ::-webkit-slider-thumb {
      height: 1.875rem;
    }
    ::-moz-range-thumb {
      height: 1.875rem;
    }
  }
`;

export const MusicInfo = styled.div`
  padding: 1rem 0 0 0;
  box-sizing: border-box;
  text-align: center;
`;

export const MusicName = styled.label`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.lightGray};
`;
