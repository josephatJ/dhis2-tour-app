import { Injectable } from "@angular/core";
import { NgxDhis2HttpClientService } from "@iapps/ngx-dhis2-http-client";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  loadTourConfigs,
  addLoadedTourConfigs,
  loadingTourConfigsFail
} from "../actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class TourConfigsEffects {
  constructor(
    private httpClient: NgxDhis2HttpClientService,
    private actions$: Actions
  ) {}

  loadedTourConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTourConfigs),
      switchMap(() =>
        this.httpClient.get("dataStore/tour-app/configurations.json").pipe(
          map(configs => addLoadedTourConfigs({ configs: configs })),
          catchError(error => of(loadingTourConfigsFail({ error })))
        )
      )
    )
  );
}
