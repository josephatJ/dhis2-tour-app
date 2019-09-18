import { createAction, props } from "@ngrx/store";

export enum TourConfigsActionsTypes {
  LoadTourConfigs = "[Tour configs] Load Tour configs",
  AddLoadedTourConfigs = "[Tour configs] Add loaded tour configs",
  LoadingTourConfigsFail = "[Tour configs] loading tour configs fail"
}

export const loadTourConfigs = createAction("[Tour configs] Load Tour configs");

export const addLoadedTourConfigs = createAction(
  "[Tour configs] Add loaded tour configs",
  props<{ configs: any }>()
);

export const loadingTourConfigsFail = createAction(
  "[Tour configs] loading tour configs fail",
  props<{ error: any }>()
);
