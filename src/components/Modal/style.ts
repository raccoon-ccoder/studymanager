import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  /* visibility: hidden; */
  /* opacity: 0; */
`;

export const Container = styled.div`
  width: 19rem;
  height: 12rem;
  background-color: white;
  padding: 1.5rem;
  box-sizing: border-box;
`;

export const Contents = styled.div`
  height: 50%;
`;

export const Title = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.color.gray};
  font-weight: 600;
`;

export const Input = styled.input`
  margin-top: 1rem;
  border: none;
  width: 15.5rem;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const BtnBox = styled.div`
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Btn = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.yellow};
  font-weight: 700;
  cursor: pointer;
  color: black;
`;

// 추가적인 것들
export const CancelBtn = styled(Btn)`
  margin-right: 10px;
`;
