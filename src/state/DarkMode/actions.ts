import { ActionTypes } from "./types"

export function selectSchemeModeActive() {
  return {
    type: ActionTypes.SET_SCHEME_ACTIVE,
  }
}