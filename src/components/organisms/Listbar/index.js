import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActiveActions from '../../../state/Active/actions'

import { Card } from '../../index'
import { Container } from './styles'

const Listbar = ({ search, selectCharacter }) => {
  if(search.results.length) return (
    <Container
      className={ search.results.length > 4 ? 'between':'' }
    >
      {search.results.map( character => (
        <div
          key={character.id} 
          onClick={() => selectCharacter(character)}
          className={ 'card' }
        >
          <Card 
            nameChar={character.name}
            imgChar={character.image.url}
          />
        </div>
      ))}
    </Container>
  )
  return (
    <Container>
      <p dangerouslySetInnerHTML={ { __html: search.error } }></p>
    </Container>
  )
}

const mapStateToProps = state => {
  return ({ search: state.Search })
}

const mapDispatchToProps = dispatch => bindActionCreators(ActiveActions, dispatch)

export default connect(  
  mapStateToProps, 
  mapDispatchToProps
)(Listbar);
