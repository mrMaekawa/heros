import React from 'react'
import Switch from 'react-switch'

import { useSelector, useDispatch } from 'react-redux'

import { ActionTypes } from '../../../state/DarkMode/types'
import { Container } from './styles'

const Header: React.FC = () => {

  const darkThemeEnabled:any = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <Container>
      SuperHerois
      <Switch
        onChange={() => dispatch({ type: ActionTypes.SET_SCHEME_ACTIVE })}
        checked={darkThemeEnabled.Scheme.mode}
      >

      </Switch>
    </Container>
  );
};

export default Header;