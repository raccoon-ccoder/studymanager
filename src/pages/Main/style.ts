import styled from "styled-components";

export const MainInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: 1100px;
    min-height: 635px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
  width: ${(props) => props.theme.size.icon.headerWidth};
  height: ${(props) => props.theme.size.icon.headerHeight};
  border: ${(props) => props.theme.size.icon.border};
  border-radius: ${(props) => props.theme.size.icon.borderRadius};

  @media screen and (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  @media screen and (min-width: 768px) {
    width: 10%;
    flex-direction: column;
  }
`;

export const ProfileContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const ProfileImg = styled.img`
  cursor: pointer;
  width: ${(props) => props.theme.size.icon.headerWidth};
  height: ${(props) => props.theme.size.icon.headerHeight};
  border: ${(props) => props.theme.size.icon.border};
  border-radius: ${(props) => props.theme.size.icon.borderRadius};

  @media screen and (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  padding: ${(props) => props.theme.size.mobileBaseSpace} 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    min-width: 672px;
    max-width: 800px;
    height: 28.125rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const NavSection = styled.section`
  width: 100%;
  border-radius: ${(props) => props.theme.size.card.radius};
  background-color: var(--gray);
  margin-bottom: 1.8rem;

  @media screen and (min-width: 768px) {
    width: 35%;
    height: 100%;
    margin-bottom: 0;
  }
`;

export const TimeArticle = styled.article`
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

export const TimeTitle = styled.p`
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

export const Hour = styled.span`
  margin-right: 0.625rem;
`;

export const Minute = styled.span``;

export const PeriodList = styled.ul`
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

export const PeriodItem = styled.li`
  color: ${(props) => props.theme.color.lightGray};
`;

export const periodBtn = styled.button`
  cursor: pointer;
  padding: 10px 10px;
  font-weight: 800;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.gray};
  color: ${(props) => props.theme.color.white};
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
    color: ${(props) => props.theme.color.white};
  }
`;

export const SubjectSection = styled.section`
  height: calc(100vh - 27.5rem);
  width: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (min-width: 768px) {
    height: 100%;
    width: 45%;
  }
`;
