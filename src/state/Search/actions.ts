import { ActionTypes } from './types'
import service from '../../services/index'

export const changeTerm = (term:string = '') =>{
  return {
    type: ActionTypes.CHANGE_TERM_VALUE,
    term: term
  }
}

export const searchCharacter = (term:string = 'super') => {
  return async(dispatch:any) => {
    dispatch({
      type: ActionTypes.FETCH_SEARCH_CHARACTER
    })

    try {
      const response = await service.get(`search/${term}`);

      dispatch({
        type: ActionTypes.FETCH_SEARCH_CHARACTER_SUCCESS,
        payload: response.data
      })
    }
    catch(e) {
      dispatch({
        type: ActionTypes.FETCH_SEARCH_CHARACTER_ERROR,
        payload: 'Erro ao buscar os personagens!'
      })
    }
  }
}
