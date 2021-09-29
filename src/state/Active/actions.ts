import { ActionTypes } from "./types"

export function selectCharacter(character:any) {
  return {
    type: ActionTypes.SET_CHARACTER_ACTIVE,
    active: character
  }
}
