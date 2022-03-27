import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import * as S from './style';
import Logo from '../../images/logo.png';

interface IUser {
    photoURL: string,

};


function Main() {
    const userInfo = useContext(AuthContext);
    const photo = userInfo?.photoURL;
    return (
        <S.MainInner>
            <S.Header>
                <S.LogoContainer>
                    <S.Logo src={Logo} />
                </S.LogoContainer>
                <S.InfoContainer>
                    <S.ProfileContainer>
                        <S.ProfileImg src={photo || undefined} />
                    </S.ProfileContainer>
                    <S.ClockContainer>
                        <S.ClockIcon />
                        <S.Clock />
                    </S.ClockContainer>
                </S.InfoContainer>
            </S.Header>

            <S.MainContainer>

            </S.MainContainer>
        </S.MainInner>
    );
}

export default Main;