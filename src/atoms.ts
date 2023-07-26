import { atom } from "recoil";

interface IUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export const currentUserState = atom<IUser | null>({
  key: "currentUserState",
  default: null,
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedInState",
  default: false,
});
