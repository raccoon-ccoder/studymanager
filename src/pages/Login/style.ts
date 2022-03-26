import styled from 'styled-components';

export const LoginInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.color.black};
`;

export const LogoImg = styled.img`
    display: block;
    width: 160px;
    height: 160px;
    margin: 0px 0px 4rem;
    border: 3px solid ${props => props.theme.color.white};
    border-radius: ${props => props.theme.size.icon.borderRadius};
`;

export const LoginBtn = styled.button`
    border: 2px solid ${props => props.theme.color.white};
    border-radius: 4px;
    width: 10rem;
    height: 2.2rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: ${props => props.theme.color.black};
    cursor: pointer;
`;

export const GoogleImg = styled.img`
    margin-left: 0.4rem;
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${props => props.theme.color.black};
`;

export const BtnText = styled.div`
    text-align: center;
    margin-right: 0.4rem;
    height: 1rem;
    color: ${props => props.theme.color.white};
`;