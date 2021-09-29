import { ActionTypes } from "./types"
import { SetSchemeActiveAction, SchemeState } from './types';

export default function Scheme(state: SchemeState =  { mode: false }, action: SetSchemeActiveAction) {

  switch (action.type) {
    case ActionTypes.SET_SCHEME_ACTIVE:
      return { 
        ...state,
        mode: !state.mode
      };
  
    default:
      return state;
  }
}
