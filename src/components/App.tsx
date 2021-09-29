import React  from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import Store from '../state/store'
import SchemeProvider from '../state/DarkMode/effects'

import GlobalStyle from '../styles/global'
import { LandingPage } from './'

const App: React.FC = () => {
  return (
    <div>
      <ReduxProvider store={Store}>
        <SchemeProvider>
          <GlobalStyle />
          <LandingPage />
        </SchemeProvider>
      </ReduxProvider>
    </div>
  )
}

export default App
