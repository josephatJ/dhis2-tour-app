import {
  initialBaseState,
  loadingBaseState,
  loadedBaseState
} from "../states/base.state";
import { TourConfigsState } from "../states/tour-configs.state";
import { createReducer, on } from "@ngrx/store";
import {
  loadTourConfigs,
  addLoadedTourConfigs,
  loadingTourConfigsFail
} from "../actions";
import { state } from "@angular/animations";

export const initialTourConfigsState: TourConfigsState = {
  ...initialBaseState,
  configs: null
};

export const reducer = createReducer(
  initialTourConfigsState,
  on(loadTourConfigs, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedTourConfigs, (state, { configs }) => ({
    ...state,
    loadedBaseState,
    configs
  })),
  on(loadingTourConfigsFail, (state, { error }) => ({
    ...state,
    error
  }))
);

export function tourConfigsReducer(state, action): TourConfigsState {
  return reducer(state, action);
}
