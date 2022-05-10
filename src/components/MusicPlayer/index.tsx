import * as S from "./style";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import { useRef } from "react";

function MusicPlayer() {
  const allSong = [
    {
      singer: "bensound",
      song: "thejazzpiano",
      path: "bensound - thejazzpiano.mp3",
    },
    {
      singer: "Chiro",
      song: "Slump",
      path: "Chiro_ Slump.mp3",
    },
    {
      singer: "DJ Quads",
      song: "At My Front Door",
      path: "DJ Quads - At My Front Door.mp3",
    },
    {
      singer: "lukrembo",
      song: "jazz beat music",
      path: "lukrembo - jazz beat music.mp3",
    },
    {
      singer: "No Copyright",
      song: "Chill Lofi Music",
      path: "No Copyright - Chill Lofi Music.mp3",
    },
    {
      singer: "Ryan",
      song: "Milk Coffee",
      path: "Ryan_ Milk Coffee.mp3",
    },
  ];

  let index = 0;
  let playingSong = false;

  const musicPlayer = useRef(null);
  const musicName = useRef();
  // useRef(null) => Object is possibly null

  return (
    <S.Footer>
      <S.MusicSection>
        <S.MusicPlayer ref={musicPlayer} />
        <S.MusicIcons>
          <S.PreviousBtn />
          <S.PlayBtn />
          <S.NextBtn />
          <S.Volume type="range" min="0" max="100" value="50" id="volume" />
        </S.MusicIcons>
        <S.MusicInfo>
          <S.MusicName htmlFor="volume" />
        </S.MusicInfo>
      </S.MusicSection>
    </S.Footer>
  );
}

export default MusicPlayer;
