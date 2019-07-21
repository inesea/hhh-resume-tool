import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import PreviewPage from './views/PreviewPage'
import PrintablePage from './views/PrintablePage'

import * as styles from './styles/commonStyles'

// @ts-ignore
import data from '../data/data'

const StyledApp = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: ${styles.text.size.main};
  line-height: ${styles.text.lineHight.main};
  color: ${styles.text.color.main};
`

const App = () => (
  <StyledApp>
    <Router>
      <Route exact path="/" component={() => <PreviewPage resume={data} />} />
      <Route
        path="/printable"
        component={() => <PrintablePage resume={data} />}
      />
    </Router>
  </StyledApp>
)

export default App
