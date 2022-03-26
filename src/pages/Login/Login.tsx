import * as S from './style';
import Logo from '../../images/logo.png';
import GoogleLogo from '../../images/googlelogo.png';
import { auth, provider } from '../../api/firebase';
import { setPersistence, signInWithPopup, browserLocalPersistence } from "firebase/auth";

const loginUser = async () => {
    try {
        await setPersistence(auth, browserLocalPersistence);
        await signInWithPopup(auth, provider);

        window.location.href = "/home";
    } catch(err) {
        console.log(err);
    }
};

function Login() {
    
    return (
        <S.LoginInner>
            <S.LogoImg src={Logo}/>
            <S.LoginBtn>
                <S.GoogleImg src={GoogleLogo} />
                <S.BtnText onClick={loginUser}>Login With Google</S.BtnText>
            </S.LoginBtn>
        </S.LoginInner>
    );
}

export default Login;