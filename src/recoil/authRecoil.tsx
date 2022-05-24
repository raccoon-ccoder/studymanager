import { atom } from "recoil";
import firebase from "firebase/auth";

type AuthState = firebase.User | null;

export const authState = atom<AuthState>({
  key: "authState",
  default: null,
  dangerouslyAllowMutability: true,
});

export const isLoggedInState = atom({
  key: "isLogginInState",
  default: false,
});
