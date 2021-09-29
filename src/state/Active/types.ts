export enum ActionTypes {
  SET_CHARACTER_ACTIVE = 'SET_CHARACTER_ACTIVE',
  CLEAR_CHARACTER_ACTIVE = 'CLEAR_CHARACTER_ACTIVE'
}

export interface SetCharacterActiveAction {
  type: ActionTypes.SET_CHARACTER_ACTIVE;
  active?: ListCharacter;
}

export interface ListCharacter {
  activeCharacter?: object | ListCharResults;
  modal?: boolean;
}

export interface AllState{
  Search: ListCharacter;
}
export interface ListCharResults {
    id: string;
    name?: string;
    powerstats?: ListCharResultPowerstats;
    biography?: ListCharResultBiography;
    appearance?: ListCharResultAppearance;
    work?: ListCharResultWork;
    connections?: ListCharResultConnections;
    image?: ListCharResultImage;
  }

  export interface ListCharResultPowerstats {
  intelligence?: string;
  strength?: string;
  speed?: string;
  durability?: string;
  power?: string;
  combat?: string;
}

export interface ListCharResultBiography {
  'full-name'?: string;
  'alter-egos'?: string;
  aliases?: string[];
  'place-of-birth'?: string;
  'first-appearance'?: string;
  publisher?: string;
  alignment?: string;
}

export interface ListCharResultAppearance {
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[],
  'eye-color'?: string;
  'hair-color'?: string;
}

export interface ListCharResultWork {
  occupation?: string;
  base?: string;
}

export interface ListCharResultConnections {
  'group-affiliation'?: string;
  relatives?: string;
}

interface ListCharResultImage {
  url?: string;
}
