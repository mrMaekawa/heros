import React , { KeyboardEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from './styles'
import { ButtonForm } from '../../index'

import { AllState } from '../../../state/Search/types'
import { searchCharacter, changeTerm } from '../../../state/Search/actions'

export default function Searchbar() {
  
  const termValue = useSelector((state: AllState) => state.Search.term)
  const dispatch = useDispatch();

  const updateInputValue = (e:any) => {
    dispatch(changeTerm( e.target.value ))
  }

  const getCharacter = () => {
    if (termValue){
      dispatch(searchCharacter( termValue ))
    }
  }

  const handleKeywordKeypress = (e: KeyboardEvent) => {
    if (termValue && e.key === 'Enter'){
      dispatch(searchCharacter( termValue ))
    }
  };

  return (
    <Container>
      <input 
        onChange={ updateInputValue } 
        placeholder={ 'ex. super, spider, thanos, etc... ' }
        onKeyPress={ handleKeywordKeypress }
      />
      <ButtonForm onClick={ getCharacter } />
    </Container>
  )
}
