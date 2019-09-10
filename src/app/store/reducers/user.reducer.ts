import { createReducer, on } from "@ngrx/store";

import {
  addCurrentUser,
  loadCurrentUser,
  loadCurrentUserFail,
  loadSystemUsers,
  addSystemUsers,
  loadingSystemUsersFail
} from "../actions/user.actions";
import { initialUserState, UserState } from "../states/user.state";
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from "../states/base.state";

export const reducer = createReducer(
  initialUserState,
  on(loadCurrentUser, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addCurrentUser, (state, { currentUser }) => ({
    ...state,
    ...loadedBaseState,
    currentUser
  })),
  on(loadCurrentUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(loadSystemUsers, state => ({
    ...state,
    loaded: state.loaded,
    loading: state.loading
  })),
  on(addSystemUsers, (state, { users }) => ({
    ...state,
    users: users,
    loaded: state.loaded,
    loading: state.loading
  })),
  on(loadingSystemUsersFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  }))
);

export function userReducer(state, action): UserState {
  return reducer(state, action);
}
