import React from 'react'
import Switch from 'react-switch'

import { useSelector, useDispatch } from 'react-redux'

import * as Types from '../../../state/DarkMode/types'
import { Container } from './styles'

const Header: React.FC = () => {

  const darkThemeEnabled = useSelector((state:Types.AllState) => state.Scheme.mode)
  const dispatch = useDispatch()

  return (
    <Container>
      SuperHerois
      <Switch
        onChange={() => dispatch({ type: Types.ActionTypes.SET_SCHEME_ACTIVE })}
        checked={darkThemeEnabled}
      >

      </Switch>
    </Container>
  );
};

export default Header;