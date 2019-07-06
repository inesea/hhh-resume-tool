import React from 'react'
import styled from 'styled-components'

import A4Page from './components/page/A4Page'
import ColumnLayout from './components/columnLayout/ColumnLayout'
import MainColumn from './components/columnLayout/MainColumn'
import SecondaryColumn from './components/columnLayout/SecondaryColumn'

const StyledApp = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 170%;
  color: rgb(48, 48, 48);
`

const App = () => (
  <StyledApp>
    <A4Page>
      <ColumnLayout>
        <MainColumn />
        <SecondaryColumn />
      </ColumnLayout>
    </A4Page>
  </StyledApp>
)

export default App
