import React from 'react'
import styled from 'styled-components'

const StyledSectionTitle = styled.div`
  letter-spacing: 5px;
  text-transform: uppercase
  font-size: 14px;
  font-weight: bold;
`

interface ISectionTitleProps {
  children: string
}

const SectionTitle = ({ children }: ISectionTitleProps) => (
  <StyledSectionTitle>{children}</StyledSectionTitle>
)

export default SectionTitle
