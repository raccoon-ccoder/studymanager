import { atom } from "recoil";
import firebase from "firebase/auth";

type AuthState = firebase.User | null;

export const authState = atom<AuthState>({
  key: "authState",
  default: null,
  // recoil - firebase User 객체의 경우 freeze 불가
  dangerouslyAllowMutability: true,
});

export const isLoggedInState = atom({
  key: "isLogginInState",
  default: false,
});
