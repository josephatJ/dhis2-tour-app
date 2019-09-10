import { createAction, props } from "@ngrx/store";

import { ErrorMessage, SystemInfo, User } from "../../core";

export enum UserActionTypes {
  LoadCurrentUser = "[User] Load current User",
  AddCurrentUser = "[User] Add Current User",
  LoadCurrentUserFail = "[User] Load Current User fail",
  LoadSystemUsers = "[User] Load system users",
  AddSystemUsers = "[User] add loaded users",
  LoadingSystemUsersFail = "[User] loading system users fail"
}

export const loadCurrentUser = createAction(
  "[User] Load current User",
  props<{ systemInfo: SystemInfo }>()
);

export const addCurrentUser = createAction(
  "[User] Add Current User",
  props<{ currentUser: User; systemInfo: SystemInfo }>()
);

export const loadCurrentUserFail = createAction(
  "[User] Load Current User fail",
  props<{ error: ErrorMessage }>()
);

export const loadSystemUsers = createAction("[User] Load system users");

export const addSystemUsers = createAction(
  "[User] add loaded users",
  props<{ users: any }>()
);

export const loadingSystemUsersFail = createAction(
  "[User] loading system users fail",
  props<{ error: ErrorMessage }>()
);
