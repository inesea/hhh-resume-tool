import React from 'react'
import styled from 'styled-components'

const StyledMainSectionWrapper = styled.div`
  margin-bottom: 20px;
`

interface IMainSectionWrapperProps {
  children: React.ReactNode
}

const MainSectionWrapper = ({ children }: IMainSectionWrapperProps) => (
  <StyledMainSectionWrapper>{children}</StyledMainSectionWrapper>
)

export default MainSectionWrapper
