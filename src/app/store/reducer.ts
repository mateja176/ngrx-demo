import { combineReducers, createSelector } from '@ngrx/store';
import { NameAction } from './name/name.actions';
import { Name, name } from './name/name.reducer';

export interface State {
  name: Name;
}

export default function(state: State, action: NameAction) {
  return combineReducers({
    name,
  })(state, action);
}

/**
 * preferred over feature selector
 */
export const selectName = createSelector<State, string, string>(
  state => state.name,
  a => a,
);
