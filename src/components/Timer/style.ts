import styled, { css } from "styled-components";
import { PauseCircleOutline } from "@material-ui/icons";
import { StopOutlined } from "@material-ui/icons";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: ${(props) => props.theme.color.black};
  visibility: hidden;
  opacity: 0;

  @media screen and (min-width: 768px) {
    min-height: 650px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Chart = styled.div`
  position: relative;
  width: ${(props) => props.theme.size.card.width};
  height: ${(props) => props.theme.size.card.width};
  border-radius: 50%;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  place-content: center;
  display: inline-grid;

  ::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: radial-gradient(
          farthest-side,
          ${(props) => props.theme.color.yellow} 98%,
          #0000
        )
        top/ ${(props) => props.theme.size.card.border}
        ${(props) => props.theme.size.card.border} no-repeat,
      conic-gradient(
        ${(props) => props.theme.color.yellow} 0%,
        ${(props) => props.theme.color.yellow}
          calc(${(props) => props.percent}*1%),
        #2b2e36 calc(${(props) => props.percent}*1%) 100%
      );
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - ${(props) => props.theme.size.card.border}),
      #000 calc(100% - ${(props) => props.theme.size.card.border})
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - ${(props) => props.theme.size.card.border}),
      #000 calc(100% - ${(props) => props.theme.size.card.border})
    );
  }

  ::after {
    transform: rotate(calc(var(--c-p) * 3.6deg))
      translateY(calc(50% - ${(props) => props.theme.size.card.width} / 2));
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: calc(50% - ${(props) => props.theme.size.card.border} / 2);
    background: ${(props) => props.theme.color.yellow};
  }
`;

export const IconContainer = styled.div`
  width: 50%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

export const IconBox = styled.div``;

const icon = css`
  color: ${(props) => props.theme.color.yellow};
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 55px;
`;

export const PauseIcon = styled(PauseCircleOutline)`
  ${icon};
`;

export const StopIcon = styled(StopOutlined)`
  ${icon};
`;

export const IconName = styled.span`
  display: block;
  text-align: center;
  color: ${(props) => props.theme.color.lightGray};
`;
