import { ActionTypes } from './types'
import service from '../../services/index'

export const changeTerm = (term:string = '') =>{
  return {
    type: ActionTypes.CHANGE_TERM_VALUE,
    term: term
  }
}

export const searchCharacter = (term:string = '') => {
  
  return async(dispatch:any) => {
    
    dispatch({ type: ActionTypes.FETCH_SEARCH_CHARACTER })

    try {
      const response = await service.get(`search/${term}`);
      if(response.data.results){
        dispatch({
          type: ActionTypes.FETCH_SEARCH_CHARACTER_SUCCESS,
          payload: response.data
        })
      }else{
        dispatch({
          type: ActionTypes.FETCH_SEARCH_CHARACTER_ERROR,
          payload: `Não encontramos nenhum personagem chamado <b>'${term}'</b>!`
        })
      }
    }
    catch(e) {
      dispatch({
        type: ActionTypes.FETCH_SEARCH_CHARACTER_ERROR,
        payload: `Temos um problema na comunicação com a API. 
        Tente novamente em instantes!`
      })
    }
  }
}
