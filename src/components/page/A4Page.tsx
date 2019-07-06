import React from 'react'
import styled from 'styled-components'

const StyledA4Page = styled.div`
  background: white;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
  margin: 0 auto;
  margin-top: 1cm;
  margin-bottom: 1cm;
  padding: 1cm;
`

interface IA4PageProps {
  children: React.ReactNode
}

const A4Page = ({ children }: IA4PageProps) => (
  <StyledA4Page>{children}</StyledA4Page>
)

export default A4Page
