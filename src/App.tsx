import React from 'react'
import A4Page from './components/page/A4Page'
import ColumnLayout from './components/columnLayout/ColumnLayout'
import MainColumn from './components/columnLayout/MainColumn'
import SecondaryColumn from './components/columnLayout/SecondaryColumn'

const App = () => (
  <A4Page>
    <ColumnLayout>
      <MainColumn />
      <SecondaryColumn />
    </ColumnLayout>
  </A4Page>
)

export default App
