import * as S from "@pages/Main/style";
import Logo from "@images/logo.png";
import MusicPlayer from "@components/MusicPlayer";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { authState, isLoggedInState } from "@recoil/authRecoil";
import Clock from "@components/Clock";
import Nav from "@components/Nav";
import Subject from "@components/Subject";

interface IUser {
  accessToken: string;
  auth: object;
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: object;
  phoneNumber: string | null;
  photoURL: string;
  proactiveRefresh: object;
  providerData: object;
  providerId: string;
  reloadListener: any;
  reloadUserInfo: object;
  stsTokenManager: object;
  tenantId: any;
  uid: string;
}

function Main() {
  const [auth, setAuth] = useRecoilState(authState);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const logoutUser = async () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer) {
      try {
        const userAuth = getAuth();
        await signOut(userAuth);
        setAuth(null);
        setIsLoggedInState(false);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <S.MainInner>
      <S.Header>
        <S.LogoContainer>
          <S.Logo src={Logo} />
        </S.LogoContainer>
        <S.InfoContainer>
          <S.ProfileContainer>
            <S.ProfileImg src={auth?.photoURL || ""} onClick={logoutUser} />
          </S.ProfileContainer>
          <Clock />
        </S.InfoContainer>
      </S.Header>

      <S.MainContainer>
        <Nav />
        <Subject />
      </S.MainContainer>

      <MusicPlayer />
    </S.MainInner>
  );
}

export default Main;
