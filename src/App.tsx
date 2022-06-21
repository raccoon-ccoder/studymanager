import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "@recoil/authRecoil";
import { auth } from "@api/firebase";
import Router from "@/Router";
import GlobalStyle from "@styles/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const setAuth = useSetRecoilState(authState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setAuth(authUser);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return init ? (
    <>
      <GlobalStyle />
      <Router isLoggedIn={isLoggedIn} />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
