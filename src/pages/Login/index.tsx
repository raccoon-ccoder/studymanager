import * as S from "@pages/Login/style";
import Logo from "@images/logo.png";
import GoogleLogo from "@images/googlelogo.png";
import { auth, provider } from "@api/firebase";
import { signInWithPopup } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { authState } from "@recoil/authRecoil";
import { useNavigate } from "react-router-dom";

function Login() {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const userAuth = await signInWithPopup(auth, provider);
      if (userAuth) {
        setAuth(userAuth.user);
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
