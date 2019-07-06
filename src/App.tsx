import React from 'react'
import styled from 'styled-components'

import Resume from './components/resume/Resume'

// @ts-ignore
import mockResume from '../mock_data/mockResume'

const StyledApp = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: rgb(48, 48, 48);
`

const App = () => (
  <StyledApp>
    <Resume resume={mockResume} />
  </StyledApp>
)

export default App
