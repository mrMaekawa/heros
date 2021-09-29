import React from 'react';

import { connect } from 'react-redux';

import { Container } from './styles'

const Character = ({ ActiveCharacter }) => {
  return (
  <Container>
    <strong>
      {ActiveCharacter.name}
    </strong>
  </Container>
  )
}


export default connect( state => { 
  //console.log('chegou', state)
  return ({
    ActiveCharacter: state.Active.activeCharacter
  })
})(Character);