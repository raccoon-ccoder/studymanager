import { useContext, useEffect } from "react";
import firebase from "firebase/auth";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Login from "@pages/Login/index";
import Main from "@pages/Main";
import { isLoggedInState } from "@recoil/authRecoil";
import MetaTag from "@styles/Helmet";

function Router() {
  const isLoggIn = useRecoilValue(isLoggedInState);

  return (
    <>
      <MetaTag />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={isLoggIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/home"
            element={isLoggIn ? <Main /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
