import React from 'react'
import styled from 'styled-components'

const StyledColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 27%;
  grid-gap: 3%;
  height: 100%;
`

interface IColumnLayoutProps {
  children: React.ReactNodeArray
}

const ColumnLayout = ({ children }: IColumnLayoutProps) => (
  <StyledColumnLayout>{children}</StyledColumnLayout>
)

export default ColumnLayout
