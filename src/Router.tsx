import { lazy, Suspense, useContext, useEffect } from "react";
import firebase from "firebase/auth";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import MetaTag from "@styles/Helmet";

const Login = lazy(() => import("@pages/Login/index"));
const Main = lazy(() => import("@pages/Main"));
const Timer = lazy(() => import("@pages/Timer/index"));

interface IRouter {
  isLoggedIn: boolean;
}
function Router({ isLoggedIn }: IRouter) {
  return (
    <>
      <MetaTag />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
            />
            <Route
              path="/home"
              element={isLoggedIn ? <Main /> : <Navigate to="/" />}
            />
            <Route
              path="/timer"
              element={isLoggedIn ? <Timer /> : <Navigate to="/" />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Router;
