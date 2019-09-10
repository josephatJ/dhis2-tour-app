import { BaseState, initialBaseState } from "./base.state";
import { User } from "src/app/core";

export interface UserState extends BaseState {
  currentUser: User;
  users: any;
}

export const initialUserState: UserState = {
  ...initialBaseState,
  currentUser: null,
  users: null
};
