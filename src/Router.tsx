import { lazy, Suspense, useContext, useEffect } from "react";
import firebase from "firebase/auth";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "@recoil/authRecoil";
import MetaTag from "@styles/Helmet";

const Login = lazy(() => import("@pages/Login/index"));
const Main = lazy(() => import("@pages/Main"));
const Timer = lazy(() => import("@pages/Timer/index"));

function Router() {
  const isLoggIn = useRecoilValue(isLoggedInState);

  return (
    <>
      <MetaTag />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route
              path="/"
              element={isLoggIn ? <Navigate to="/home" /> : <Login />}
            />
            <Route
              path="/home"
              element={isLoggIn ? <Main /> : <Navigate to="/" />}
            />
            <Route
              path="/timer"
              element={isLoggIn ? <Timer /> : <Navigate to="/" />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Router;
