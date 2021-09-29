import React from 'react'
import { useDispatch } from 'react-redux'

import { Container } from './styles'

import { searchCharacter, changeTerm } from '../../state/Search/actions'

export default function Searchbar() {
  
  const dispatch = useDispatch();

  const updateInputValue = (e:any) => {
    dispatch(changeTerm( e.target.value ))
  }

  const getCharacter = () => {
    dispatch(searchCharacter( 'spider'))
  }

  return (
    <Container>
      <input onChange={ updateInputValue } />
      <button onClick={ getCharacter } >BUSCAR</button>
    </Container>
  )
}
