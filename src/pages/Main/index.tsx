import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import * as S from "./style";
import Logo from "../../images/logo.png";
import MusicPlayer from "../../components/MusicPlayer";
import { User } from "firebase/auth";

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
  const userInfo = useContext(AuthContext);
  const [time, setTime] = useState("0");

  const currentTime = () => {
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    setTime(`${hours}:${minutes}`);
  };

  const showTime = () => {
    setInterval(currentTime, 1000);
  };

  showTime();
  console.log(time);

  return (
    <S.MainInner>
      <S.Header>
        <S.LogoContainer>
          <S.Logo src={Logo} />
        </S.LogoContainer>
        <S.InfoContainer>
          <S.ProfileContainer>
            <S.ProfileImg src={userInfo?.photoURL || ""} />
          </S.ProfileContainer>
          <S.ClockContainer>
            <S.ClockIcon />
            <S.Clock>{time}</S.Clock>
          </S.ClockContainer>
        </S.InfoContainer>
      </S.Header>

      <S.MainContainer></S.MainContainer>

      <MusicPlayer />
    </S.MainInner>
  );
}

export default Main;
