import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchBar from '../SearchBar/index'

import { Container } from './styles'

import * as ActiveActions from '../../state/Active/actions'

const Sidebar = ({ results, selectCharacter }) => (
  <Container>
    <SearchBar />
    <ul>
      {results.map( character => (
        <li key={character.id}>
          {character.name}
          <button onClick={() => selectCharacter(character)}>selecionar</button>
        </li>
      ))}
    </ul>
  </Container>
)

const mapStateToProps = state => {
  // console.log(state)
  return ({ results: state.Search.results })
}

const mapDispatchToProps = dispatch => bindActionCreators(ActiveActions, dispatch)

export default connect(  
  mapStateToProps, 
  mapDispatchToProps
)(Sidebar);