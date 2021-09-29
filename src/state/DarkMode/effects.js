import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import DayScheme from '../../styles/schemes/DayScheme'
import NightScheme from '../../styles/schemes/NightScheme'

const SchemeProvider = ({children}) => {

  const schemeActive = useSelector((state) => state.Scheme.mode) ? NightScheme : DayScheme

  return (
    <ThemeProvider theme={ schemeActive } >
      {children}
    </ThemeProvider>
  )
}

export default SchemeProvider;
