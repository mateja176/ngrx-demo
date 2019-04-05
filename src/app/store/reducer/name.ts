import { NameAction, NameActionTypes } from '../actions/name';

export type Name = string;

export const initialName = 'Jane';

export const name = (state = initialName, action: NameAction) => {
  switch (action.type) {
    case NameActionTypes.SetName:
      return action.payload;

    default:
      return state;
  }
};
