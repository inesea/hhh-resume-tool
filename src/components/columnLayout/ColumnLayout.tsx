import React from 'react'
import styled from 'styled-components'
import MainColumn from './MainColumn'
import SecondaryColumn from './SecondaryColumn'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 600px 200px;
  grid-gap: 30px;
`

const ColumnLayout: React.FC<React.HTMLAttributes<{}>> = () => (
  <Wrapper>
    <MainColumn />
    <SecondaryColumn />
  </Wrapper>
)

export default ColumnLayout
