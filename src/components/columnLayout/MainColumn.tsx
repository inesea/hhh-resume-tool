import React from 'react'
import styled from 'styled-components'
import MainDetail from '../MainDetail'

const Column = styled.div`
  background: lightGrey;
`

const MainColumn = () => (
  <Column>
    <MainDetail
      name="inese avota"
      phoneNumber="+44 44 444 44444"
      summaryText="Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... Software engineer trying to build a cv template... "
    />
  </Column>
)

export default MainColumn
