import { ActionTypes } from "./types"

export function selectCharacter(character:any, close:boolean = false) {
  if(!close) return {
    type: ActionTypes.SET_CHARACTER_ACTIVE,
    active: character
  }

  return {
    type: ActionTypes.CLEAR_CHARACTER_ACTIVE
  }
}