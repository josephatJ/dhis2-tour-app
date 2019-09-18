import { createSelector } from "@ngrx/store";
import { getRootState, State } from "../reducers";

export const getTourConfigsState = createSelector(
  getRootState,
  (state: State) => state.tourConfigurations
);
