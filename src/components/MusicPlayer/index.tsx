import * as S from "./style";
import music1 from "../../music/Chiro-Slump.mp3";
import React, { useRef, useState } from "react";

function MusicPlayer() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [index, setIndex] = useState(0);

  const musicPlayer = useRef<HTMLAudioElement>(null);
  const musicName = useRef();

  const playMusic = () => {
    musicPlayer.current?.play();
    setIsPlayingMusic(true);
  };

  const pauseMusic = () => {
    musicPlayer.current?.pause();
    setIsPlayingMusic(false);
  };

  const changeVolume = (e: React.FormEvent<HTMLInputElement>) => {
    const volume = e.currentTarget.value;
    if (musicPlayer && musicPlayer.current) {
      musicPlayer.current.volume = Number(volume) / 100;
    }
  };

  return (
    <S.Footer>
      <S.MusicSection>
        <S.MusicPlayer src={music1} ref={musicPlayer} />
        <S.MusicIcons>
          <S.PreviousBtn />
          {isPlayingMusic ? (
            <S.PauseBtn onClick={pauseMusic} />
          ) : (
            <S.PlayBtn onClick={playMusic} />
          )}
          <S.NextBtn />
          <S.Volume
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            id="volume"
            onInput={changeVolume}
          />
        </S.MusicIcons>
        <S.MusicInfo>
          <S.MusicName htmlFor="volume" />
        </S.MusicInfo>
      </S.MusicSection>
    </S.Footer>
  );
}

export default MusicPlayer;
