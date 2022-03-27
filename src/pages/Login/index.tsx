import * as S from './style';
import Logo from '../../images/logo.png';
import GoogleLogo from '../../images/googlelogo.png';
import { auth, provider } from '../../context/firebase';
import { setPersistence, signInWithPopup, browserSessionPersistence, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

const loginUser = async () => {
    try {
        await setPersistence(auth, browserSessionPersistence);
        await signInWithPopup(auth, provider);

        window.location.href = "/home";
    } catch(err) {
        console.log(err);
    }
};

async function checkLogin() {
    try {
        onAuthStateChanged(auth, async(user) => {
            if (user) window.location.href = "index.html";
        });
    } catch(err) {
        console.log(err);
    }
}

function Login() {
    const user = useContext(AuthContext);
    if (user)  window.location.href = "/home";

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