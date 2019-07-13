import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import PreviewPage from './views/PreviewPage'
import PrintablePage from './views/PrintablePage'

// @ts-ignore
import data from '../data/data'

const StyledApp = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  line-height: 1.7;
  color: rgb(48, 48, 48);
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
