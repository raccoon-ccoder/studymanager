import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  border-radius: ${(props) => props.theme.size.card.radius};
  background-color: ${(props) => props.theme.color.gray};
  margin-bottom: 1.8rem;

  @media screen and (min-width: 768px) {
    width: 35%;
    height: 100%;
    margin-bottom: 0;
  }
`;

export const TimeContainer = styled.article`
  background-color: ${(props) => props.theme.color.yellow};
  height: 5rem;
  color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.size.card.radius};
  text-align: center;
  line-height: 5rem;
  padding: 0 1.8rem;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    height: 60%;
    justify-content: center;
    flex-direction: column;
    line-height: 0;
    padding: 0;
  }
`;

export const Title = styled.p`
  width: 30%;
  height: 100%;
  color: ${(props) => props.theme.color.black};
  font-size: 0.8rem;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 30%;
    display: block;
    font-size: 1rem;
    font-weight: 600;
    line-height: 3rem;
  }
`;

export const TimeBox = styled.div`
  width: 70%;
  color: ${(props) => props.theme.color.black};
  font-size: 1.8rem;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 40%;
    font-size: 2.5rem;
  }
`;

export const Hour = styled.span``;

export const NavList = styled.ul`
  height: 3rem;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  line-height: 3rem;

  @media screen and (min-width: 768px) {
    height: 40%;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;
  }
`;

export const NavItem = styled.li`
  color: ${(props) => props.theme.color.lightGray};
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: 10px 10px;
  font-weight: 800;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.gray};
  color: ${(props) => props.theme.color.white};
  transition: all 0.4s ease-in-out;
  :hover {
    background-color: ${(props) => props.theme.color.lightGray};
    color: ${(props) => props.theme.color.white};
  }
`;
