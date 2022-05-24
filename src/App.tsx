import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { authState, isLoggedInState } from "./recoil/authRecoil";
import { auth } from "./recoil/firebase";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const setAuth = useSetRecoilState(authState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setAuth(authUser);
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
