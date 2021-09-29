export enum ActionTypes {
  FETCH_SEARCH_CHARACTER = 'FETCH_SEARCH_CHARACTER',
  FETCH_SEARCH_CHARACTER_SUCCESS = 'FETCH_SEARCH_CHARACTER_SUCCESS',
  FETCH_SEARCH_CHARACTER_ERROR = 'FETCH_SEARCH_CHARACTER_ERROR',
  CHANGE_TERM_VALUE = 'CHANGE_TERM_VALUE'
}

export interface ChangeTermValue {
  type: ActionTypes.CHANGE_TERM_VALUE;
  term: string;
}

export interface FetchSerchChar {
  type: ActionTypes.FETCH_SEARCH_CHARACTER;
  payload: SearchResult;
}

export interface FetchSerchCharSuccess {
  type: ActionTypes.FETCH_SEARCH_CHARACTER_SUCCESS;
  payload: SearchResult;
}

export interface FetchSerchCharError {
  type: ActionTypes.FETCH_SEARCH_CHARACTER_ERROR;
  payload: SearchResult;
}

export type ActionPost = FetchSerchChar | FetchSerchCharSuccess | FetchSerchCharError | ChangeTermValue


export interface AllState{
  Search: SearchResult;
}

export interface SearchResult {
  loading?: boolean;
  success?: boolean;
  response: string;
  error?: string;
  'results-for'?: string;
  results?: [] | ListCharResults[];
  term?: string;
}

interface ListCharResults {
    id: string;
    name?: string;
    powerstats?: ListCharResultPowerstats;
    biography?: ListCharResultBiography;
    appearance?: ListCharResultAppearance;
    work?: ListCharResultWork;
    connections?: ListCharResultConnections;
    image?: ListCharResultImage;
  }

interface ListCharResultPowerstats {
  intelligence?: string;
  strength?: string;
  speed?: string;
  durability?: string;
  power?: string;
  combat?: string;
}

interface ListCharResultBiography {
  'full-name'?: string;
  'alter-egos'?: string;
  aliases?: string[];
  'place-of-birth'?: string;
  'first-appearance'?: string;
  publisher?: string;
  alignment?: string;
}

interface ListCharResultAppearance {
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[],
  'eye-color'?: string;
  'hair-color'?: string;
}

interface ListCharResultWork {
  occupation?: string;
  base?: string;
}

interface ListCharResultConnections {
  'group-affiliation'?: string;
  relatives?: string;
}

interface ListCharResultImage {
  url?: string;
}
