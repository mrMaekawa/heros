import { ListCharacter, SetCharacterActiveAction } from './types';

const INITIAL_LIST: ListCharacter = {
  modal: false,
  activeCharacter: {
    id: '',
        name: '',
        powerstats: {
          intelligence: '',
          strength: '',
          speed: '',
          durability: '',
          power: '',
          combat: ''
        },
        biography: {
          fullname: '',
          alteregos: '',
          aliases: [ '' ],
          placeofbirth: '',
          firstappearance: '',
          publisher: '',
          alignment: ''
        },
        appearance: {
          gender: '',
          race: '',
          height: [''],
          weight: [''],
          eyecolor: '',
          haircolor: ''
        },
        work: {
          occupation: '',
          base: ''
        },
        connections: {
          groupaffiliation: '',
          relatives: ''
        },
        image: {
          url: ''
        }
  },
}

export default function Active(state: ListCharacter = INITIAL_LIST, action: SetCharacterActiveAction) {
  
  if (action.type === 'SET_CHARACTER_ACTIVE'){
    return {
      ...state,
      activeCharacter: action.active,
      modal: true
    }
  }else if (action.type === 'CLEAR_CHARACTER_ACTIVE'){
    return {
      ...state,
      modal: false
    }
  }

  return state

}
