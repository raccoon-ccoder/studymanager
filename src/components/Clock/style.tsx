import styled from "styled-components";
import { AccessTime } from "@material-ui/icons";

export const Clock = styled.div`
  border: 2px solid ${(props) => props.theme.color.lightYellow};
  border-radius: 8px;
  color: ${(props) => props.theme.color.lightYellow};
  padding: 0.125rem 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClockIcon = styled(AccessTime)`
  // 내부 access_time 들어가야 함
`;

export const Time = styled.span`
  font-size: 1rem;
  font-weight: 700;
  margin: 2px 0 1px 0;
  // 시간 들어가야함
`;
