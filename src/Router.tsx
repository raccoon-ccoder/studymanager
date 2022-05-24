import { useContext, useEffect } from "react";
import firebase from "firebase/auth";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./recoil/authContext";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import Login from "./pages/Login/index";
import Main from "./pages/Main";
import { authState, isLoggedInState } from "./recoil/authRecoil";
import { auth } from "./recoil/firebase";

function Router() {
  const isLoggIn = useRecoilValue(isLoggedInState);

  return (
    <BrowserRouter>
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
  );
}

export default Router;
