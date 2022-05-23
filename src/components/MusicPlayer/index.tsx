import * as S from "./style";
import { musics } from "./musics";
import React, { useEffect, useRef, useState } from "react";

function MusicPlayer() {
  const [music, setMusic] = useState(musics);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [index, setIndex] = useState(0);

  const musicPlayer = useRef<HTMLAudioElement>(null);
  const musicName = useRef<HTMLLabelElement>(null);

  const playMusic = () => {
    musicPlayer.current?.play();
    setIsPlayingMusic(true);
  };

  const pauseMusic = () => {
    musicPlayer.current?.pause();
    setIsPlayingMusic(false);
  };

  const loadMusic = () => {
    if (musicPlayer && musicPlayer.current && musicName.current) {
      musicPlayer.current.src = require("./" + music[index].src);
      musicPlayer.current.load();
      playMusic();
      musicName.current.innerText = `${music[index].artist} - ${music[index].title}`;
    }
  };

  const changeVolume = (e: React.FormEvent<HTMLInputElement>) => {
    const volume = e.currentTarget.value;
    if (musicPlayer && musicPlayer.current) {
      musicPlayer.current.volume = Number(volume) / 100;
    }
  };

  const changeNextMusic = () => {
    index < music.length - 1 ? setIndex((idx) => idx + 1) : setIndex(0);
  };

  const changePreviousMusic = () => {
    index > 0 ? setIndex((idx) => idx - 1) : setIndex(music.length - 1);
  };

  useEffect(() => {
    loadMusic();
    if (musicPlayer && musicPlayer.current) {
      musicPlayer.current.addEventListener("ended", () => changeNextMusic());
    }
    return () => {
      musicPlayer.current?.removeEventListener("ended", () =>
        changeNextMusic()
      );
    };
  }, []);

  useEffect(() => {
    loadMusic();
  }, [index]);

  return (
    <S.Footer>
      <S.MusicSection>
        <S.MusicPlayer ref={musicPlayer} />
        <S.MusicIcons>
          <S.PreviousBtn onClick={changePreviousMusic} />
          {isPlayingMusic ? (
            <S.PauseBtn onClick={pauseMusic} />
          ) : (
            <S.PlayBtn onClick={playMusic} />
          )}
          <S.NextBtn onClick={changeNextMusic} />
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
          <S.MusicName htmlFor="volume" ref={musicName} />
        </S.MusicInfo>
      </S.MusicSection>
    </S.Footer>
  );
}

export default MusicPlayer;
