import { ListCharacter, SetCharacterActiveAction } from './types';

const INITIAL_LIST: ListCharacter = {
  activeCharacter: {},
}

export default function Active(state: ListCharacter = INITIAL_LIST, action: SetCharacterActiveAction) {
  //console.log('reducer', action.active)

  
  if (action.type === 'SET_CHARACTER_ACTIVE'){
    return {
      ...state,
      activeCharacter: action.active
    }
  }

  return state

}
