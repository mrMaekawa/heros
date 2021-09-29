import { 
  ActionTypes,
  SearchResult,
  ActionPost
} from './types'

const INITIAL_LIST: SearchResult = {
  response: '',
  'results-for': '',
  results: [ ]
}

const Search = (state: SearchResult = INITIAL_LIST, action: ActionPost) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TERM_VALUE:
      return {
        ...state,
        term: action.term,
      }
    case ActionTypes.FETCH_SEARCH_CHARACTER:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.FETCH_SEARCH_CHARACTER_SUCCESS:
      return {
        ...state,
        response: action.payload.response,
        'results-for': action.payload['results-for'],
        results: action.payload.results,
        success: true,
        loading: false,
      }
    case ActionTypes.FETCH_SEARCH_CHARACTER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default Search;