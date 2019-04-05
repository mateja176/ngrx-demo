import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { NameAction } from './name/name.actions';
import { Name, name } from './name/name.reducer';

export interface State {
  name: Name;
}

export type ReducerMap = ActionReducerMap<State, NameAction>;

export const reducerMap: ReducerMap = {
  name,
};

export const selectName = createFeatureSelector<State, string>('name');
