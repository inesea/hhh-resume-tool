import React from 'react'
import styled from 'styled-components'
import SectionHeading from './SecondarySectionHeading'

const StyledSecondarySection = styled.div`
  margin-bottom: 40px;
`

interface ISecondarySectionProps {
  title: string
  listItems: string[]
}

const SecondarySection = ({ title, listItems }: ISecondarySectionProps) => (
  <StyledSecondarySection>
    <SectionHeading>{title}</SectionHeading>
    {listItems.map(item => (
      <div key={item}>{item}</div>
    ))}
  </StyledSecondarySection>
)

export default SecondarySection
