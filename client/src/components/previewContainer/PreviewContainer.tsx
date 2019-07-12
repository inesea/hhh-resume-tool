import React from 'react'
import styled from 'styled-components'

const StyledResumeContainer = styled.div`
  background: white;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 23cm;
  height: 29.7cm;
  margin: 0 auto;
  margin-top: 1cm;
  margin-bottom: 1cm;
`

interface IResumeContainerProps {
  children: React.ReactNode
}

const ResumeContainer = ({ children }: IResumeContainerProps) => (
  <StyledResumeContainer>{children}</StyledResumeContainer>
)

export default ResumeContainer
