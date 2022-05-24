import * as S from "./style";
import Logo from "../../images/logo.png";
import GoogleLogo from "../../images/googlelogo.png";
import { auth, provider } from "../../recoil/firebase";
import {
  setPersistence,
  signInWithPopup,
  browserSessionPersistence,
} from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../recoil/authContext";
import { useSetRecoilState } from "recoil";
import { authState, isLoggedInState } from "../../recoil/authRecoil";
import { useNavigate } from "react-router-dom";

function Login() {
  const setAuth = useSetRecoilState(authState);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const userAuth = await signInWithPopup(auth, provider);
      if (userAuth) {
        setAuth(userAuth.user);
        setIsLoggedInState(true);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.LoginInner>
      <S.LogoImg src={Logo} />
      <S.LoginBtn>
        <S.GoogleImg src={GoogleLogo} />
        <S.BtnText onClick={loginUser}>Login With Google</S.BtnText>
      </S.LoginBtn>
    </S.LoginInner>
  );
}

export default Login;
