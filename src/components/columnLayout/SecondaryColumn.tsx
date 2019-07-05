import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
  background: lightBlue;
`

const SecondaryColumn = () => (
  <Column>
    <div>secondary column</div>
  </Column>
)

export default SecondaryColumn
