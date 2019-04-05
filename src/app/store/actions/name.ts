import { Action } from '@ngrx/store';
import { Name } from '../name/name.reducer';

export enum NameActionTypes {
  SetName = '[Name] Set',
}

export class SetName implements Action {
  readonly type = NameActionTypes.SetName;

  constructor(public payload: Name) {}
}

export type NameAction = SetName;
