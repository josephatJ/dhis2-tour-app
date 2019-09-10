import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/internal/operators";
import { UserService, User, ErrorMessage } from "../../core";

import { Action, Store } from "@ngrx/store";
import {
  addSystemInfo,
  loadCurrentUser,
  addCurrentUser,
  loadCurrentUserFail,
  loadSystemUsers,
  addSystemUsers,
  loadingSystemUsersFail
} from "../actions";
import { State } from "../reducers";

@Injectable()
export class UserEffects {
  systemInfoLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      map(({ systemInfo }) => loadCurrentUser({ systemInfo }))
    )
  );

  loadCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCurrentUser),
      switchMap(({ systemInfo }) =>
        this.userService.loadCurrentUser().pipe(
          map(
            (currentUser: User) => addCurrentUser({ currentUser, systemInfo }),
            this.store.dispatch(loadSystemUsers())
          ),
          catchError((error: any) => of(loadCurrentUserFail({ error })))
        )
      )
    )
  );

  loadSystemUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSystemUsers),
      switchMap(() =>
        this.userService.loadSystemUsers().pipe(
          map(data => addSystemUsers({ users: data })),
          catchError((error: ErrorMessage) =>
            of(loadingSystemUsersFail({ error: error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<State>
  ) {}
}
