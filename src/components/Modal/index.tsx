import * as S from "@components/Modal/style";
import { useState } from "react";

interface IModal {
  onClick: () => void;
}

function Modal({ onClick }: IModal) {
  return (
    <S.Overlay>
      <S.Container>
        <S.Contents>
          <S.Title>Write title</S.Title>
          <S.Input
            type="text"
            placeholder="e.g. math,english.."
            maxLength={20}
          />
        </S.Contents>
        <S.BtnBox>
          <S.CancelBtn onClick={onClick}>취소</S.CancelBtn>
          <S.Btn>저장</S.Btn>
        </S.BtnBox>
      </S.Container>
    </S.Overlay>
  );
}

export default Modal;
