import { combineReducers, createFeatureSelector } from '@ngrx/store';
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

export const selectName = createFeatureSelector<State, string>('name');
