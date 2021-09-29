export enum ActionTypes {
  SET_SCHEME_ACTIVE = 'SET_SCHEME_ACTIVE',
}

export interface SetSchemeActiveAction {
  type: ActionTypes.SET_SCHEME_ACTIVE;
  mode: string;
}

export interface SchemeState {
  mode: boolean;
}
