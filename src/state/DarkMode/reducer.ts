import { ActionTypes, SetSchemeActiveAction, SchemeState } from './types';

const InitialState: boolean =  localStorage.getItem('scheme') === 'true' ?  false  :  true

export default function Scheme(state: SchemeState =  {mode: InitialState}, action: SetSchemeActiveAction) {
  
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
