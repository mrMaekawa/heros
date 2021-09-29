import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchBar from '../SearchBar/index'

import { Container } from './styles'

import * as ActiveActions from '../../state/Active/actions'

const Sidebar = ({ search, selectCharacter }) => {
  console.log('search',search)
  if(search.results.lenght) return (
    <Container>
      <SearchBar />
      <ul>
        {search.results.map( character => (
          <li key={character.id}>
            {character.name}
            <button onClick={() => selectCharacter(character)}>selecionar</button>
          </li>
        ))}
      </ul>
    </Container>
  )
  return (
    <Container>
      <SearchBar />
      <p dangerouslySetInnerHTML={ { __html: search.error } }></p>
    </Container>
  )
}

const mapStateToProps = state => {
  // console.log(state)
  return ({ search: state.Search })
}

const mapDispatchToProps = dispatch => bindActionCreators(ActiveActions, dispatch)

export default connect(  
  mapStateToProps, 
  mapDispatchToProps
)(Sidebar);