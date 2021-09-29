import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { BgImg } from '../../index'

import * as ActiveActions from '../../../state/Active/actions'

import { Container } from './styles'

const Character = ({ Active, selectCharacter}) => {

  return (
  <Container className={ Active.modal ? 'box modal' :  'box' }>
    <BgImg img={ Active.activeCharacter.image.url }  />
    <h2><span>{ Active.activeCharacter.name }</span></h2>
    <section>
      <ul>
        <li key='PowerStatus' className='title'>PowerStatus</li>
        { Object.keys(Active.activeCharacter.powerstats).map((key) => ( 
          <li key={key}>{key}<span>{ Active.activeCharacter.powerstats[key] instanceof Array ? Active.activeCharacter.powerstats[key].join(' ') : Active.activeCharacter.powerstats[key] }</span></li>
        )) }
      </ul>

      <ul>
        <li key='Connections' className='title'>Connections</li>
        { Object.keys(Active.activeCharacter.connections).map((key) => ( 
          <li key={key}>{key}<span>{ Active.activeCharacter.connections[key] instanceof Array ? Active.activeCharacter.connections[key].join(', ') : Active.activeCharacter.connections[key] }</span></li>
        )) }
      </ul>

      <ul>
        <li key='Biography' className='title'>Biography</li>
        { Object.keys(Active.activeCharacter.biography).map((key) => ( 
          <li key={key}>{key}<span>{ Active.activeCharacter.biography[key] instanceof Array ? Active.activeCharacter.biography[key].join(', ') : Active.activeCharacter.biography[key] }</span></li>
        )) }
      </ul>

      <ul>
        <li key='Appearance' className='title'>Appearance</li>
        { Object.keys(Active.activeCharacter.appearance).map((key) => ( 
          <li key={key}>{key}<span>{ Active.activeCharacter.appearance[key] instanceof Array ? Active.activeCharacter.appearance[key].join(', ') : Active.activeCharacter.appearance[key] }</span></li>
        )) }
      </ul>

      <ul>
        <li key='Work' className='title'>Work</li>
        { Object.keys(Active.activeCharacter.work).map((key) => ( 
          <li key={key}>{key}<span>{ Active.activeCharacter.work[key] instanceof Array ? Active.activeCharacter.work[key].join(', ') : Active.activeCharacter.work[key] }</span></li>
        )) }
      </ul>
      
    </section>
    <div
      onClick={() => selectCharacter(null, true)}
      className={ 'close' }
    />
  </Container>
  )

}

const mapStateToProps = state => {
  return ({ Active: state.Active })
}

const mapDispatchToProps = dispatch => bindActionCreators(ActiveActions, dispatch)

export default connect(  
  mapStateToProps, 
  mapDispatchToProps
)(Character);