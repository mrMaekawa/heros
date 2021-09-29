import React from 'react'
import Switch from 'react-switch'
import { useSelector, useDispatch } from 'react-redux'

import * as Types from '../../../state/DarkMode/types'
import { Container } from './styles'

const SwitchDarkMode: React.FC = () => {

  const darkThemeEnabled = useSelector((state:Types.AllState) => state.Scheme.mode)
  const dispatch = useDispatch()

  return (
    <Container className='darkmode'>
      <Switch
        onChange={() => dispatch({ type: Types.ActionTypes.SET_SCHEME_ACTIVE })}
        checked={darkThemeEnabled}
        uncheckedIcon={false}
        checkedIcon={false}
        id='darkmode-switch'
        className={darkThemeEnabled?'darkmode-switch night':'darkmode-switch day'}
      />
    </Container>
  );
};

export default SwitchDarkMode;