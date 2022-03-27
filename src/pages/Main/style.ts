import styled from 'styled-components';

export const MainInner = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
    width: ${props => props.theme.size.icon.headerWidth};
    height: ${props => props.theme.size.icon.headerHeight};
    border: ${props => props.theme.size.icon.border};
    border-radius: ${props => props.theme.size.icon.borderRadius};
`;

export const InfoContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
`;

export const ProfileContainer = styled.div``;

export const ProfileImg = styled.img`
    cursor: pointer;
    width: ${props => props.theme.size.icon.headerWidth};
    height: ${props => props.theme.size.icon.headerHeight};
    border: ${props => props.theme.size.icon.border};
    border-radius: ${props => props.theme.size.icon.borderRadius};
`;

export const ClockContainer = styled.div`
    border: 2px solid ${props => props.theme.color.lightYellow};
    border-radius: 8px;
    color: ${props => props.theme.color.lightYellow};
    padding: 0.125rem 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ClockIcon = styled.span`
    // 내부 access_time 들어가야 함
`;

export const Clock = styled.span`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 2px;
    // 시간 들어가야함
`;

export const MainContainer = styled.main`
    width: 100%;
    padding: ${props => props.theme.size.mobileBaseSpace} 0;
    box-sizing: border-box;
`;

export const NavSection = styled.section`
    width: 100%;
    border-radius: ${props => props.theme.size.card.radius};
    background-color: var(--gray);
    margin-bottom: 1.8rem;
`;

export const TimeArticle = styled.article`
    background-color: ${props => props.theme.color.yellow};
    height: 5rem;
    color: ${props => props.theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.size.card.radius};
    text-align: center;
    line-height: 5rem;
    padding: 0 1.8rem;
    box-sizing: border-box;
`;

export const TimeTitle = styled.p`
    width: 30%;
    height: 100%;
    color: ${props => props.theme.color.black};
    font-size: 0.8rem;
`;

export const TimeBox = styled.div`
    width: 70%;
    color: ${props => props.theme.color.black};
    font-size: 1.8rem;
    font-weight: 800;
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
`;

export const PeriodItem = styled.li`
    color: ${props => props.theme.color.lightGray};
`;

export const periodBtn = styled.button`
    cursor: pointer;
    padding: 10px 10px;
    font-weight: 800;
    border-radius: 5px;
    background-color: ${props => props.theme.color.gray};
    color: ${props => props.theme.color.white};
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.color.lightGray};
        color: ${props => props.theme.color.white};
    }
`;

export const SubjectSection = styled.section`
    height: calc(100vh - 27.5rem);
    width: 100%;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;