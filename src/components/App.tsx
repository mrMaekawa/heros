import React  from 'react'
import { ThemeProvider } from 'styled-components'

import DayScheme from '../styles/schemes/DayScheme'
import NightScheme from '../styles/schemes/NightScheme'

import GlobalStyle from '../styles/global'
import { LandingPage } from './'

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={DayScheme}>
        <GlobalStyle />
        <LandingPage />
      </ThemeProvider>
    </div>
  )
}

export default App
